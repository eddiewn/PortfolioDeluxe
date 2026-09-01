import ProjectCard from "./ProjectCard";
import wordlyProject from "../../assets/images/wordly-project.webp";

function ProjectsMain() {
  return (
    <>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center w-[80%] mx-auto">
          <ProjectCard title={"prj 1"} image={"hate my chungus"} tags={[]} />
          <ProjectCard
            title={"helo"}
            image={"k"}
            tags={["React", "TailwindCSS"]}
          />
          <ProjectCard title={"Wordly"} image={wordlyProject} tags={["React", "PostgresQL", "TailwindCSS"]} />
          <ProjectCard title={"knug"} image={"k"} tags={[]} />
        </section>
      </main>
    </>
  );
}
export default ProjectsMain;
