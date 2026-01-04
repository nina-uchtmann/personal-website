'use client';
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectToggle from '@/components/ProjectToggle';
import { animationProjects, softwareProjects} from '@/data/projects';
export default function ProjectsPage() {
    const [projectType, setProjectType] = useState<'animation' | 'software'>('animation');

    return (
        <section className="flex-col pr-48 pl-48 pt-40 pb-40">
            <h1 className="font-display text-6xl mb-4">
                Projects Page
            </h1>
            {/* Toggle Switch */}
            <ProjectToggle 
            projectType={projectType} 
            onToggle={setProjectType} 
            />
            {/* Project Cards */}
            <div className="flex justify-center p-5">
                <div className="max-w w-full space-y-10">
                    {projectType === 'animation' && animationProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                    {projectType === 'software' && softwareProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}