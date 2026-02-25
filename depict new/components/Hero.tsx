
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Intro Text Section */}
      <div className="text-center mb-16 relative">
        {/* RFP 5-1. 타겟 제한 강조 */}
        <div className="inline-block border border-orange-200 px-4 py-1 mb-6 rounded-full bg-orange-50/50">
            <span className="text-[11px] tracking-widest text-orange-600 font-bold uppercase">⚠️ 소설 창작 경험자 전용 진단</span>
        </div>

        <h2 className="serif-title text-4xl md:text-7xl mb-12 leading-[1.3] md:leading-[1.5] font-bold text-gray-800">
          묘사 스타일로 <br/>
          보는 <br className="md:hidden" />
          성향 테스트 🖋️
        </h2>

        <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto mb-12">
          {/* 돌직구형 */}
          <div className="relative flex flex-col items-center">
            <div className="bg-indigo-50 border border-indigo-100 p-3 md:p-4 rounded-2xl shadow-sm mb-4 relative w-full">
              <span className="text-[11px] md:text-sm font-bold text-indigo-600 block mb-2">돌직구형?</span>
              <span className="text-2xl md:text-3xl">🎯</span>
              {/* Triangle */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-indigo-50"></div>
            </div>
          </div>
          
          {/* 스위치형 */}
          <div className="relative flex flex-col items-center">
            <div className="bg-orange-50 border border-orange-100 p-3 md:p-4 rounded-2xl shadow-sm mb-4 relative w-full">
              <span className="text-[11px] md:text-sm font-bold text-orange-600 block mb-2">스위치형?</span>
              <span className="text-2xl md:text-3xl">💡</span>
              {/* Triangle */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-orange-50"></div>
            </div>
          </div>

          {/* 현미경형 */}
          <div className="relative flex flex-col items-center">
            <div className="bg-emerald-50 border border-emerald-100 p-3 md:p-4 rounded-2xl shadow-sm mb-4 relative w-full">
              <span className="text-[11px] md:text-sm font-bold text-emerald-600 block mb-2">현미경형?</span>
              <span className="text-2xl md:text-3xl">🔬</span>
              {/* Triangle */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-emerald-50"></div>
            </div>
          </div>
        </div>

        <p className="text-sm font-bold text-orange-500 mb-10 tracking-widest animate-bounce">
          1분이면 확인할 수 있습니다.
        </p>

        <button 
          onClick={onStart}
          className="bg-[#e86a33] text-white px-10 md:px-14 py-5 md:py-6 text-sm font-bold tracking-widest hover:bg-[#d55a2a] transition-all transform hover:-translate-y-1 rounded-sm shadow-xl active:scale-95 mb-4"
        >
          진단 시작하기
        </button>
      </div>

     {/* 펀딩 메인 히어로 섹션 - 기존 이미지를 지우고 이 코드를 넣으세요 */}
<div className="relative mb-24 px-4 md:px-0">
  <a href="여기에_작가님_펀딩_링크_주소" target="_blank" rel="noreferrer" className="block">
    <div className="relative w-full overflow-hidden rounded-sm shadow-2xl transition-all duration-500 hover:shadow-orange-900/20">
      <img 
        src="/funding.jpg"  /* 👈 public 폴더에 올린 이미지 이름으로 정확히 써주세요! */
        alt="Funding Project" 
        className="w-full h-auto object-contain"
      />
      {/* 이미지 위에 살짝 고급스러운 광택 효과만 줍니다 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  </a>
</div>


          {/* RFP 4-1. 결과 예시 블러 처리 노출 */}
          <div className="absolute top-4 right-8 hidden md:block scale-75 origin-top-right">
            <div className="p-6 border border-white/20 backdrop-blur-xl bg-black/20 text-white rounded-sm w-64">
              <p className="text-[11px] tracking-widest mb-4 font-bold text-orange-400 uppercase">Diagnosis Sample</p>
              <div className="blur-result select-none opacity-50 space-y-2">
                <h5 className="serif-title text-xl italic font-bold">여백의 미니멀리스트</h5>
                <p className="text-[11px] leading-relaxed">단 한 마디로 백 마디를 대신하는...</p>
                <div className="h-2 w-full bg-white/20 rounded"></div>
                <div className="h-2 w-3/4 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative corner element */}
        <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 w-16 h-16 md:w-24 md:h-24 bg-[#fdfcf8] border border-orange-100 flex items-center justify-center rotate-3 shadow-lg z-20">
            <span className="text-2xl md:text-4xl text-orange-200">🖋️</span>
        </div>
      </div>
      
      {/* Short secondary intro for credibility */}
      <div className="max-w-3xl mx-auto text-center pb-24 border-b border-orange-100">
        <p className="text-sm md:text-base text-gray-500 leading-loose">
          본 진단은 <strong>실전 창작 유형</strong>을 기반으로 설계되어,<br/>
          단순한 재미를 넘어 당신의 다음 집필을 위한 조언을 제공합니다.
        </p>
      </div>
    </div>
  );
};
