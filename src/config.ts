export const siteConfig = {
  name: "Seojin Choi",
  title: "Senior Software Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "insui12@hknu.ac.kr",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "한경국립대학교 컴퓨터응용수학부 SS학과에 재학중인 22학번 최서진이라고 합니다!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "Air Pollution Inquiry Mashup",
      description: "공기 질 정보를 조회하고 시각화한 프로젝트.",
      link: "https://melodious-donut-6a4eca.netlify.app/",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "지도 기반 맛집 탐색",
      description: "지도에서 맛집 정보를 탐색하고 필터링하는 앱.",
      link: "https://scintillating-platypus-3ad9a5.netlify.app",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Kakao 지도 경로 안내 Mashup",
      description: "카카오 지도 데이터를 활용한 경로 안내 데모.",
      link: "https://celebrated-lolly-67c7ea.netlify.app/",
      skills: ["React", "Node.js", "AWS"],
    },
  ],

  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
