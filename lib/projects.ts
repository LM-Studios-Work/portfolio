export interface Project {
    title: string;
    description: string;
    img: string;
    url: string;
    tags?: string[];
}

export const projects: Project[] = [
    {
        title: "Vuza Trading",
        description: "A professional trading platform with real-time analytics and user-friendly interface.",
        img: "/preview/vuza-trading.png",
        url: "https://vuzatrading.com",
        tags: ["Automated Security", "Aluminum Solutions", "CCTV", "Alarm Systems"]
    },
    {
        title: "Monare Selahle Portfolio",
        description: "Modern portfolio for a Computer Science student.",
        img: "/preview/monare-selahle.png",
        url: "https://monareselahle.co.za",
        tags: ["Software Engineer", "Portfolio"]
    },
    {
        title: "Shots By Ozee",
        description: "A photographer and visionary creative currently studying Chemical Engineering.",
        img: "/preview/shots-by-ozee.png",
        url: "https://ozee-nine.vercel.app",
        tags: ["Photography", "Portfolio"]
    },
    {
        title: "Gordian Malaka",
        description: "A film student who has a passion for photography.",
        img: "/preview/gordian-malaka.png",
        url: "https://uvhu-portfolio-9rw1.vercel.app/",
        tags: ["Photography", "Videography","Portfolio"]
    }
];
