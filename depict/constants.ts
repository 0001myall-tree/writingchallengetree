
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>집필 심리 테스트</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', 'Noto Sans KR', sans-serif;
            background-color: #fdfcf8;
            color: #2d2d2d;
        }
        .serif-title {
            font-family: 'Inter', 'Noto Sans KR', sans-serif;
            letter-spacing: -0.02em;
        }
        .blur-result {
            filter: blur(8px);
            user-select: none;
            pointer-events: none;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .floating {
            animation: float 3s ease-in-out infinite;
        }
    </style>
<script type="importmap">
{
  "imports": {
    "react-dom/": "https://esm.sh/react-dom@^19.2.4/",
    "@google/genai": "https://esm.sh/@google/genai@^1.40.0",
    "react/": "https://esm.sh/react@^19.2.4/",
    "react": "https://esm.sh/react@^19.2.4"
  }
}
</script>
<link rel="stylesheet" href="/index.css">
</head>
<body>
    <div id="root"></div>
<script type="module" src="/index.tsx"></script>
</body>
</html>
