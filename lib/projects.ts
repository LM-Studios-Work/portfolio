export interface Project {
    title: string;
    description: string;
    img: string;
    url: string;
}

export const projects: Project[] = [
    {
        title: "Vuza Trading",
        description: "He can fix your walls.",
        img: "/vuzatrading.jpeg", // Assuming you'll place this in the `public` folder
        url: "https://vuzatrading.com",
    },
    {
        title: "Project Two",
        description: "A description for the second project.",
        img: "/project-two.png", // Example image
        url: "https://example.com/two",
    },
    {
        title: "Project Three",
        description: "A description for the third project.",
        img: "/project-three.png", // Example image
        url: "https://example.com/three",
    },
];