// import Image from "next/image";
'use client';
import { useState } from 'react';

export default function Home() {
  const [projectType, setProjectType] = useState<'animation' | 'software'>('animation');

  return (
    <div className="flex-col p-45">
      {/* Intro */}
      <section className="flex-col mb-45">
        <h1 className="font-display text-6xl">
          I&apos;m Nina
        </h1>
        <h2 className="font-display text-3xl mb-13">
          3D Animator & Software Developer
        </h2>
        <p className="text-2xl tracking-wider">
        I study Computer Science with a minor in Entrepreneurship at the University of Washington.
        I want to understand and be a part of technical and creative processes in Software
        Development, 3D Animation, or Game Development.
        </p>
      </section>
      {/* Featured Projects */}
      <section className="flex-col">
        <h1 className="font-display text-6xl pb-17">
          Featured Projects
        </h1>
        {/* Toggle Switch */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-navy p-3 drop-shadow-xl/25">
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
      </section>


    </div>
  );
}
