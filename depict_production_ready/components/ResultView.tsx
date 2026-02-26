import React, { useEffect, useState, useRef } from 'react';
import { Result } from '../types';
import { generateResultImage } from '../services/gemini';
import * as htmlToImage from 'html-to-image';
import { track } from '@vercel/analytics'; // 👈 1. 추적 기능 가져오기

interface ResultViewProps {
  result: Result;
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ result, onReset }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const resultRef = useRef<HTMLDivElement>(null);

  // 👈 2. 클릭 시 '어떤 유형의 결과'에서 펀딩을 눌렀는지 기록하는 함수
  const handleFundingClick = () => {
    track('Funding_Result_Click', { 
      resultType: result.name // 어떤 유형(예: 현미경형)이 펀딩을 많이 눌렀는지도 알 수 있어요!
    });
  };

  useEffect(() => {
    async function fetchImage() {
      const staticImageMap: Record<string, string> = {
        '현미경형': '/micro.png',
        '전등 스위치형': '/light-switch.jpg',
        '투 머치 토크형': '/Brilliance.jpg',
        '돌직구 보고형': '/report.jpg',
        '보안관형': '/sheriff.jpg',
        '유리 진열장형': '/glass.jpg',
      };

      const matchedImage = staticImageMap[result.name];
      if (matchedImage) {
        setImageUrl(matchedImage);
        setIsLoadingImage(false);
        return;
      }

      setIsLoadingImage(true);
      try {
        const url = await generateResultImage(result.imagePrompt);
        setImageUrl(url || `https://picsum.photos/seed/${result.id}/800/1000`);
      } catch (err) {
        setImageUrl(`https://picsum.photos/seed/${result.id}/800/1000`);
      } finally {
        setIsLoadingImage(false);
      }
    }
    fetchImage();
  }, [result]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '집필 심리 테스트 결과',
          text: `나의 집필 유형은 [${result.name}]입니다!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 클립보드에 복사되었습니다.');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  const handleSaveImage = async () => {
    if (resultRef.current === null) return;

    try {
      const dataUrl = await htmlToImage.toPng(resultRef.current, {
        cacheBust: true,
        backgroundColor: '#fdfcf8',
      });
      const link = document.createElement('a');
      link.download = `집필진단_${result.name}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error saving image:', error);
      alert('이미지 저장 중 오류가 발생했습니다.');
    }
  };

  const chapters = result.chapterTitle.split(',').map(c => c.trim());

  const formatResultName = (name: string) => {
    if (name === '투 머치 토크형') {
      return (
        <>
          투 머치<br />토크형
        </>
      );
    }

    const words = name.split(' ');
    if (words.length === 2) {
      return (
        <>
          {words[0]}<br />{words[1]}
        </>
      );
    }

    return name;
  };

  return (
    <div ref={resultRef} className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 w-full overflow-x-hidden">
      <div className="text-center mb-10 md:mb-16">
        <p className="text-[10px] md:text-[11px] tracking-[0.4em] text-orange-500 mb-3 md:mb-4 font-bold uppercase">진단 결과 보고서</p>
        <h2 className="serif-title text-4xl sm:text-5xl md:text-8xl italic mb-3 md:mb-4 font-bold text-gray-800 leading-tight break-keep">
          {formatResultName(result.name)}
        </h2>
        <p className="text-base md:text-lg text-gray-500 serif-title italic px-4 break-keep">"{result.definition}"</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
        <div className="relative md:sticky md:top-8 z-0 w-full px-2 md:px-0">
          {isLoadingImage ? (
            <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] bg-orange-50 flex flex-col items-center justify-center animate-pulse rounded-sm border border-orange-100">
              <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-4"></div>
              <p className="text-[10px] md:text-[11px] tracking-widest text-orange-400 font-bold">유형별 맞춤 이미지 준비 중...</p>
            </div>
          ) : (
            <div className="relative group w-full">
              <img
                src={imageUrl || ''}
                alt={result.name}
                className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover rounded-md border border-orange-100 shadow-2xl transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white p-2 md:p-4 border border-orange-100 rotate-6 shadow-lg z-10">
                <p className="text-[7px] md:text-[9px] text-gray-400 tracking-tighter text-center mt-1 md:mt-2 italic font-bold break-all">진단 코드: {result.id}</p>
                <div className="mt-2 md:mt-4 border-t border-dashed border-gray-200 pt-1 md:pt-2 text-center text-[9px] md:text-[11px] serif-title font-bold text-orange-500">글캉스 공식 인증인</div>
              </div>
            </div>
          )}
        </div>

        <div className="py-2 md:py-4 px-2 md:px-0">
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-sm border border-orange-100 shadow-sm mb-8 w-full">
            <h4 className="text-[10px] md:text-[11px] tracking-widest text-orange-500 mb-6 md:mb-8 flex items-center gap-2 font-bold uppercase">
              <span className="w-8 md:w-10 h-[1px] bg-orange-200"></span> 성향 진단 및 분석
            </h4>
            <div className="text-[13px] md:text-base leading-[1.8] md:leading-[2] text-gray-700 font-medium whitespace-pre-line break-keep">
              {result.description}
            </div>
          </div>

          <div className="bg-orange-50/30 p-6 sm:p-8 md:p-10 rounded-sm border border-orange-100 border-dashed w-full">
            <h4 className="text-[10px] md:text-[11px] tracking-widest text-orange-600 mb-6 md:mb-8 flex items-center gap-2 font-bold uppercase leading-relaxed break-keep">
              <span className="w-10 h-[1px] bg-orange-300"></span> 책 [막힐 때 바로 찾는 묘사 처방전]에서 도움을 받을 수 있는 챕터
            </h4>

            <div className="space-y-6 relative ml-2">
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-orange-200"></div>

              {chapters.map((chapter, index) => (
                <div key={index} className="relative pl-8 animate-in fade-in slide-in-from-left-4 duration-700" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="absolute left-0 top-[6px] w-[15px] h-[15px] bg-white border-2 border-orange-400 rounded-full z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-[11px] text-orange-400 font-bold mb-1 uppercase tracking-tighter">Step {index + 1}</p>
                  <p className="text-sm md:text-base text-gray-800 font-bold leading-relaxed whitespace-pre-line">
                    {chapter}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-orange-100">
              <p className="text-sm text-gray-500 leading-relaxed italic">
                위의 가이드는 〈웹소설 묘사 처방전〉 도서 내에서 {result.name} 작가님께 가장 권장하는 학습 경로입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] text-white p-8 sm:p-12 md:p-20 text-center rounded-sm relative overflow-hidden shadow-2xl mx-2 md:mx-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <p className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] text-orange-400 mb-6 md:mb-8 font-bold uppercase">처방전 받으러 가기</p>
          <h3 className="serif-title text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-10 font-bold leading-[1.6] md:leading-[1.8] break-keep">
            지금 바로 <br />
            나만의 처방전을 소장하세요
          </h3>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full px-4 md:px-0">
            <div className="relative w-full md:w-auto">
              <a
                href="https://tum.bg/B9Js0E"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleFundingClick} // 👈 3-1. 텍스트 버튼 클릭 시 기록!
                className="relative z-10 bg-orange-500 text-white px-6 md:px-10 py-5 text-[13px] md:text-sm font-bold tracking-widest hover:bg-orange-600 transition-all transform hover:-translate-y-1 rounded-sm shadow-lg flex justify-center items-center active:scale-95 w-full block"
              >
                👉 펀딩 페이지 보러 가기
              </a>
              <a 
                href="https://tum.bg/B9Js0E" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleFundingClick} // 👈 3-2. 이미지 버튼 클릭 시에도 기록!
              >
                <img
                  src="/funding.png"
                  alt="Funding Decoration"
                  className="absolute -top-8 -right-2 md:-top-10 md:-right-8 w-14 h-14 md:w-20 md:h-20 object-contain z-20 hover:scale-105 transition-transform duration-300 drop-shadow-lg cursor-pointer hover:-translate-y-1 hover:rotate-6"
                />
              </a>
            </div>
            <button
              onClick={onReset}
              className="bg-white/10 text-white border border-white/20 px-6 md:px-10 py-5 text-[13px] md:text-sm font-bold tracking-widest hover:bg-white/20 transition-all transform hover:-translate-y-1 rounded-sm shadow-lg active:scale-95 w-full md:w-auto flex justify-center items-center"
            >
              🔄 다시 테스트하기
            </button>
          </div>

          <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-center gap-6 md:gap-8 items-center">
            <button
              onClick={handleShare}
              className="text-[11px] tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-2 font-bold group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-orange-400 transition-colors"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
              테스트 공유하기
            </button>
            <button
              onClick={handleSaveImage}
              className="text-[11px] tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-2 font-bold group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-orange-400 transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              진단 카드 저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
