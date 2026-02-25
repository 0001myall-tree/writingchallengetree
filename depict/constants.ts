
import { Question, Result, WriterType } from './types';

// 동점 처리 우선순위: 유리 진열장형 > 보안관형 > 돌직구 보고형 > 투 머치 토크형 > 전등 스위치형 > 현미경형
export const PRIORITY_ORDER: WriterType[] = [
  'GLASS_DISPLAY',
  'SHERIFF',
  'STRAIGHT_BALL',
  'TOO_MUCH_TALK',
  'LIGHT_SWITCH',
  'MICROSCOPE'
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "소설 속 배경(카페, 광장 등)을 설명해야 할 때 나는?",
    options: [
      { text: "독자가 그 장소에 있는 것처럼 모든 구석을 세밀하게 묘사한다.", type: 'TOO_MUCH_TALK' },
      { text: "\"분위기 좋은 카페였다\" 정도로 짧게 치고 사건으로 넘어간다.", type: 'STRAIGHT_BALL' }
    ]
  },
  {
    id: 2,
    text: "원고를 쓰다 묘사 구간이 나오면 드는 생각은?",
    options: [
      { text: "'아, 여기서 또 막히겠네...' 일단 대사부터 쓰고 나중에 채우려 한다.", type: 'GLASS_DISPLAY' },
      { text: "'내 필력을 보여줄 기회군!' 신나게 수식어를 붙인다.", type: 'TOO_MUCH_TALK' }
    ]
  },
  {
    id: 3,
    text: "한 장면을 완성했을 때, 내 원고의 모양은?",
    options: [
      { text: "인물의 행동과 대사 위주라 문단이 짧고 속도감이 있다.", type: 'STRAIGHT_BALL' },
      { text: "묘사와 서술이 길어 한 문단의 호흡이 꽤 긴 편이다.", type: 'TOO_MUCH_TALK' }
    ]
  },
  {
    id: 4,
    text: "인물이 화가 났을 때, 나는 어떻게 쓰는 편인가?",
    options: [
      { text: "\"눈을 부릅떴다\", \"주먹을 꽉 쥐었다\" 같은 익숙하고 안전한 표현을 쓴다.", type: 'SHERIFF' },
      { text: "\"심장이 차갑게 식었다\", \"이성이 끊어졌다\"처럼 극단적인 대비를 쓴다.", type: 'LIGHT_SWITCH' }
    ]
  },
  {
    id: 5,
    text: "인물의 감정을 전달할 때 나의 전략은?",
    options: [
      { text: "주인공이 왜 그런 감정을 느끼는지 인과관계를 논리적으로 분석해준다.", type: 'MICROSCOPE' },
      { text: "감정을 분석하기보다 인물이 처한 상황이나 결과부터 바로 보여준다.", type: 'STRAIGHT_BALL' }
    ]
  },
  {
    id: 6,
    text: "새로운 비유나 표현을 써야 할 때 나는?",
    options: [
      { text: "'괜히 이상하게 보이면 어떡하지?' 싶어 검증된 표현만 쓴다.", type: 'SHERIFF' },
      { text: "남들이 안 쓸 법한 파격적이고 강렬한 표현을 시도해본다.", type: 'LIGHT_SWITCH' }
    ]
  },
  {
    id: 7,
    text: "인물의 감정 변화를 다룰 때 나는?",
    options: [
      { text: "1에서 10까지 서서히 고조되는 감정의 단계를 밟아간다.", type: 'MICROSCOPE' },
      { text: "참고 참다가 한 번에 빵 터지는 0 아니면 100의 연출을 즐긴다.", type: 'LIGHT_SWITCH' }
    ]
  },
  {
    id: 8,
    text: "내 글에서 '심리 서술'이 차지하는 비중은?",
    options: [
      { text: "인물의 속마음을 독자에게 친절하게 설명해줘야 안심된다.", type: 'MICROSCOPE' },
      { text: "묘사가 어색해질까 봐 속마음 서술조차 최소화하는 편이다.", type: 'GLASS_DISPLAY' }
    ]
  },
  {
    id: 9,
    text: "슬픈 장면을 묘사할 때 내가 더 공들이는 부분은?",
    options: [
      { text: "눈물의 의미와 슬픔의 깊이를 독자가 이해하게 만드는 것.", type: 'MICROSCOPE' },
      { text: "슬픈 분위기를 자아내는 주변 소품이나 풍경을 길게 나열하는 것.", type: 'TOO_MUCH_TALK' }
    ]
  },
  {
    id: 10,
    text: "\"묘사가 너무 빈약하다\"는 피드백을 들었을 때 내 반응은?",
    options: [
      { text: "'묘사는 원래 어려운 거야...' 자신감이 떨어져 더 위축된다.", type: 'GLASS_DISPLAY' },
      { text: "'속도가 생명인데!' 효율성 때문이라 생각하며 대수롭지 않게 넘긴다.", type: 'STRAIGHT_BALL' }
    ]
  },
  {
    id: 11,
    text: "글을 쓸 때 내가 가장 지양하는(피하고 싶은) 것은?",
    options: [
      { text: "내 글이 너무 튀거나 이상하게 읽히는 것.", type: 'SHERIFF' },
      { text: "내 글의 감정 전달이 애매하거나 뜨뜻미지근한 것.", type: 'LIGHT_SWITCH' }
    ]
  },
  {
    id: 12,
    text: "퇴고할 때 주로 하는 고민은?",
    options: [
      { text: "\"이 문장은 너무 상투적인가? 좀 더 나다운 표현이 없을까?\"", type: 'SHERIFF' },
      { text: "\"묘사가 부족해서 장면이 너무 휑해 보이지는 않을까?\"", type: 'GLASS_DISPLAY' }
    ]
  }
];

export const RESULTS: Record<WriterType, Result> = {
  LIGHT_SWITCH: {
    id: 'LIGHT_SWITCH',
    name: '전등 스위치형',
    definition: "모 아니면 도 / 강도 0·100",
    description: "당신은 묘사를 할 때 애매한 표현을 답답해하고, 확실한 표현을 선호하는 성향이 강한 타입입니다.\n\n이 성향이 묘사에 부정적으로 드러날 때는 인물의 감정이나 행동 강도가 항상 0 아니면 100으로 느껴지거나 인물의 움직임과 감정이 툭툭 끊겨 보일 수 있습니다.\n\n이 타입에게 필요한 건 표현을 줄이는 게 아니라 강도를 정밀하게 조절하는 기준입니다.",
    chapterTitle: "CHAPTER 1 – 04. 묘사가 투박하거나 애니메이션처럼 느껴질 때",
    imagePrompt: "An artistic minimalist light switch on a textured wall, dramatic lighting, sharp contrast between deep shadow and warm orange light, cinematic style"
  },
  SHERIFF: {
    id: 'SHERIFF',
    name: '보안관형',
    definition: "안전 제일주의 / 익숙한 표현 반복",
    description: "당신은 글을 쓸 때 안전한 선택을 우선하는 성향이 강한 타입입니다. 이 타입은 실패를 두려워합니다. 그래서 이미 문제 없었던 표현, 이미 써봤던 문장을 계속 선택합니다.\n\n하지만 자칫 묘사가 평범하게 느껴지거나 문장이 늘 비슷한 인상을 줄 수 있습니다.\n\n이 타입에게 필요한 건 안전하게 모험할 수 있는 기준입니다.",
    chapterTitle: "CHAPTER 2. 막힐 때 즉효 처방\n(막힐 때마다 다양한 표현을 찾아 쓸 수 있습니다.)\n\n01...배경 묘사\n02...행동 묘사\n03...인물 묘사\n04...표정 묘사\n05...대사 사이 묘사\n06...여운을 남기는 마무리 묘사",
    imagePrompt: "A classic golden sheriff badge lying on a stack of old manuscripts, steady and warm lighting, professional writer's atmosphere"
  },
  TOO_MUCH_TALK: {
    id: 'TOO_MUCH_TALK',
    name: '투 머치 토크형',
    definition: "수려하지만 과다 혹은 벽돌 묘사",
    description: "당신은 표현력이 좋고, 하고 싶은 말이 많은 타입입니다. 하지만 전부를 말하려다 보면 묘사가 길어지고 장면이 벽돌처럼 느껴질 수 있습니다.\n\n이 타입에게 필요한 건 줄이는 기술이 아니라 남길 걸 고르는 기준입니다.",
    chapterTitle: "CHAPTER 1 – 02: 지루한 벽돌 묘사",
    imagePrompt: "A massive, solid wall made of ancient bricks, some bricks are engraved with tiny illegible text, dramatic warm lighting, cinematic texture, symbolic of dense writing"
  },
  STRAIGHT_BALL: {
    id: 'STRAIGHT_BALL',
    name: '돌직구 보고형',
    definition: "직서술 / 감각 연결 부족",
    description: "당신은 묘사보다 전개 효율을 우선하는 타입입니다. 불필요한 걸 싫어하고 빠르게 다음 장면으로 가고 싶어 합니다. 비유나 우회보다 “있는 그대로 쓰면 되지”라고 생각하는 경향이 있습니다.\n\n군더더기 없이 빠른 전개를 할 수 있는 게 장점이지만 묘사가 너무 짧거나 장면의 몰입감이 부족할 수 있습니다.",
    chapterTitle: "CHAPTER 1 – 01: 너무 짧은 묘사, CHAPTER 1 – 03: 감정 묘사에 오감을 어떻게 활용할까",
    imagePrompt: "A sharp orange arrow piercing directly through the center of a target, minimalist design, clean lines, high speed energy"
  },
  GLASS_DISPLAY: {
    id: 'GLASS_DISPLAY',
    name: '유리 진열장형',
    definition: "묘사에 자신 없어 피함",
    description: "당신은 묘사를 쉽게 꺼내 쓰지 않는 타입입니다. 묘사가 어색해질까 봐, 장면을 소중하게 다루려고 합니다.\n\n하지만 그 결과 작품에 묘사가 거의 없거나 중요한 장면을 건너뛰는 느낌을 줄 수 있습니다.\n\n이 타입에게 필요한 건 묘사를 차근차근 쓸 수 있는 자신감을 주는 매뉴얼입니다.",
    chapterTitle: "CHAPTER 1 – 01: 너무 짧은 묘사",
    imagePrompt: "A delicate quill pen preserved inside a clear glass display case, soft warm studio lighting, elegant and fragile aesthetic"
  },
  MICROSCOPE: {
    id: 'MICROSCOPE',
    name: '현미경형',
    definition: "감정 분석형",
    description: "당신은 감정을 분석해야 안심하는 습관이 있을 가능성이 높습니다. 감정의 정확도가 높은 대신 감정 앞에 설명이 나와서 몰입을 방해할 수 있습니다.\n\n이 타입에게 필요한 건, 독자를 느끼게 하는 글을 쓰는 것입니다.",
    chapterTitle: "CHAPTER 1 – 03: 감정 묘사에 오감을 어떻게 활용할까",
    imagePrompt: "An elegant vintage microscope looking at a tiny crystalline heart, intellectual and deep atmosphere, orange and cream color palette"
  }
};
