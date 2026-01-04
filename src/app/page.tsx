'use client';
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { animationProjects, softwareProjects, getRandomProject } from '@/data/projects';

export default function Home() {
  const [projectType, setProjectType] = useState<'animation' | 'software'>('animation');
  
  // Now we're on the client, safe to use random
  const randomAnimation = getRandomProject(animationProjects);
  const randomSoftware = getRandomProject(softwareProjects);

  return (
    <div className="flex-col pr-48 pl-48 pt-40 pb-40">
      {/* Intro */}
      <section className="flex-col mb-45">
        <h1 className="font-display text-6xl mb-4">
          I&apos;m Nina
        </h1>
        <h2 className="font-display text-4xl mb-13">
          a 3D Animator & Software Developer
        </h2>
        <p className="text-2xl tracking-wide">
        I study Computer Science with a minor in Entrepreneurship at the University of Washington.
        I want to understand and be a part of technical and creative processes in Software
        Development, 3D Animation, or Game Development.
        </p>
      </section>
      {/* Featured Projects */}
      <section className="flex-col">
        <h1 className="font-display text-6xl">
          Featured Projects
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
        <div className="flex justify-center">
          <div className="max-w w-full">
            {projectType === 'animation' && randomAnimation && (
              <ProjectCard {...randomAnimation} />
            )}
            {projectType === 'software' && randomSoftware && (
              <ProjectCard {...randomSoftware} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
