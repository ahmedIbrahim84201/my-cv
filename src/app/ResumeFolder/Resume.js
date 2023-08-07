import "./Resume.css";
function Resume() {
  //Resume
  //change anything but h1 and h2 to color white
  //change the alignement
  return (
    <div>
      <div className="h1_div">
        <h1 className="h1">SOFTWARE </h1>
        <h1 className="h1">DEVELOPER</h1>
      </div>
      <div className="resume-container">
        <div className="first-div">
          <h2 className="h2">SUMMARY</h2>
          <p className="paragraph-text">
            I'm a skilled React web developer with expertise in building web
            applications, and I also have experience in game development. While
            I'm still in the early stages of developing my skills in app
            development, I have a real knack for problem-solving, which helps me
            quickly overcome any obstacles that arise in my work. My profile
            highlights my strengths in ReactJS and my ability to create quality
            code, as well as my aptitude for learning new technologies. I'm
            excited to apply my skills and knowledge to create innovative and
            efficient solutions for any project. I'm also proficient in
            Microsoft Excel, with a proven track record of successfully
            assisting others in generating survey results.
          </p>
        </div>
        <div className="space-between-divs">
          <h2 className="h2">SKILLS</h2>
          <ul className="list">
            <li>ReactJs</li>
            <li>Unity</li>
            <li>Flutter</li>
            <li>Docker</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>C++</li>
            <li>C#</li>
            <li>DrRacket</li>
            <li>Linux</li>
            <li>Microsoft Excel</li>
          </ul>
        </div>
        <div className="width space-between-divs">
          <h2 className="h2">EDUCATION</h2>
          <h3 className="h3">High school</h3>
          <h4 className="h4">Al Aksa International School</h4>
          <h4 className="h4">2017-2020</h4>
          <h3 className="h3">Bachelor Computer Eng</h3>
          <h4 className="h4">Istanbul Bilgi University</h4>
          <h4 className="h4">2020-2024</h4>
        </div>
      </div>
      <div className="resume-container">
        <div className="experience">
          <h2 className="h2">EXPERIENCE</h2>
          <h3 className=" experienced_in">WEB DEVOLOPMENT</h3>
          <h3 className=" level_of_experience">Intermediate</h3>
          <p className="paragraph-text">
            As an intermediate ReactJS web developer, I have successfully built
            a functional website using ReactJS. This project has allowed me to
            hone my skills in web development, specifically in developing
            high-quality and responsive user interfaces. Through this
            experience, I have gained a strong understanding of ReactJS and its
            capabilities, and am confident in my ability to create complex web
            applications. I am eager to continue building on this experience and
            to take on new challenges in ReactJS development.
          </p>
        </div>
        <div className="game_app">
          <h3 className=" experienced_in">GAME DEVOLOPMENT</h3>
          <h3 className=" level_of_experience">Intermediate</h3>
          <p className="paragraph-text ">
            As an experienced Unity game developer with a solid track record, I
            have been utilizing Unity for over three years. During this time, I
            have participated in the{" "}
            <a
              href="https://github.com/OmarNehad/METU-DEVJAM"
              className="paragraph-text"
            >
              METU game jam
            </a>
            , collaborating with a team of three other developers. In this
            competitive event, our team achieved the 9th position with a game
            that I played a significant role in, particularly focusing on the
            game's Graphical User Interface (GUI). Through this extensive
            experience, I have honed my skills in game design, development, and
            user interface design, contributing to my comprehensive
            understanding of the Unity engine.
          </p>
        </div>
        {/* <div className="game_app">
          <h3 className="h3">App development</h3>
          <h3 className="h3">Beginner</h3>
          <p className="paragraph-text">
            worked on a one page app that has a profile picture and some
            buttons.
          </p>
        </div> */}
      </div>
    </div>
  );
}
export default Resume;
