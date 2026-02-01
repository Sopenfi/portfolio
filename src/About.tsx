function About() {
  return (
    <div className="flex md:flex-row flex-col border border-gray-500 p-5">
      <div className=" pr-3  leading-relaxed text-justify">
        Hi, I'm Simo, a full-stack software developer.
        <br />
        <br /> I’m currently pursuing a Master’s in Computer Science at Aalto
        University, specializing in{" "}
        <span className="italic">
          {" "}
          Machine Learning, Data Science, and Artificial Intelligence.
        </span>{" "}
        <br />
        <br />
        In my free time, I enjoy building various types of applications. These
        projects vary from movie recommendation sites to chrome extensions. I’m
        passionate about product design, problem-solving, IoT gadgets, and
        software development. Preferably doing all at the same time.
      </div>
      <div className="flex justify-end">
        <div className="md:w-[300px] max-w-[300px] mx-auto">
          <img
            src="/images/aboutIMG.png"
            alt="About"
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
