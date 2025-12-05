export interface Project {
  title: string;
  description: string;
  img: string;
  url: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "MR FLOAT - Transport Service",
    description:
      "A transport company in Zimbabwe that offers a wide array of services, including taxi rides, long-distance travel, car hire, airport shuttles, and package deliveries.",
    img: "/preview/FloatTest.png",
    url: "https://private-car-hire.vercel.app",
    tags: ["Transportation", "Booking"],
  },
  {
    title: "Vuza Trading",
    description:
      "A professional trading platform with real-time analytics and user-friendly interface.",
    img: "/preview/vuza-trading.png",
    url: "https://vuzatrading.com",
    tags: ["Automated Security", "Aluminum Solutions", "CCTV", "Alarm Systems"],
  },
  {
    title: "Mothupi & Lesego - Wedding",
    description:
      "A wedding invitation with an interactive map and a gift registry.",
    img: "/preview/mothupi-and-lesego.png",
    url: "https://mothupi-and-lesego.co.za",
    tags: ["Wedding", "Event"],
  },
  {
    title: "Monare Selahle Portfolio",
    description: "Modern portfolio for a Computer Science student.",
    img: "/preview/monare-selahle.png",
    url: "https://monareselahle.co.za",
    tags: ["Software Engineer", "Portfolio"],
  },
  {
    title: "Shots By Ozee",
    description:
      "A photographer and visionary creative currently studying Chemical Engineering.",
    img: "/preview/shots-by-ozee.png",
    url: "https://shotsbyozee.co.za",
    tags: ["Photography", "Portfolio"],
  },
  {
    title: "Gordian Malaka",
    description: "A film student who has a passion for photography.",
    img: "/preview/gordian-malaka.png",
    url: "https://uvhu-portfolio-9rw1.vercel.app/",
    tags: ["Photography", "Videography", "Portfolio"],
  },
];
