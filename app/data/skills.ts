export type TSkill = {
  [key: string]: string;
  skill: string;
  image: string;
  progress: string;
  detail: string;
  improvements: string;
};

export const SKILL = {
  backend: [
    {
      skill: "Spring",
      image: "./assets/img/skills/Spring.svg",
      progress: "70",
      detail:
        "- MVC 패턴을 사용하여 프로젝트의 기능적 분리를 수행할 수 있으며, AOP를 사용하여 횡단 관심으로 분류된 메소드가 수행할 공통 부가기능에 대한 작업수행을 할 수 있습니다. \n- Mybatis나 JPA와 연동하여 데이터를 다룰 수 있습니다. \n- Spring mail을 사용하여 회원가입 인증 메일을 서버에서 전송할 수 있습니다.",
      improvements:
        "코드를 구현하고 작동하게 할 수는 있지만 더 높은 이해도를 가지는 것이 목표입니다. 로그와 테스트에 대한 공부가 더 필요합니다.",
    },
    {
      skill: "Express",
      image: "./assets/img/skills/Expressjs.png",
      progress: "20",
      detail:
        "- Router 레벨 미들웨어를 사용하여 RESTful API를 구현할 수 있습니다. \n- mongoose와의 연동으로 데이터를 주고 받을 수 있습니다. \n- React와 연동하여 html을 응답해줄 수 있습니다. \n- socket.io를 사용하여 영상통화와 채팅기능을 구현할 수 있습니다. \n- .env 파일을 사용하여 보안을 강화할 수 있습니다.",
      improvements:
        "다양한 스키마 형식의 mongoose 데이터를 다루고, 보다 더 다양한 요청과 응답을 수행하는 서버를 만드는 공부가 필요합니다.",
    },
  ],
  frontend: [
    {
      skill: "React",
      image: "./assets/img/skills/React.png",
      progress: "70",
      detail:
        "- Hooks를 사용하여 상태관리와 상태변화에 따른 함수 실행을 할 수 있습니다. \n- redux를 사용하여 앱 전반의 상태를 관리할 수 있습니다. \n- fetch api를 이용하여 데이터 요청을 할 수 있습니다.",
      improvements:
        "redux에 대해 더 깊은 공부를 해야하고, 보다 더 모듈화된 코드를 짤 수 있도록 해야합니다. 반복적인 요소를 줄이고 재사용성을 높이는 것이 필요합니다.",
    },
    {
      skill: "Next.js",
      image: "./assets/img/skills/Next-js.png",
      progress: "80",
      detail:
        "- getServerSideProps를 사용하여 지속적으로 바뀌는 페이지에 대한 서버 사이드 렌더링을 수행합니다. \n- NextApiRequest와 NextApiResponse를 사용하여 데이터 CRUD를 구현합니다. \n- RESTful API로 구조화합니다. \n- mongoose와 연동하여 응답을 합니다. \n- React가 가진 단점인 SEO를 처리합니다.",
      improvements:
        "Next.js가 가지는 특징 때문에 생기는 각종 에러들에 더 친숙해지고 SSR의 장점과 CSR의 장점을 융합할 수 있는 애플리케이션 개발을 목표로 합니다.",
    },
    {
      skill: "React-Native",
      image: "./assets/img/skills/React.png",
      progress: "30",
      detail:
        "- 모바일 애플리케이션을 제작할 수 있습니다. \n- 스프링과 연동하여 mySQL db에 접근하고 CRUD를 구현합니다.",
      improvements:
        "다양한 기능을 수행하는 애플리케이션을 제작해보고 실제 배포까지 하는 것을 목표로 합니다.",
    },
  ],
  db: [
    {
      skill: "MySQL",
      image: "./assets/img/skills/mysql.png",
      progress: "70",
      detail:
        "- database를 만들고 스키마에 따른 테이블 구조를 정의할 수 있습니다. \n- ddl, dml, dcl을 사용하여 데이터베이스를 다루고 정의할 수 있습니다. \n- 독립된 환경에서 사용하기 위해 docker를 이용할 수 있습니다. \n- myBatis나 JPA를 연동하여 mysql jdbc를 이용할 수 있습니다.",
      improvements:
        "index, procedure, trigger 등 db 내에서 연산속도를 높이거나 자체적으로 연산하고 이벤트를 감지하여 기능을 실행하는 등의 다양한 기술을 경험하는 것과 트랜잭션과 데이터 베이스 모델 설계에 대한 심도있는 공부를 목표로 합니다.",
    },
    {
      skill: "Oracle",
      image: "./assets/img/skills/Oracle.svg",
      progress: "20",
      detail:
        "- database를 만들고 스키마에 따른 테이블 구조를 정의할 수 있습니다. \n- ddl, dml, dcl을 사용하여 데이터베이스를 다루고 정의할 수 있습니다.",
      improvements:
        "mysql과는 다른 문법을 학습하고 서버와 연동하는 것을 목표로 합니다.",
    },
    {
      skill: "MongoDB",
      image: "./assets/img/skills/mongoDB.png",
      progress: "60",
      detail:
        "- 자바스크립트 기반의 프레임워크에서 typescript로 스키마 타입을 선언하고 그에 맞는 데이터에 대한 CRUD를 수행할 수 있습니다. \n- bcrypt 모듈을 사용하여 암호화된 데이터를 보관할 수 있습니다. \n- 데이터 조회 결과마다 서로 다른 응답을 처리할 수 있습니다.",
      improvements:
        "GUI가 아닌 CLI 환경에서도 적극적으로 mongodb를 탐방하고 데이터베이스 백업, 복구와 같은 기능을 학습하여 데이터베이스의 안정성을 확보하고 runCommand()를 사용하여 다양한 기능을 활용할 수 있도록 합니다.",
    },
  ],
  language: [
    {
      skill: "Java",
      image: "./assets/img/skills/java.png",
      progress: "70",
      detail:
        "- 접근 제한자를 사용하여 데이터를 보호하거나 캡슐화를 보장합니다. \n- 기능이 유사하여 메소드명이 같지만 매개변수의 타입이나 갯수가 서로 다른 함수를 오버로딩할 수 있습니다. \n- 상속받은 메소드를 오버라이딩할 수 있습니다. \n- 인터페이스를 사용하여 구현된 클래스가 제공할 기능을 보장할 수 있습니다. \n- Collection 자료구조를 사용하여 다양한 형태의 데이터를 정의하고 다룰 수 있습니다. \n- 제네릭을 사용하여 타입 체크를 하고 데이터 사용시의 타입 변환 과정을 제거할 수 있습니다. \n- 메이븐 빌드를 위해 pom.xml 파일을 작성할 수 있습니다.",
      improvements:
        "GC나 JVM, Thread Pool 같은 자바의 생태계를 이해하고 디자인 패턴을 공부하여 보다 더 성능이 좋은 애플리케이션을 개발하는 것이 목표입니다.",
    },
    {
      skill: "C",
      image: "./assets/img/skills/C.svg",
      progress: "60",
      detail:
        "- CLI 환경에서 vim을 사용하여 C 파일을 작성하고 컴파일할 수 있습니다. \n- 배열과 포인터를 사용할 수 있습니다. \n- 재귀함수를 사용하여 조건에 따른 종료 플래그를 세우고 결과를 반환할 수 있습니다. \n- 구조체와 typedef를 사용하여 다양한 데이터를 가진 새로운 데이터를 정의할 수 있습니다. \n- 화살표 연산자를 사용하여 구조체 변수에 접근할 수 있습니다. \n- malloc을 사용하여 메모리 동적할당을 할 수 있습니다.",
      improvements:
        "다양한 기능을 수행하는 C 프로젝트를 만들고 사용자 정의 함수와 나만의 라이브러리를 제작하는 것이 목표입니다.",
    },

    {
      skill: "Typescript",
      image: "./assets/img/skills/typescript.png",
      progress: "70",
      detail:
        "- 인터페이스와 타입을 선언할 수 있습니다. \n- 교차타입과 타입 가드를 사용하여 자료형의 결합을 수행하고 안정성을 높일 수 있습니다. \n- tsx파일을 작성하여 타입 룰을 지킨 컴포넌트를 react 프레임워크에 import할 수 있습니다.",
      improvements:
        ".d.ts 파일을 작성하여 자바스크립트로 작성된 모듈을 정의하여 자바스크립트 모듈을 타입스크립트에서 사용할 수 있도록 만드는 것과 react나 next.js에서 사용할 때 타입 정의 파일들을 따로 분류하고 정리하는 것을 목표로 합니다.",
    },
    {
      skill: "Javascript",
      image: "./assets/img/skills/javascript.png",
      progress: "70",
      detail:
        "- canvas를 사용하여 간단한 게임을 제작할 수 있습니다. \n- vanilla.js로 fullpage.js와 같은 기능을 하는 페이지를 구현할 수 있습니다. \n- json데이터를 다루고 수정하며 fetch할 수 있습니다. \n- addEventListener와 dispatchEvent를 사용하여 이벤트 핸들링을 할 수 있습니다. \n- jQuery의 on과 trigger를 사용하여 같은 기능을 수행할 수 있습니다. \n- document 객체와 window 객체를 사용하여 원하는 기능을 수행하고 정보를 얻을 수 있습니다. \n- 쿠키와 세션에 데이터를 저장하고 조회할 수 있습니다.",
      improvements:
        "비동기 함수에 대한 심도 있는 이해와 자바스크립트의 Closure, 이벤트 위임, `성능 저하를 방지하기 위한 디바운싱` 등의 개념을 이해하는 것이 목표입니다.",
    },
    {
      skill: "Python",
      image: "./assets/img/skills/python.png",
      progress: "70",
      detail:
        "- AWS lambda를 파이썬 코드로 작성하여 다양한 API에 요청을 보내고 요청을 받아 응답할 수 있습니다. \n- selenium 패키지를 사용하여 웹스크래핑 코드를 작성할 수 있습니다. \n- openpyxl을 사용하여 엑셀을 불러오고 notion api를 사용하여 노션에 다량의 데이터를 입력할 수 있습니다.",
      improvements:
        "아직 class를 사용해보지 않았는데 class를 사용하여 모듈을 만들어보는 것과 Django나 Flask를 사용하여 웹사이트를 제작하는 것이 목표입니다.",
    },
    {
      skill: "Go",
      image: "./assets/img/skills/Go.png",
      progress: "50",
      detail:
        "- 모듈을 제작하고 main함수에서 그것을 실행할 수 있습니다. \n- 다량의 작업을 동시에 수행하기 위해 go routine과 chan을 사용하여 쓰레드화 할 수 있습니다. \n- 웹스크래핑을 수행할 수 있습니다. \n- defer를 사용하여 함수 실행을 지연시킬 수 있습니다. \n- 데이터를 가공하여 csv파일을 생성할 수 있습니다.",
      improvements:
        "go-app과 fiber와 같은 프레임워크를 사용하여 사이트를 구축해보는 것을 목표로 합니다.",
    },
  ],
  deployment: [
    {
      skill: "AWS",
      image: "./assets/img/skills/aws.png",
      progress: "30",
      detail:
        "- AWS의 EC2를 사용하여 백엔드 서버를 구축할 수 있습니다. \n- AWS의 Lambda를 사용하여 애플리케이션을 제작할 수 있습니다.",
      improvements:
        "RDS, dynamoDB와 같은 데이터베이스 제품을 활용하여 애플리케이션을 제작하는 것, IAM과 같은 보안 서비스를 활용하여 권한을 제어하는 것, 이론적인 것을 학습하는 것을 목표로 합니다.",
    },
    {
      skill: "Vercel",
      image: "./assets/img/skills/vercel.png",
      progress: "20",
      detail: "- github 레파지토리와 연동하여 웹사이트를 배포할 수 있습니다.",
      improvements:
        "AWS Route 53을 사용하여 원하는 도메인으로 배포하는 것을 목표로 합니다.",
    },
  ] as TSkill[],
  devops: [
    {
      skill: "AWS Lambda",
      image: "./assets/img/skills/aws-lambda.png",
      progress: "60",
      detail:
        "- 파이썬 코드를 작성하여 공공API에 요청을 보내고 응답 받을 수 있습니다. \n- 데이터를 가공하여 카카오 챗봇 API에 응답을 보낼 수 있습니다.",
      improvements:
        "지금 올려둔 카카오 챗봇 코드를 리팩토링하는 것과 서버리스 아키텍쳐를 활용할 수 있는 다양한 아이템을 구상하고 적용해보는 것, 지금보다 레이어를 더 활용하여 lambda handler의 코드를 줄이는 것을 목표로 합니다.",
    },
    {
      skill: "AWS EC2",
      image: "./assets/img/skills/aws-ec2.png",
      progress: "70",
      detail:
        "- EC2에 서버를 구축할 수 있습니다. \n- CLI 환경에서 build할 수 있습니다. \n- 사용할 EC2 인스턴스에 대한 설정을 할 수 있습니다. \n- ftp를 사용하여 파일을 주고 받을 수 있습니다.",
      improvements:
        "CI/CD를 사용하여 버전 업그레이드와 배포를 자동화하는 것을 목표로 합니다.",
    },
    {
      skill: "Git",
      image: "./assets/img/skills/git.png",
      progress: "60",
      detail:
        "- init, remote add, add, commit, push, pull, clone, branch 등의 명령어를 사용하여 깃 저장소를 관리 할 수 있습니다. \n- merge를 사용하여 브랜치를 병합할 수 있습니다.",
      improvements:
        "다른 멤버들과 함께 git 저장소를 사용하여 branch 관리와 pull request등을 사용할 수 있게 되는 것이 목표입니다.",
    },
    {
      skill: "docker",
      image: "./assets/img/skills/docker.png",
      progress: "10",
      detail:
        "- 이미지 라이브러리에서 image를 pull하고 컨테이너를 실행시킬 수 있습니다.",
      improvements:
        "도커의 컨셉과 구조에 대해 심도있는 공부를 하고 도커 이미지를 직접 빌드하여 배포하는 것을 목표로 합니다.",
    },
  ],
  os: [
    {
      skill: "ubuntu Linux",
      image: "./assets/img/skills/Linux.png",
      progress: "50",
      detail:
        "- CLI 환경에서 명령어를 사용할 수 있습니다. \n- apt-get을 사용하여 패키지를 관리할 수 있습니다. \n- shell script를 작성하여 원하는 동작을 수행할 수 있습니다. \n- 디렉토리와 파일에 대한 권한을 변경할 수 있습니다.",
      improvements:
        "Linux 환경에 대한 심도있는 이해를 위해 리눅스 마스터 자격증을 취득하는 것을 목표로 합니다.",
    },
    {
      skill: "Unix",
      image: "./assets/img/skills/unix.png",
      progress: "40",
      detail:
        "- CLI 환경에서 명령어를 사용할 수 있습니다. \n- macos 환경에서 brew 사용하여 패키지를 관리할 수 있습니다. \n- shell script를 작성하여 원하는 동작을 수행할 수 있습니다. \n- 디렉토리와 파일에 대한 권한을 변경할 수 있습니다.",
      improvements: "",
    },
  ],
  server: [
    {
      skill: "Nginx",
      image: "./assets/img/skills/nginx.png",
      progress: "40",
      detail:
        "- linux 환경에서 nginx를 설치하고 pm2로 올려놓은 애플리케이션에 reverse proxy 해주는 설정을 할 수 있습니다. \n- ssl 인증서를 사용하여 https 프로토콜로 접속할 수 있습니다.",
      improvements:
        "nginx의 소프트웨어적 로드 밸런싱을 사용해 부하 분산을 경험해보는 것이 목표입니다.",
    },
  ],
  was: [
    {
      skill: "Tomcat",
      image: "./assets/img/skills/tomcat.png",
      progress: "40",
      detail:
        "- CLI 환경에서 tomcat을 설치하고 server.xml 파일을 작성하여 서버구성을 세팅할 수 있습니다. \n- 스프링과 결합하여 사용할 수 있습니다.",
      improvements: "server.xml",
    },
  ],
} as { [key: string]: TSkill[] };
