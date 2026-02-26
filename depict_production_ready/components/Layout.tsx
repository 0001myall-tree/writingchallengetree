
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-orange-200">
      <header className="w-full max-w-5xl px-6 py-8 flex justify-between items-center border-b border-orange-100 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center">
            <span className="text-orange-500 font-bold text-sm">G</span>
          </div>
          <h1 className="serif-title text-lg md:text-2xl tracking-widest uppercase font-bold text-gray-800">집필 심리 테스트</h1>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest text-gray-500">
          <a href="https://tum.bg/B9Js0E" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">도서 펀딩</a>
        </nav>

      </header>

      <main className="w-full flex-grow px-4 md:px-0">
        {children}
      </main>

      <footer className="w-full bg-[#f8f5f0] mt-24 py-20 px-6 border-t border-orange-100 text-gray-600">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="mb-6">
            <p className="text-[11px] tracking-[0.4em] text-orange-400 mb-2 font-bold uppercase">Publisher</p>
            <h3 className="serif-title text-2xl md:text-3xl text-[#e86a33] font-bold">글캉스 퍼블리싱</h3>
          </div>

          <div className="mb-12 w-full max-w-md">
            <div className="relative inline-block w-full">
              <a
                href="https://tum.bg/B9Js0E"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 group block bg-white border-2 border-[#e86a33] text-[#e86a33] hover:bg-[#e86a33] hover:text-white transition-all duration-300 px-8 py-6 rounded-sm shadow-sm transform hover:-translate-y-1"
              >
                <span className="text-lg md:text-xl font-bold leading-tight block">
                  [묘사 처방전]<br />
                  펀딩 페이지 바로 가기
                </span>
                <span className="mt-2 text-[11px] tracking-widest uppercase opacity-60 block">Visit Tumblbug Project</span>
              </a>
              {/* Decorative Funding Image */}
              <a href="https://tum.bg/B9Js0E" target="_blank" rel="noopener noreferrer">
                <img
                  src="/funding.png"
                  alt="Funding Decoration"
                  className="absolute -top-6 -right-4 md:-top-8 md:-right-6 w-16 h-16 md:w-20 md:h-20 object-contain z-20 hover:scale-105 transition-transform duration-300 drop-shadow-xl rotate-12 cursor-pointer hover:-translate-y-1"
                />
              </a>
            </div>
          </div>



          <div className="w-full pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-gray-400">
            <span>&copy; 글캉스 퍼블리싱. 모든 권리 보유.</span>
            <div className="flex gap-4">
              <span>이용약관</span>
              <span>개인정보처리방침</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
