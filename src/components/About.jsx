import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: "https://cdn-icons-png.flaticon.com/512/3159/3159310.png", class:"w-[50px]" },
    { name: "WEB DEVELOPMENT", image: "https://cdn-icons-png.flaticon.com/512/9987/9987215.png", class:'w-[50px]' },
    { name: "DSA", image: "https://cdn-icons-png.flaticon.com/512/2085/2085264.png", class:'w-[60px]' },
    {
      name: "Finance and Leadership",
      image: "https://cdn-icons-png.flaticon.com/512/631/631180.png",
      class: "w-[50px]"
    },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24 pt-2" id="about">
      <div className="flex">
      <div className="">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-3/5 leading-[2]">
      I'm Raghav Agarwal, a frontend developer and UI/UX designer. I create intuitive, visually appealing digital experiences using modern web technologies. I am passionate about crafting seamless user interfaces that enhance the overall user experience. Let's collaborate and bring your vision to life!
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">2+</div>
        <p className="text-white text-2xl md:ml-5">
        Years of experience in the programming world, passionate about solving problems and coding the future.
        </p>
      </div>
      </div>
      <div>
        <img src="https://img.freepik.com/free-vector/man-sitting-desktop-pc-computer-screen_3446-328.jpg?w=740&t=st=1688895300~exp=1688895900~hmac=02188b8023b65bfb3c897c198c8e21e9028d8da1dad97b361e69b59bbb8ddddd" className="rounded-full pt-8"/>
      </div>
      </div>
      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} className={skill.class}/>
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      <Services/>
    </div>
  );
};

export default About;
