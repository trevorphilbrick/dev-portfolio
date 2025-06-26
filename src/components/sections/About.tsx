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
            I help businesses bring ideas to life through clean, high-performing
            web and mobile applications. Whether you need a fast MVP, a polished
            product, or help scaling your existing stack, I deliver reliable,
            modern solutions using tools like React, React Native, Go, and
            Node.js. From backend architecture to frontend design, I focus on
            speed, usability, and maintainability—so you get software that not
            only works, but works well. I’ve built cross-platform tools,
            integrated cloud services, and optimized performance for real-world
            users—all with a mindset rooted in problem-solving and product
            value.
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
