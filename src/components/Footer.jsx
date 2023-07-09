import React from "react";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>Raghav Agarwal</p>
        <p className="hidden sm:block">Web Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">Data Analyst</p>
        <p className="hidden sm:block">Portfolio design</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://www.linkedin.com/in/raghav-agarwal-23a54b217/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" className="w-[28px]"/>
        </a>
        <a
          className="ml-4"
          href="https://instagram.com/who_raghav_a?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" className="w-[28px]"/>
        </a>
        <a
          className="ml-4"
          href="https://github.com/Raghav800"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/3291/3291667.png" alt="" className="w-[28px]"/>
        </a>
        <a
          className="ml-4"
          href="mailto:agarwalraghav2612@gamil.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/9034/9034284.png" alt="" className="w-[28px]"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
