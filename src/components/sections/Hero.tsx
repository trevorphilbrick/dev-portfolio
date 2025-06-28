import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Navbar from "../ui/Navbar";
import HamburgerNav from "../ui/HamburgerNav";

const techStack = [
  "React",
  "React Native",
  "Node.js",
  "Go",
  "GraphQL",
  "SQL",
  "AWS",
  "GCP",
];

function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (section: "projects" | "about" | "contact") => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // 'smooth' for animated scrolling
    }
  };

  return (
    <div className=" py-24  bg-[url(/plus.svg)] bg-center bg-fixed">
      {/* Only show navbar on desktop */}
      <Navbar />
      {/* Show hamburger nav on mobile */}
      <HamburgerNav />
      <div className="absolute top-0 right-0 flex gap-2 pt-4 pr-4">
        <a
          href="https://www.linkedin.com/in/trevor-philbrick"
          className="text-2xl flex items-center justify-center p-2  rounded-full bg-[#0077B5]"
        >
          <FaLinkedinIn color="#eee" />
        </a>
        <a
          href="https://github.com/trevorphilbrick"
          className="text-2xl flex items-center justify-center p-2 rounded-full bg-[#2dba4e]"
        >
          <FaGithub color="#eee" />
        </a>
      </div>
      <div className="container mx-auto px-4 md:px-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Trevor</h1>
        <h2 className="text-2xl font-bold mb-4">
          I build clean, fast apps for web and mobile.
        </h2>
        <div
          className="flex gap-4 mb-6 flex-wrap"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {techStack.map((tech, index) => (
            <Badge
              variant="neutral"
              key={tech}
              onMouseOver={() => setHoveredIndex(index)}
              className={`${hoveredIndex === index ? "scale-115" : ""} ${
                hoveredIndex &&
                (hoveredIndex - 1 === index || hoveredIndex + 1 === index)
                  ? "scale-110"
                  : ""
              }  ${
                hoveredIndex &&
                (hoveredIndex - 2 === index || hoveredIndex + 2 === index)
                  ? "scale-104"
                  : ""
              } transition-all duration-300 cursor-default`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <Button variant="neutral" onClick={() => scrollToSection("projects")}>
            View Projects
          </Button>
          <Button variant="default" onClick={() => scrollToSection("contact")}>
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
