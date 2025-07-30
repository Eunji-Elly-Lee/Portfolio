export const translations = {
  about: {
    title: {
      en: "I'm Elly, an ever-growing developer.",
      ko: "끊임없이 성장하는 개발자, 이은지입니다."
    },
    paragraph1: {
      en: [
        "I thrive on learning new technologies and solving problems with clean, beautiful code.",
        "When faced with challenges, I dive deep and enjoy sharing insights with others."
      ].join(" "),
      ko: [
        "매일 새로운 기술을 배우고 멋진 코드로 문제를 해결하는 데에서 큰 즐거움을 느낍니다.",
        "문제를 마주하면 깊이 있게 분석하고, 그 인사이트를 다른 사람들과 공유하며 함께 성장하는 것을 좋아합니다."
      ].join(" ")
    },
    paragraph2: {
      en: "I'm excited to contribute to the developer community. Let's build something great together!",
      ko: "함께 멋진 것을 만들어 봅시다!"
    }
  },
  projects: {
    description: {
      en: [
        "I am dedicated to self-development and professional growth",
        "and have consistently worked on projects using various languages."
      ].join(" "),
      ko: "자기 개발과 전문성 향상을 위해 꾸준히 다양한 언어를 활용해 프로젝트를 진행해 왔습니다."
    },
    "cacart-ecommerce": {
      en: [
        "An e-commerce web application for purchasing products from various categories in one place.",
        "I developed the item detail and order history pages, deployed the backend, and adjusted the responsive layout.",
        "Built with Next.js and Nest.js, using Supabase (PostgreSQL) for data,",
        "and deployed via Vercel (frontend) and Render (backend)."
      ].join(" "),
      ko: [
        "다양한 카테고리의 상품을 한 곳에서 간편하게 구매할 수 있도록 설계된 이커머스 웹 애플리케이션입니다.",
        "상품 상세 페이지 및 주문 내역 페이지의 개발, 백엔드 배포, 그리고 전반적인 반응형 레이아웃 조정을 담당했습니다.",
        "Next.js와 Nest.js를 기반으로 개발되었고, Supabase(PostgreSQL)를 사용해 데이터를 관리하며,",
        "프론트엔드는 Vercel, 백엔드는 Render에 배포되었습니다."
      ].join(" ")
    },
    "kimbap-ordering": {
      en: [
        "A web application for placing Kimbap pick-up orders by selecting preferred menu, location, and time.",
        "Admins can manage items and pickup logistics and monitor order history.",
        "Stripe integration ensures secure payments, while Firebase handles authentication and data storage.",
        "Built with React, Node.js, and Firebase, and deployed on Netlify."
      ].join(" "),
      ko: [
        "원하는 김밥 메뉴와 수령 장소, 시간을 선택해 김밥 픽업 주문을 할 수 있는 웹 애플리케이션입니다.",
        "관리자는 메뉴 및 수령 장소를 직접 등록 및 관리하고, 주문 내역을 모니터링할 수 있습니다.",
        "Stripe를 통한 안전한 결제 기능과 Firebase 기반의 인증 및 데이터 저장 기능을 구현했습니다.",
        "React, Node.js, Firebase로 개발하고 Netlify에 배포했습니다."
      ].join(" ")
    },
    "restaurant-reviews": {
      en: [
        "This application allows users to browse restaurants with advanced filtering options, leave reviews,",
        "and check locations directly via Google Maps.",
        "Review management is permission-based, allowing only the creator to edit or delete.",
        "The project is built using the MVC pattern with MongoDB, Express, and React for scalability and maintainability."
      ].join(" "),
      ko: [
        "사용자가 음식점을 검색하고 리뷰를 작성하거나 확인할 수 있는 웹 서비스입니다.",
        "이름, 우편번호, 음식 종류로 필터링이 가능하며, 각 레스토랑은 구글 지도를 통해 위치 확인이 가능합니다.",
        "리뷰는 작성자 본인만 수정하거나 삭제할 수 있도록 권한 제어 기능을 구현했습니다.",
        "React, Express, MongoDB 기반으로 MVC 패턴을 적용하여 개발하였습니다."
      ].join(" ")
    },
    "search-dataset": {
      en: [
        "This project enables users to explore and search Calgary’s public datasets",
        "including traffic cameras, permits, and public facilities.",
        "With dynamic search powered by AJAX and real-time filtering,",
        "users can find specific data efficiently and view location details directly on Google Maps.",
        "Built with JavaScript, HTML, CSS, and deployed on Netlify."
      ].join(" "),
      ko: [
        "캘거리 시에서 제공하는 공공 데이터(교차로 단속 카메라, 건축 인허가, 공원 시설 등)를 사용자가 손쉽게 검색할 수 있는 웹 애플리케이션입니다.",
        "AJAX를 활용한 실시간 필터링 기능을 통해 원하는 정보를 빠르게 찾을 수 있으며, 위치 정보는 Google Maps를 통해 확인할 수 있습니다.",
        "JavaScript, HTML, CSS 기반으로 구현하였고 Netlify에 배포하였습니다."
      ].join(" ")
    },
    "medical-appointment": {
      en: [
        "A clinic appointment management system allowing patients to book appointments online instead of calling.",
        "I implemented the appointment booking system and administrator functions, including staff and schedule management.",
        "I also ensured responsive layout consistency across devices and coordinated coding standards across the team."
      ].join(" "),
      ko: [
        "환자들이 병원에 전화를 걸거나 방문 없이 직접 웹에서 예약을 진행할 수 있는 진료 예약 관리 시스템입니다.",
        "환자가 담당 의사의 스케줄로부터 원하는 날짜·시간에 예약할 수 있는 기능과 관리자 기능(스탭 및 스케줄 관리)의 구현을 담당했습니다.",
        "또한 모든 기기에서 반응형 레이아웃이 일관되도록 설계하고, 팀 내 코드 스타일을 정리하여 유지 관리의 효율성을 높였습니다."
      ].join(" ")
    },
    "pang-game": {
      en: [
        "A Python remake of the classic arcade game 'Pang' built with Pygame.",
        "The player moves left and right to shoot bouncing balls that split into smaller ones when hit.",
        "The game ends when all balls are cleared, the player is hit, or the 100-second timer runs out.",
        "Features include multi-stage ball splitting, collision detection, and state-based game termination."
      ].join(" "),
      ko: [
        "고전 아케이드 게임 ‘팡(Pang)’을 파이썬과 Pygame으로 구현한 프로젝트입니다.",
        "캐릭터를 좌우로 움직이며 무기를 발사해 공을 쪼개고 제거해야 하며,",
        "공에 맞거나 제한 시간인 100초 내에 모든 공을 제거하지 못하면 게임이 종료됩니다.",
        "여러 크기로의 공 분할 로직과 충돌 판정, 타이머 및 게임 상태에 따른 종료 처리 등을 구현했습니다."
      ].join(" ")
    },
    "hangman-game": {
      en: [
        "A GUI-based implementation of the classic word guessing game “Hangman” using JavaFX.",
        "The player guesses a secret word one letter at a time, and each incorrect guess adds a part to the hangman.",
        "The game ends after seven wrong guesses.",
        "It includes duplicate entry alerts, input validation, and reads words from a text file."
      ].join(" "),
      ko: [
        "단어 추측 게임인 ‘행맨(Hangman)’을 JavaFX를 활용해 GUI 기반으로 구현한 프로젝트입니다.",
        "사용자는 알파벳을 하나씩 입력해 단어를 추측하며, 틀릴 경우 행맨 그림이 점점 완성됩니다.",
        "사용자의 오답 횟수가 7번이 되었을 경우 게임이 종료됩니다.",
        "텍스트 파일로부터 단어를 랜덤으로 로딩해 오며, 중복 입력에 대한 알림과 잘못된 입력 무시 등 사용자 경험을 고려한 기능을 구현했습니다."
      ].join(" ")
    }
  },
  skills: {
    description: {
      en: [
        "I enjoy developing with various languages, tools, and databases,",
        "and strive to continuously learn new technologies and grow as a developer."
      ].join(" "),
      ko: "다양한 언어, 도구, 데이터베이스를 활용한 개발을 즐기며, 꾸준히 새로운 기술을 배우고 성장하기 위해 노력하고 있습니다."
    }
  }
};
