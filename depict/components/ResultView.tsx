
import React, { useEffect, useState } from 'react';
import { Result } from '../types';
import { generateResultImage } from '../services/gemini';

interface ResultViewProps {
  result: Result;
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ result, onReset }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      setIsLoadingImage(true);
      const url = await generateResultImage(result.imagePrompt);
      setImageUrl(url || `https://picsum.photos/seed/${result.id}/800/1000`);
      setIsLoadingImage(false);
    }
    fetchImage();
  }, [result]);

  // Split chapters by comma to create a "trajectory" list
  const chapters = result.chapterTitle.split(',').map(c => c.trim());

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.4em] text-orange-500 mb-4 font-bold uppercase">진단 결과 보고서</p>
        <h2 className="serif-title text-6xl md:text-8xl italic mb-4 font-bold text-gray-800">{result.name}</h2>
        <p className="text-lg text-gray-500 serif-title italic">"{result.definition}"</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
        {/* Left: AI Generated Visual */}
        <div className="relative md:sticky md:top-8 z-0">
          {isLoadingImage ? (
            <div className="w-full h-[400px] md:h-[600px] bg-orange-50 flex flex-col items-center justify-center animate-pulse rounded-sm border border-orange-100">
                <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-4"></div>
                <p className="text-[10px] tracking-widest text-orange-400 font-bold">유형별 맞춤 이미지 생성 중...</p>
            </div>
          ) : (
            <div className="relative group">
                <img 
                    src={imageUrl || ''} 
                    alt={result.name} 
                    className="w-full h-[400px] md:h-[600px] object-cover rounded-sm border border-orange-100 shadow-2xl transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-white p-3 md:p-4 border border-orange-100 rotate-6 shadow-lg z-10">
                     <p className="text-[7px] md:text-[8px] text-gray-400 tracking-tighter text-center mt-1 md:mt-2 italic font-bold">진단 코드: {result.id}</p>
                     <div className="mt-2 md:mt-4 border-t border-dashed border-gray-200 pt-1 md:pt-2 text-center text-[8px] md:text-[10px] serif-title font-bold text-orange-500">글캉스 공식 인증인</div>
                </div>
            </div>
          )}
        </div>

        {/* Right: Integrated Description & Solution Trajectory */}
        <div className="py-4">
          <div className="bg-white p-8 md:p-12 rounded-sm border border-orange-100 shadow-sm mb-8">
            <h4 className="text-[10px] tracking-widest text-orange-500 mb-8 flex items-center gap-2 font-bold uppercase">
                <span className="w-10 h-[1px] bg-orange-200"></span> 성향 진단 및 분석
            </h4>
            <div className="text-sm md:text-base leading-[2] text-gray-700 font-medium whitespace-pre-line">
              {result.description}
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-orange-50/30 p-8 md:p-10 rounded-sm border border-orange-100 border-dashed">
            <h4 className="text-[10px] tracking-widest text-orange-600 mb-8 flex items-center gap-2 font-bold uppercase">
                <span className="w-10 h-[1px] bg-orange-300"></span> 책 [막힐 때 바로 찾는 묘사 처방전]에서 도움을 받을 수 있는 챕터
            </h4>
            
            <div className="space-y-6 relative ml-2">
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-orange-200"></div>
              
              {chapters.map((chapter, index) => (
                <div key={index} className="relative pl-8 animate-in fade-in slide-in-from-left-4 duration-700" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="absolute left-0 top-[6px] w-[15px] h-[15px] bg-white border-2 border-orange-400 rounded-full z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-[10px] text-orange-400 font-bold mb-1 uppercase tracking-tighter">Step {index + 1}</p>
                  <p className="text-sm md:text-base text-gray-800 font-bold leading-relaxed whitespace-pre-line">
                    {chapter}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-orange-100">
              <p className="text-xs text-gray-500 leading-relaxed italic">
                위의 가이드는 〈웹소설 묘사 처방전〉 도서 내에서 {result.name} 작가님께 가장 권장하는 학습 경로입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Section: CTA */}
      <div className="bg-[#1a1a1a] text-white p-12 md:p-20 text-center rounded-sm relative overflow-hidden shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10">
            <p className="text-[10px] tracking-[0.4em] text-orange-400 mb-8 font-bold uppercase">처방전 받으러 가기</p>
            <h3 className="serif-title text-3xl md:text-4xl mb-10 font-bold leading-[1.8]">
                지금 바로 텀블벅에서 <br/>
                나만의 처방전을 소장하세요
            </h3>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a 
                  href="https://tumblbug.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-10 py-5 text-sm font-bold tracking-widest hover:bg-orange-600 transition-all transform hover:-translate-y-1 rounded-sm shadow-lg inline-block active:scale-95"
                >
                    👉 펀딩 페이지 보러 가기
                </a>
                <button 
                  onClick={onReset}
                  className="bg-white/10 text-white border border-white/20 px-10 py-5 text-sm font-bold tracking-widest hover:bg-white/20 transition-all transform hover:-translate-y-1 rounded-sm shadow-lg inline-block active:scale-95"
                >
                    🔄 다시 테스트하기
                </button>
            </div>
            
            <div className="mt-16 flex justify-center gap-8">
                <button className="text-[10px] tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-2 font-bold group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-orange-400 transition-colors"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                    테스트 공유하기
                </button>
                <button className="text-[10px] tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-2 font-bold group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-orange-400 transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    진단 카드 저장
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
