import Image from "next/image";
interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
    return (
        <section className="rounded-lg bg-navy p-5 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)]">
             <div className="flex gap-6">
                <div className="flex-shrink-0">
                    <Image
                        width={450}
                        height={325}
                        src={image}
                        alt="Preview image" 
                        className="rounded-md mr-24" 
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="font-display text-3xl text-background mb-12">
                        {title}
                    </h3>
                    <p className="text-background mb-4">
                        {description}
                    </p>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    />
                </div>
            </div>
        </section>
    );
  }