import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "SHIPIT",
      description:
        "Online marketplace for local and antique products",
      photo: "https://img.freepik.com/free-vector/flat-design-local-market-landing-page_23-2149425871.jpg",
      to:"https://master--stirring-kashata-b8c8fa.netlify.app/"
    },
    {
      title: "GOTHAM",
      description:
        "A news website to keep you updated with the current world.",
      photo: "https://dxlm84u5gf2hs.cloudfront.net/wp-content/uploads/2018/01/Fotolia_104752853_S.jpg",
      to: "https://news-website-jptb.vercel.app/"
    },
    {
      title: "My Portfolio",
      description:
        "My portfolio showcasing my skills and work.",
      photo: "https://cache.careers360.mobi/media/article_images/2022/4/20/How-to-make-portfolio-for-design-admission.jpg",
      to: "https://my-portfolio-omega-virid.vercel.app/"
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] w-fixed bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} className='w-[280px] mx-auto h-[200px]'/>
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  About me
                </button>
                <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                  <a href={projects[index].to}>Projects</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
