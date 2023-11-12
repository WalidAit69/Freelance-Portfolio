import React from "react";

function MobileNav({ show }: { show?: boolean }) {
  return (
    <div
      className={`fixed flex justify-center items-center w-full top-0 z-[50] mt-5 rounded-full ${
        !show && "md:hidden"
      }`}
    >
      <div className="w-[500px] h-full visible flex flex-row items-center justify-between md:mr-20 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] rounded-full">
        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] backdrop-blur-md bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
