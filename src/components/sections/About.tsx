import Marquee from "../ui/marquee";

function About() {
  return (
    <div
      className="flex flex-col items-center md:justify-center pt-12 bg-secondary-background overflow-x-hidden"
      id="about"
    >
      <div className="container mx-auto flex flex-wrap gap-8 pb-12 flex-col-reverse md:flex-row px-4">
        <div className="flex-shrink-0">
          <img
            src="/headshot.png"
            alt="Profile"
            className=" md:w-48 md:h-48 aspect-square object-cover rounded shadow-shadow border-2 border-border rotate-10"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold mb-4 ">About Me</h1>
          <p className="mb-4">
            I'm a full-stack developer with a passion for building fast,
            intuitive web and mobile apps. I specialize in React, React Native,
            Go, and Node.js, with experience across the full development
            lifecycle—from backend architecture to pixel-perfect UIs. Whether
            I'm designing APIs, deploying to the cloud, or fine-tuning
            performance, I focus on clean code, clear UX, and real-world impact.
            I've recently launched a cross-platform app called PixelSnap and
            enjoy blending development with product thinking, automation, and a
            touch of design. Outside of coding, I'm into fitness, side projects,
            and the occasional woodworking challenge.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-bold mb-4">Tech I Use</h2>
      </div>
      <Marquee
        items={[
          "React",
          "React Native",
          "Go",
          "Node.js",
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "GraphQL",
          "SQL",
          "AWS",
          "GCP",
          "Electron",
        ]}
      />
    </div>
  );
}

export default About;
