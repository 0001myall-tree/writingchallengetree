import React from 'react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* 상단 섹션 */}
      <div className="text-center mb-16">
        <div className="inline-block border border-orange-200 px-4 py-1 mb-6 rounded-full bg-orange-50/50">
          <span className="text-[11px] tracking-widest text-orange-600 font-bold">⚠️ 소설 창작 경험자 전용 진단</span>
        </div>
        
        <h2 className="serif-title text-4xl md:text-6xl mb-12 font-bold text-gray-800">
          묘사 스타일로 보는 <br/> 성향 테스트 🖋️
        </h2>

        {/* 버튼 */}
        <button 
          onClick={onStart} 
          className="bg-[#e86a33] text-white px-10 py-5 text-sm font-bold tracking-widest hover:bg-[#d55a2a] transition-all rounded-sm shadow-xl active:scale-95 mb-16"
        >
          진단 시작하기
        </button>

        {/* 펀딩 이미지 영역 */}
        <div className="relative mb-24">
          <a href="https://your-funding-link.com" target="_blank" rel="noreferrer" className="block">
            <div className="relative w-full overflow-hidden rounded-sm shadow-2xl transition-all duration-500 hover:shadow-orange-900/20">
              <img 
                src="/funding.png" 
                alt="Funding" 
                className="w-full h-auto object-contain"
              />
            </div>
          </a>
        </div>
      </div>

      {/* 하단 섹션 */}
      <div className="max-w-3xl mx-auto text-center pb-24 border-b border-orange-100">
        <p className="text-sm text-gray-500 leading-loose">
          본 진단은 실전 창작 유형을 기반으로 설계되어,<br/>
          당신의 다음 집필을 위한 조언을 제공합니다.
        </p>
      </div>
    </div>
  );
};
