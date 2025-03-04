type TProject = {
  name: string;
  img: string;
  skills: string[];
  description: string;
  adversity: string;
  impression: string;
  github: string;
  link: string;
};

export const PROJECT: TProject[] = [
  {
    name: "지금 날씨 챗봇",
    img: "/assets/img/projects/kakao.gif",
    skills: ["Python", "단기예보 api", "카카오 챗봇 api", "AWS Lambda"],
    description:
      "지역을 입력하면 6시간동안의 날씨정보와 어제와 온도 비교, 추천 옷차림을 알려주는 챗봇입니다.",
    adversity:
      "api마다 맞는 요청 양식이 있었기 때문에 그에 맞게 가공하는 것이 쉽지 않았습니다. lambda handler에서 예외처리를 통해 분기를 나누는 것에 집중하였습니다.",
    impression:
      "서버 없이도 요청과 응답이 가능한 서비스를 사용해보고 앞으로 어떤 api라도 공부를 통해 서비스를 이용할 수 있겠다는 자신감이 생겼습니다. 카카오는 많은 사람들이 사용하고 있는 서비스이기 때문에 실제로 주변인들이 사용해보고 개선점을 제안받을 수 있다는 점이 좋았습니다. 그리고 가끔씩 사용한다는 이야기를 듣고 개발자로서 뿌듯하였습니다.",
    github: "https://github.com/Choi-Shin/kakao_chatbot",
    link: "http://pf.kakao.com/_wzjIxj",
  },
  {
    name: "Spring 게시판",
    img: "/assets/img/projects/spring.jpg",
    skills: ["Spring", "mySQL", "AWS EC2", "tomcat"],
    description:
      "스프링 프레임워크를 이용하여 제작한 댓글 게시판입니다. 회원, 쪽지, 글, 댓글에 대한 CRUD가 구현되어있습니다.",
    adversity:
      "EC2를 이용하여 처음 배포해본 사이트인데 연동하는 것이 어려웠습니다. 비교적 기능이 다양하여 파일 갯수가 많아졌고 관리, 파일 수정에 있어서 어려움을 느꼈고 ERD가 있어서 차분하게 작업하여 기능을 구현할 수 있게 되었습니다.",
    impression:
      "어디서든 접속할 수 있고 데이터를 작성할 수 있는 첫 사이트라는 것이 인상적인 부분이었습니다. 지금 보면 css나 데이터베이스 연동 부분, 쪽지함, 보안에서 아쉬운 점이 느껴집니다. 차후에 ver.2로 제작할 예정입니다.",
    github: "https://github.com/Choi-Shin/MiniProject.git",
    link: "",
  },
  {
    name: "React Native to-do list",
    img: "/assets/img/projects/todo.gif",
    skills: ["React Native", "Spring", "mySQL"],
    description:
      "프론트는 React Native, 서버는 Spring, DB는 mySQL을 사용하여 간단한 todo-app을 만들었습니다. CRUD가 가능하고 기기의 고유번호로 DB에 저장되고 조회되기 때문에 그 기기가 저장한 데이터만 불러옵니다.",
    adversity:
      "빌드와 실행 환경이 웹과는 달라 XCode의 시뮬레이터를 사용하여 빌드해보았습니다. 처음에는 그러한 환경에 적응하는 것이 쉽지 않았고 React Native와 스프링 백엔드 간의 소통을 어떻게 하면 좋을지 몰라 헤맸지만 서버의 포트로 fetch해주어 소통이 가능해질 수 있었습니다.",
    impression:
      "실제로 앱스토어나 플레이스토어에 배포될 수 있는 완성된 앱을 만들어보고자하는 새로운 목표가 생겼고 매일 사용하는 스마트폰이었지만 앱을 만드는 것은 멀게 느껴졌는데 나만의 어플을 만들 수 있을 것 같은 자신감이 생겼습니다.",
    github: "https://github.com/Choi-Shin/todoList-ReactNative.git",
    link: "",
  },
  {
    name: "Next.js 게시판",
    img: "/assets/img/projects/nextboard.jpg",
    skills: ["Next.js", "Typescript", "MongoDB", "AWS EC2", "React-quill"],
    description:
      "AWS EC2를 이용하여 배포한 Next.js 게시판 입니다. MongoDB를 사용하였고 bcrypt를 이용하여 비밀번호의 보안을 강화하였습니다.",
    adversity:
      "Next.js와 React-quill을 연동하는 것이 어려웠습니다. 타입스크립트 문법을 사용하여 타입이나 인터페이스 선언을 필수적으로 해주어야하는 점에서 코드가 길어졌습니다.",
    impression:
      "typescript 사용으로 인해 코드가 길어지고 작성해야하는 것이 많아졌지만 어떠한 객체를 주고 받는지 정확히 알 수 있는 점에서 배울 점이 많았습니다.",
    github: "https://github.com/Choi-Shin/NextBoard.git",
    link: "https://next-board-sandy.vercel.app",
  },
  {
    name: "snake game",
    img: "/assets/img/projects/snakegame.gif",
    skills: ["javascript", "express"],
    description:
      "HTML 캔버스 객체를 사용하여 만든 snake game 입니다. 사과를 먹으면 꼬리가 길어지고 벽에 닿으면 게임오버 되는 단순한 게임입니다. level-up에 따른 속도 변화, 결과에 따른 랭킹 TOP 10 갱신 기능이 있습니다.",
    adversity:
      "캔버스 객체 위에 버튼을 만들고 마우스 위치가 버튼 위에 있고 그것을 클릭하면 이벤트가 발생하게하는 부분과 express로 랭킹 시스템 데이터 조회와 수정을 하는 부분을 구현하는 게 쉽지 않았습니다.",
    impression:
      "코딩으로 화면을 그려내고 입력을 받아 게임이 진행되는 부분이 흥미로웠습니다. express에 대한 이해도가 높아졌습니다.",
    github: "https://github.com/Choi-Shin/snakeGame.git",
    link: "https://choi-devspace.kro.kr/snakeGame",
  },
  {
    name: "instagram scraper",
    img: "/assets/img/projects/insta.jpg",
    skills: ["Python", "selenium"],
    description: "",
    adversity: "",
    impression: "",
    github: "https://github.com/Choi-Shin/InstaScraper.git",
    link: "",
  },
  {
    name: "Handling Excel and Notion with Python",
    img: "/assets/img/projects/notion.jpg",
    skills: ["Python", "Notion Api"],
    description:
      "3000여 개의 단어가 포함된 Excel 파일을 Python으로 가공하고 Notion api를 이용하여 요청을 보내 Notion 데이터베이스에 넣었습니다.",
    adversity:
      "엑셀을 로드하는 패키지를 잘 사용하는 법과 notion api에 적절한 양식을 사용하여 요청을 보내는 것이 어려운 점이었습니다.",
    impression: "",
    github: "https://github.com/Choi-Shin/notion_python",
    link: "",
  },
  {
    name: "Portfolio 페이지",
    img: "/assets/img/projects/portfolio.jpg",
    skills: ["express.js", "javascript", "Google Search Console"],
    description: "",
    adversity: "",
    impression: "",
    github: "https://github.com/Choi-Shin/portfolio.git",
    link: "https://choi-devspace.kro.kr/",
  },
];
