import { useRef } from "react";
import Card from "./components/Card/Card";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Contact from "./components/Contact/Contact.jsx";
import Project from "./components/projects/project";
import Experiance from "./components/experiaance/Experiance";
import Skill from "./components/skill/Skill";
import projects from "../src/assets/project.png";
import experiance from "../src/assets/experiance.png";
import skills from "../src/assets/skills.png";
import jsonResume from "./assets/resumedb.json";
import codepic from "./assets/codepic.jpg";

function App() {
  const resume = jsonResume;
  const pageButton = useRef(null);

  const handleContactMe = () =>
    pageButton.current?.scrollIntoView({ behavior: "smooth" });

  const handleProjects = () => {
    return resume.projects.map((project, i) => {
      return (
        <Project
          key={i}
          image={""}
          name={project.name}
          description={project.description}
          links={{
            cafebazaar: project.links.cafebazaar,
            github: project.links.github,
          }}
        />
      );
    });
  };

  const handleSkils = () => {
    return resume.skills.map((skill, i) => {
      return (
        <Skill
          key={i}
          title={skill.title}
          description={skill.description}
          skills={skill.skills}
        />
      );
    });
  };

  const handleExperiances = () => {
    return resume.experiance.map((experiance, i) => {
      return (
        <Experiance
          key={i}
          company={experiance.company}
          jobTitle={experiance.jobTitle}
          start={experiance.start}
          end={experiance.end}
          description={experiance.description}
        />
      );
    });
  };

  return (
    <div className="flex flex-col relative bg-fixed bg-gradient-to-br from-white from-40%  via-gray-100 via-60% to-white">
      <header className="flex flex-col ite">
        <Header />
        <Banner
          name={resume.name}
          shortBio={resume.shortBio}
          bio={resume.bio}
          onClick={handleContactMe}
        />
        {/* <Contact /> */}
      </header>
      <section className="flex flex-col items-center sm:p-6 md:p-6 lg:p-0">
        <main className="flex flex-col lg:w-4/5  gap-12 mb-36">
          <div className="flex flex-row justify-between items-center">
            <hr className="h-0.5 bg-slate-300 w-full" />
            <div className="flex flex-col mt-12 justify-center items-center gap-3">
              <img src={projects} className="w-28" />
              <h2 className="w-48 text-gray-600 text-center font-YekanReg text-4xl ">
                پروژه ها
              </h2>
            </div>
            <hr className="h-0.5 bg-slate-300 w-full" />
          </div>
          <section className="self-center  grid gap-6 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {handleProjects()}
          </section>
          <div className="flex flex-row justify-between items-center">
            <hr className="h-0.5 bg-slate-300 w-full" />
            <div className="flex flex-col mt-12 justify-center items-center gap-3">
              <img src={skills} className="w-28" />
              <h2 className="w-48 text-gray-600 text-center font-YekanReg text-4xl ">
                مهارتها
              </h2>
            </div>
            <hr className="h-0.5 bg-slate-300 w-full" />
          </div>
          <section className="self-center flex flex-col gap-6 sm:w-full md:w-full">
            {handleSkils()}
            <Card>
              <img
                className="rounded-3xl w-full h-64 object-cover"
                src={codepic}
                alt="hoseinir"
              />
              <p className="text-white opacity-80 w-3/5 text-center subpixel-antialiased m-4 font-YekanBd absolute sm:text-lg lg:text-5xl leading-relaxed ">
                با توجه به تخصص های من در این حوزه‌ها، می‌توانم به شما در تحقق
                ایده‌های خود کمک کنم و بهترین راهکارها را برای شما ارائه دهم
              </p>
            </Card>
          </section>
          <div className="flex flex-row justify-between items-center">
            <hr className="h-0.5 bg-slate-300 w-full" />
            <div className="flex flex-col mt-12 justify-center items-center gap-3">
              <img src={experiance} className="w-28" />
              <h2 className="w-48 text-gray-600 text-center font-YekanReg text-4xl ">
                تجربه شغلی
              </h2>
            </div>
            <hr className="h-0.5 bg-slate-300 w-full" />
          </div>
          <Card outline={true}>
            <div className="p-6">{handleExperiances()}</div>
          </Card>
        </main>
      </section>
      <footer
        ref={pageButton}
        className="bg-primary py-24 flex flex-col justify-center items-center"
      >
        <section className="w-4/5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card outline={true} position={` absolute `} bottom={`bottom-32 `}>
            <div className="p-6 flex lg:flex-row md:flex-row sm:flex-col justify-center items-center ">
              <h3 className="text-black m-4 font-YekanReg sm:text-lg lg:text-2xl">
                جهت همکاری و سفارش پروزه با من در تماس باشید:
              </h3>
              <Contact color={"#921DDF"} />
            </div>
          </Card>
        </section>
      </footer>
    </div>
  );
}

export default App;
