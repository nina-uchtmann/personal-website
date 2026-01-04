export interface Project {
    title: string;
    description: string;
    image: string;
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
      title: "Character Modeling",
      description: "3D models of humans, animals, and creatures.",
      image: "/images/anim-project-2.jpg",
      link: "https://vimeo.com/...",
    }
  ];
  
  export const softwareProjects: Project[] = [
    {
      title: "Wearabouts",
      description: "Mobile app to upload and organize closet items and AI generate outfits based on events.",
      image: "/images/software-project-1.jpg",
      link: "https://github.com/...",
    },
    {
      title: "Sappling",
      description: "Mobile app to encourage sustainability by growing plants, setting goals, and tracking progress.",
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