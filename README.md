https://recruit.casper.or.kr


### 지원 날짜, 지원 폼 URL 등 변경 방법


1. 프로젝트를 clone

```bash
git clone https://github.com/CASPER-REPSAC/new-casper-recruit.git
```

2. 프로젝트 실행 (optional)

```bash
npm i
npm run dev
```


3. 코드 수정

아래 파일에서 수정할 부분 수정해서 main으로 PR 보내주세요!
/src/constants.ts

```ts
export const APPLICATION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfmfvklKP3JEoBBUAWFKYO2Zvte37t9pbzOhpPQOXVzoHZY_w/viewform';

export const DEADLINE = '2025. 03. 12 까지';

export const REQUIREMENTS =
  '창원대학교 컴퓨터공학과 1~3학년 / 정보통신공학과 1, 2학년';

export const HOMEPAGE_URL = 'https://www.casper.or.kr';
```

