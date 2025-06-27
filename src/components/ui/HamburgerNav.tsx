import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Button } from "./button";

function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden fixed top-0 left-0 z-100">
      {isOpen ? (
        <div className="h-[100vh] w-[100vw] bg-[#7df9ff]">
          <IoMdClose
            className="absolute top-4 left-4 text-2xl"
            onClick={() => setIsOpen(false)}
          />
          <div className="flex justify-center items-center h-full flex-col gap-4">
            <Button variant="neutral" className="cursor-pointer">
              About
            </Button>
            <Button variant="neutral" className="cursor-pointer">
              Projects
            </Button>
            <Button variant="neutral" className="cursor-pointer">
              Contact
            </Button>
          </div>
        </div>
      ) : (
        <FaHamburger onClick={() => setIsOpen(true)} className="m-4" />
      )}
    </div>
  );
}

export default HamburgerNav;
