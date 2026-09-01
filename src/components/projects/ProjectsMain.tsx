import ProjectCard from "./ProjectCard";
import wordlyProject from "../../assets/images/wordly-project.webp";

function ProjectsMain() {
  return (
    <>
      <main>
        <section className="m-auto grid grid-cols-2 gap-2 ">
          <ProjectCard title={"prj 1"} image={"hate my chungus"} tags={[]} />
          <ProjectCard
            title={"helo"}
            image={"k"}
            tags={["React, TailwindCSS"]}
          />
          <ProjectCard title={"chud"} image={<img src={wordlyProject}></img>} tags={[]} />
          <ProjectCard title={"knug"} image={"k"} tags={[]} />
        </section>
      </main>
    </>
  );
}
export default ProjectsMain;
