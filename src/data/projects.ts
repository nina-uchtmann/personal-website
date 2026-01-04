export interface Project {
    title: string;
    description: string;
    image?: string;
    link?: string;
  }
  
  export const animationProjects: Project[] = [
    {
      title: "Character Animation Reel",
      description: "3D character animation showcasing walk cycles and emotion.",
      image: "/images/anim-project-1.jpg",
      link: "https://vimeo.com/...",
    },
    {
      title: "Environment Design",
      description: "Stylized 3D environment with dynamic lighting.",
      image: "/images/anim-project-2.jpg",
      link: "https://vimeo.com/...",
    }
  ];
  
  export const softwareProjects: Project[] = [
    {
      title: "Task Manager App",
      description: "Full-stack task management application with real-time updates.",
      image: "/images/software-project-1.jpg",
      link: "https://github.com/...",
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecast app using OpenWeather API.",
      image: "/images/software-project-2.jpg",
      link: "https://github.com/...",
    }
  ];

// Helper function to get random project
export function getRandomProject(projects: Project[]): Project | null {
    if (projects.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * projects.length);
    return projects[randomIndex];
}