import ProjectCard from "./ProjectCard";
import wordlyProject from "../../assets/images/wordly-project.webp";

function ProjectsMain() {
  return (
    <>
      <main className="w-full sm:mt-25 md:mt-50">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5  justify-items-center w-[80%] mx-auto">
          <ProjectCard title={"Wordly"} image={wordlyProject} tags={["React", "PostgresQL", "TailwindCSS"]} githubRepoLink="https://github.com/eddiewn" />
          <ProjectCard title={"Wordly"} image={wordlyProject} tags={["React", "PostgresQL", "TailwindCSS"]} githubRepoLink="https://github.com/eddiewn" />
          <ProjectCard title={"Wordly"} image={wordlyProject} tags={["React", "PostgresQL", "TailwindCSS"]} githubRepoLink="https://github.com/eddiewn" />
          <ProjectCard title={"Wordly"} image={wordlyProject} tags={["React", "PostgresQL", "TailwindCSS"]} githubRepoLink="https://github.com/eddiewn" />
          <ProjectCard title={"Wordly"} image={wordlyProject} tags={["React", "PostgresQL", "TailwindCSS"]} githubRepoLink="https://github.com/eddiewn" />

        </section>
      </main>
    </>
  );
}
export default ProjectsMain;
