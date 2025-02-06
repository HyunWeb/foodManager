# 한끼 출근 (Food Manager)
**한끼 출근**은 바쁜 현대인을 위한 식단 관리 웹 애플리케이션으로, 사용자가 건강한 식습관을 유지하고 냉장고에 있는 재료를 효율적으로 활용할 수 있도록 돕습니다.

## 🛠️ 사용한 기술 스택
### 디자인
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

### 프론트엔드
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/chakraui-319795?style=for-the-badge&logo=chakraui&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
### 백엔드
<img src="https://img.shields.io/badge/nodedotjs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white">
### 배포
<img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"> <img src="https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white"> <img src="https://img.shields.io/badge/filezilla-BF0000?style=for-the-badge&logo=filezilla&logoColor=white">

---

## 📅 프로젝트 개요
- **기간**: 2024년 12월 3일 ~ 2024년 12월 24일 (3주)
- **팀 프로젝트**
- **주요 기능**:
    - Open API를 활용한 레시피 추천
    - AI 기반 칼로리 자동 계산
    - 냉장고 재료 유통기한 관리
    - 사용자 피드 작성 및 레시피 공유

---

## 🔍 프로젝트를 시작하게 된 계기
프로젝트를 시작할 당시 **"현대인의 식사 관리 문제"**에 대해 고민하였습니다.  
바쁜 일정을 가진 사람들이 **식사 준비와 칼로리 관리**를 쉽게 할 수 있는 웹 애플리케이션이 필요하다는 결론에 도달했습니다.  
결과적으로, **식단 관리와 냉장고 재료 활용**을 도와주는 홈페이지를 개발하는 방향으로 기획을 시작했습니다.

---

## 🎯 주요 타겟층 및 기대효과
### 타겟층
- **바쁜 현대인**: 건강한 식습관을 유지하고자 하는 직장인
- **다이어트 및 칼로리 관리**를 원하는 사람들
- **냉장고 관리**가 어려운 사람들

### 기대효과
- **칼로리 조절**을 통해 건강한 식습관을 유지
- **냉장고 재료 활용도**를 높여 경제적인 이점 제공
- **간편한 레시피 추천**으로 바쁜 일상에서 빠르게 식사를 준비

---

## 📋 주요 기능
### 1. 로그인 및 회원 관리
- 회원가입 및 로그인 기능 구현
- 세션을 사용한 **인증 및 권한 관리**

### 2. 레시피 추천
- **Open API**를 활용하여 사용자의 냉장고 재료로 맞춤형 레시피 추천
- **AI**를 활용해 자동으로 칼로리 계산 후 사용자에게 맞는 추천

### 3. 냉장고 관리
- 사용자가 냉장고에 있는 재료의 유통기한을 관리
- 유통기한이 임박한 재료를 알림으로 알려줌

### 4. 피드 페이지
- 사용자 간 레시피 공유 기능
- **이미지 업로드** 및 **피드 작성**

---

## 🧩 해결한 과제
### 1. API 호출 최적화
- **문제**: API 호출로 인한 성능 저하
- **해결**: API 호출을 **상위 컴포넌트**로 이동하고 **Redux**로 상태 관리하여 성능 향상

### 2. 스타일 라이브러리 병합
- **문제**: 개발 기한을 맞추기 위해서 **빠른 UI 개발 방법** 강구 
- **해결**: **Styled-Components**와 **Chakra UI**를 병행해 활용

### 3. 아토믹 디자인 패턴 도입
- **문제**: 컴포넌트를 어디까지 세분화할것인지에 대한 문제 
- **해결**: **아토믹 디자인 패턴** 이라는 개발 방법론을 알게 되었고, 이를 프로젝트에 도입

---

## 💭 작업 후기 및 피드백
이번 프로젝트를 통해 **React**, **TypeScript**, **Node.js** 등을 활용해 풀스택 웹 애플리케이션을 구현할 수 있었습니다.  
특히 **팀원들과의 협업**과 **UI/UX 디자인**을 통해 사용자의 요구를 반영하는 과정이 매우 유익했습니다.

### 아쉬운 점
- **부가적인 기능 미완성**: 프로필 수정, 댓글 기능 등 부가적인 기능들이 미흡
- **AWS 이미지 관리 미비**: AWS S3 이미지 관리 구현 예정이었으나, 시간 부족으로 미구현

### 앞으로의 계획
프로젝트 종료 후 **기능 개선 및 추가**를 통해 앱의 **사용성 및 안정성**을 더욱 강화할 예정입니다.

---

