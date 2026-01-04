interface ProjectToggleProps {
    projectType: 'animation' | 'software';
    onToggle: (type: 'animation' | 'software') => void;
  }
  
  export default function ProjectToggle({ projectType, onToggle }: ProjectToggleProps) {
    return (
      <div className="flex justify-center">
        <div className="inline-flex rounded-full bg-navy p-3 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] m-18">
          <button
            onClick={() => onToggle('animation')}
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
            onClick={() => onToggle('software')}
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
    );
  }