'use client';
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { animationProjects, softwareProjects} from '@/data/projects';
export default function ProjectsPage() {
    const [projectType, setProjectType] = useState<'animation' | 'software'>('animation');

    return (
        <section className="flex-col pr-48 pl-48 pt-40 pb-40">
            <h1 className="font-display text-6xl mb-4">
                Projects Page
            </h1>
            {/* Toggle Switch */}
            <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-navy p-3 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] m-18">
                <button
                onClick={() => setProjectType('animation')}
                className={`
                    px-7 py-5 rounded-full text-2xl
                    ${projectType === 'animation'
                    ? 'bg-background text-foreground'
                    : 'text-background'
                    }
                `}
                >
                3D Animation
                </button>
                <button
                onClick={() => setProjectType('software')}
                className={`
                    px-7 py-5 rounded-full text-2xl
                    ${projectType === 'software'
                    ? 'bg-background text-foreground'
                    : 'text-background'
                    }
                `}
                >
                Software Dev
                </button>
            </div>
            </div>
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