
import React from 'react';
import { Question, WriterType } from '../types';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  total: number;
  onSelect: (type: WriterType) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, currentIndex, total, onSelect }) => {
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="max-w-2xl mx-auto py-8 md:py-12 px-4 md:px-6">
      {/* Progress Bar */}
      <div className="mb-10 md:mb-16">
        <div className="flex justify-between items-end mb-4">
            <span className="serif-title text-3xl md:text-4xl italic text-orange-500 font-bold">질문. {currentIndex + 1}</span>
            <span className="text-[10px] tracking-widest text-gray-400">{currentIndex + 1} / {total}</span>
        </div>
        <div className="w-full h-[1px] bg-gray-200 relative">
          <div 
            className="absolute top-0 left-0 h-[2px] bg-orange-500 transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h3 className="serif-title text-xl md:text-3xl mb-8 md:mb-12 text-center leading-snug font-bold">
        {question.text}
      </h3>

      <div className="space-y-3 md:space-y-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(option.type)}
            className="w-full text-left p-5 md:p-8 bg-white border border-gray-100 hover:border-orange-300 hover:bg-orange-50/30 transition-all group rounded-sm shadow-sm"
          >
            <div className="flex items-start gap-3 md:gap-4">
                <span className="text-[10px] text-orange-400 font-bold mt-1 opacity-50 group-hover:opacity-100">{idx + 1}</span>
                <p className="text-sm md:text-base text-gray-700 group-hover:text-gray-900 leading-relaxed font-medium">
                    {option.text}
                </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-20 text-center opacity-30">
        <svg className="mx-auto floating" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e86a33" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      </div>
    </div>
  );
};
