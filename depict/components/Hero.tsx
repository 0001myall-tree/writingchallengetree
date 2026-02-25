
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Intro Text Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
             <svg width="200" height="100" viewBox="0 0 200 100">
                <path id="curve" d="M 0 80 Q 100 0 200 80" fill="transparent"/>
                <text className="text-[11px] font-medium tracking-[0.2em] fill-[#e86a33]">
                    <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                        당신의 문장에 숨겨진 고유한 색채를 찾아서
                    </textPath>
                </text>
            </svg>
        </div>
        
        {/* RFP 5-1. 타겟 제한 강조 */}
        <div className="inline-block border border-orange-200 px-4 py-1 mb-6 rounded-full bg-orange-50/50">
            <span className="text-[11px] tracking-widest text-orange-600 font-bold uppercase">⚠️ 소설 창작 경험자 전용 진단</span>
        </div>

        <h2 className="serif-title text-4xl md:text-7xl mb-8 leading-[1.3] md:leading-[1.5] font-bold text-gray-800">
          묘사 스타일로 <br/>
          보는 <br className="md:hidden" />
          성향 테스트 🖋️
        </h2>
        
        <p className="text-sm md:text-base tracking-widest text-gray-500 mb-10 max-w-md mx-auto leading-relaxed px-4">
          자신의 묘사 방식을 인지하고 계신가요?<br/>
          <span className="text-orange-500 font-bold">12개 문항</span>으로 당신의 창작 DNA를 분석합니다.
        </p>

        <button 
          onClick={onStart}
          className="bg-[#e86a33] text-white px-10 md:px-14 py-5 md:py-6 text-sm font-bold tracking-widest hover:bg-[#d55a2a] transition-all transform hover:-translate-y-1 rounded-sm shadow-xl active:scale-95 mb-4"
        >
          진단 시작하기
        </button>
        
        {/* RFP 4-1. 예상 소요 시간 표기 */}
        <p className="text-xs md:text-sm text-gray-400 tracking-widest">예상 소요 시간 : 약 2~3분</p>
      </div>

      {/* Single Large Hero Image Section with Blur Effect for teaser */}
      <div className="relative mb-24 px-4 md:px-0">
        <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-sm shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200" 
            alt="Writer's table with aesthetic light" 
            className="w-full h-full object-cover filter sepia-[0.1] transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-12 left-10 md:left-16 text-white max-w-lg">
            <p className="text-[11px] tracking-[0.4em] mb-4 font-bold uppercase opacity-80 underline underline-offset-8 decoration-orange-500">G-Kangs Publishing Lab</p>
            <h3 className="serif-title text-4xl md:text-6xl italic font-bold leading-tight mb-4">
              문장 속에 담긴 <br/>당신의 마음
            </h3>
            <div className="w-12 h-[2px] bg-orange-500"></div>
          </div>

          {/* RFP 4-1. 결과 예시 블러 처리 노출 */}
          <div className="absolute top-8 right-8 hidden md:block">
            <div className="p-8 border border-white/20 backdrop-blur-xl bg-black/20 text-white rounded-sm w-64">
              <p className="text-[11px] tracking-widest mb-4 font-bold text-orange-400 uppercase">Diagnosis Sample</p>
              <div className="blur-result select-none opacity-50 space-y-2">
                <h5 className="serif-title text-2xl italic font-bold">여백의 미니멀리스트</h5>
                <p className="text-[11px] leading-relaxed">단 한 마디로 백 마디를 대신하는...</p>
                <div className="h-2 w-full bg-white/20 rounded"></div>
                <div className="h-2 w-3/4 bg-white/20 rounded"></div>
              </div>
              <p className="mt-6 text-[10px] text-white/40 italic text-center">정식 결과는 테스트 완료 후 공개됩니다</p>
            </div>
          </div>
        </div>
        
        {/* Decorative corner element */}
        <div className="absolute -bottom-8 -right-4 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-[#fdfcf8] border border-orange-100 flex items-center justify-center rotate-3 shadow-lg z-20">
            <span className="text-4xl text-orange-200">🖋️</span>
        </div>
      </div>
      
      {/* Short secondary intro for credibility */}
      <div className="max-w-3xl mx-auto text-center pb-24 border-b border-orange-100">
        <h4 className="serif-title text-3xl mb-6 font-bold text-gray-800">"책을 사기 전, 자신의 문제를 먼저 아는 것이 중요합니다."</h4>
        <p className="text-sm md:text-base text-gray-500 leading-loose">
          본 진단은 <strong>실전 창작 유형</strong>을 기반으로 설계되어,<br/>
          단순한 재미를 넘어 당신의 다음 집필을 위한 실질적인 처방전을 제공합니다.
        </p>
      </div>
    </div>
  );
};
