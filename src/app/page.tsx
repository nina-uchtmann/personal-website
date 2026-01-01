import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col p-45">
      <section className="flex-col gap">
        <h1 className="font-display text-6xl">
          I'm Nina
        </h1>
        <h2 className="font-display text-3xl mb-13">
          3D Animator & Software Developer
        </h2>
        <p className="text-2xl tracking-wider">
        I study Computer Science with a minor in Entrepreneurship at the University of Washington.
        I want to understand and be a part of technical and creative processes in Software
        Development, 3D Animation or Game Development.
        </p>
      </section>
    </div>
  );
}
