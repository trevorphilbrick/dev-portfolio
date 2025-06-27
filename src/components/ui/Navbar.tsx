import { scrollToSection } from "@/utils/scrollToSection";

function Navbar() {
  return (
    <div className="hidden md:block absolute top-0 left-0 p-4 bg-[#7df9ff] border-r-2 border-b-2">
      <nav className="flex gap-4">
        <button
          className="cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className="cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className="cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
        <a
          className="cursor-pointer"
          href="/trevor-philbrick-resume.pdf"
          download="trevor-philbrick-resume.pdf"
        >
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
