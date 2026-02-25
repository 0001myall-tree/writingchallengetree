import React from 'react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* 텍스트 섹션 */}
      <div className="text-center mb-16 relative">
        <div className="inline-block border border-orange-200 px-4 py-1 mb-6 rounded-full bg-orange-50/50">
          <span className="text-[11px] tracking-widest text-orange-600 font-bold uppercase">⚠️ 소설 창작 경험자 전용 진단</span>
        </div>

        <h2 className="serif-title text-4xl md:text-7xl mb-12 leading-[1.3] md:leading-[1.5] font-bold text-gray-800">
          묘사 스타일로 <br/>
          보는 <br className="md:hidden" />
          성향 테스트 🖋️
        </h2>

        <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto mb-12">
          <div className="relative flex flex-col items-center">
            <div className="bg-indigo-50 border border-indigo-100 p-3 md:p-4 rounded-2xl shadow-sm mb-4 relative w-full">
              <span className="text-[11px] md:text-sm font-bold text-indigo-600 block mb-2">돌직구형?</span>
              <span className="text-2xl md:text-3xl">🎯</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-indigo-50"></div>
            </div>
          </div>
          
          <div className="relative flex flex-col items-center">
            <div className="bg-orange-50 border border-orange-100 p-3 md:p-4 rounded-2xl shadow-sm mb-4 relative w-full">
              <span className="text-[11px] md:text-sm font-bold text-orange-600 block mb-2">스위치형?</span>
              <span className="text-2xl md:text-3xl">💡</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-orange-50"></div>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="bg-emerald-50 border border-emerald-100 p-3 md:p-4 rounded-2xl shadow-sm mb-4 relative w-full">
              <span className="text-[11px] md:text-sm font-bold text-emerald-600 block mb-2">현미경형?</span>
              <span className="text-2xl md:text-3xl">🔬</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-emerald-50"></div>
            </div>
          </div>
        </div>

        <p className="text-sm font-bold text-orange-500 mb-10 tracking-widest animate-bounce">
          1분이면 확인할 수 있습니다.
        </p>

        <button 
          onClick={onStart}
          className="bg-[#e86a33] text-white px-10 md:px-14 py-5 md:py-6 text-sm font-bold tracking-widest hover:bg-[#d55a2a] transition-all transform hover:-translate-y-1 rounded-sm shadow-xl active:scale-95 mb-16"
        >
          진단 시작하기
        </button>

        {/* 드디어 등장할 펀딩 이미지 섹션 */}
        <div className="relative mb-24 px-4 md:px-0">
          <a href="https://your-funding-link.com" target="_blank" rel="noreferrer" className="block">
            <div className="relative w-full overflow-hidden rounded-sm shadow-2xl transition-all duration-500 hover:shadow-orange-900/20">
              <img 
                src="/funding.png" 
                alt="Funding Project" 
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center pb-24 border-b border-orange-100">
        <p className="text-sm md:text-base text-gray-500 leading-loose">
          본 진단은 <strong>실전 창작 유형</strong>을 기반으로 설계되어,<br/>
          단순한 재미를 넘어 당신의 다음 집필을 위한 조언을 제공합니다.
        </p>
      </div>
    </div>
  );
};
