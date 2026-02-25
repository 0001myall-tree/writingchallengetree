
export type WriterType = 'LIGHT_SWITCH' | 'SHERIFF' | 'TOO_MUCH_TALK' | 'STRAIGHT_BALL' | 'GLASS_DISPLAY' | 'MICROSCOPE';

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: WriterType;
  }[];
}

export interface Result {
  id: WriterType;
  name: string;
  definition: string;
  description: string;    // 성향 분석, 문제 인식, 해결 방향을 통합한 설명
  chapterTitle: string;   // 관련 도서 챕터 안내
  imagePrompt: string;
}

export type AppState = 'HOME' | 'TEST' | 'RESULT';
