import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Button } from "./button";
import { scrollToSection } from "@/lib/scrollToSection";
import FixedMenuBox from "./FixedMenuBox";

function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/trevor-philbrick-resume.pdf";
    link.download = "trevor-philbrick-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {isOpen ? (
        <div className="md:hidden fixed top-0 left-0 z-100">
          <div className="h-[100vh] w-[100vw] bg-[#7df9ff]">
            <IoMdClose
              className="absolute top-6 left-4 text-2xl"
              onClick={() => setIsOpen(false)}
            />
            <div className="flex justify-center items-center h-full flex-col gap-4">
              <Button
                variant="neutral"
                className="cursor-pointer"
                onClick={() => {
                  scrollToSection("about");
                  setIsOpen(false);
                }}
              >
                About
              </Button>
              <Button
                variant="neutral"
                className="cursor-pointer"
                onClick={() => {
                  scrollToSection("projects");
                  setIsOpen(false);
                }}
              >
                Projects
              </Button>
              <Button
                variant="neutral"
                className="cursor-pointer"
                onClick={() => {
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
              >
                Contact
              </Button>
              <Button
                variant="neutral"
                className="cursor-pointer"
                onClick={() => {
                  handleDownloadResume();
                  setIsOpen(false);
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <FixedMenuBox containerStyle="md:hidden">
          <FaHamburger
            onClick={() => setIsOpen(true)}
            className=" text-2xl  m-4 "
          />
        </FixedMenuBox>
      )}
    </>
  );
}

export default HamburgerNav;
