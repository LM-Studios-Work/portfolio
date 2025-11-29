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
        img: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop",
        url: "https://vuzatrading.com",
        tags: ["Finance", "Web App", "React"]
    },
    {
        title: "EcoSpace Architecture",
        description: "Modern architecture portfolio showcasing sustainable living designs.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        url: "#",
        tags: ["Architecture", "Portfolio", "Design"]
    },
    {
        title: "Urban Bites",
        description: "Restaurant booking and food delivery service with live tracking.",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        url: "#",
        tags: ["Food", "E-commerce", "Mobile"]
    },
    {
        title: "TechFlow Solutions",
        description: "B2B SaaS landing page optimized for high conversion rates.",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
        url: "#",
        tags: ["SaaS", "B2B", "Marketing"]
    },
    {
        title: "Neon Fitness",
        description: "Gym membership portal with class scheduling and trainer profiles.",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
        url: "#",
        tags: ["Fitness", "Booking", "Community"]
    },
    {
        title: "Alpine Travel",
        description: "Travel agency website featuring destination guides and booking engines.",
        img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
        url: "#",
        tags: ["Travel", "Booking", "Experience"]
    }
];
