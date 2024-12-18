export type TimelineItem = {
  title: string;
  valueName: string;
  valueLink: string;
  date: string;
  achievements: string[];
};

export const educationData: TimelineItem[] = [
  {
    title: "Bachelor of Engineering",
    valueName:
      "Modern Education Society’s Wadia College of Engineering, Pune University",
    valueLink: "https://mescoe.mespune.org",
    date: "Aug 2018 - Jul 2022",
    achievements: [
      "Graduated with First Class Distinction CGPA: 7.93.",
      "Excelled in core subjects such as Digital Communication, Microprocessors, and Signal Processing.",
      "Developed analytical thinking and problem-solving skills through rigorous coursework and real-world projects.",
      "Applied engineering principles to real-world projects, bridging theoretical knowledge with practical implementation.",
      "Participated in coding hackathons and technical fests, showcasing innovative solutions to real-world problems.",
      "Member of the college's Tech Club, organizing workshops and mentoring peers on emerging technologies.",
      "Contributed to community-driven projects, helping implement technology-driven solutions for social impact.",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    valueName: "Shri Shivaji Vidya Mandir & Jr. College, Aundh",
    valueLink: "https://www.facebook.com/shrishivaji/?locale=hi_IN",
    date: "Jun 2016 - Feb 2018",
    achievements: [
      "Graduated with First Class Distinction Percentage: 59%.",
      "Specialized in core subjects such as Physics, Chemistry, and Mathematics.",
      "Excelled in practical labs, developing a strong foundation in experimental methodologies.",
      "Participated in science exhibitions, demonstrating innovative experiments and concepts.",
      "Awarded for academic excellence and active participation in extracurricular activities.",
    ],
  },
  {
    title: "Secondary School Certificate (SSC)",
    valueName: "M.E.S. Nrisinha High School, Sangvi, Pune",
    valueLink:
      "https://www.facebook.com/p/MES-Nrisinha-High-School-Sangvi-Pune-100063935082576/",
    date: "Jun 2014 - Mar 2016",
    achievements: [
      "Graduated with First Class Distinction Percentage: 78%.",
      "Strong performance in core subjects such as Mathematics, Science, and English.",
      "Winner of cricket tournaments in both 7th and 10th grades, showcasing leadership and teamwork skills.",
      "Achieved the title of Kabaddi champion in 10th grade, highlighting physical fitness and strategic gameplay.",
      "Awarded for excellence in academics and sports, balancing academics with co-curricular interests.",
    ],
  },
];
