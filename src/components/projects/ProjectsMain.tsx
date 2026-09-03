import ProjectCard from "./ProjectCard";
import wordlyProject from "../../assets/images/wordly-project.webp";
import { useEffect } from "react";

function ProjectsMain() {

useEffect(() => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.35,
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });

  return () => {
    observer.disconnect();
  };
}, []);


  return (
    <>
      <main className="w-full sm:mt-25 md:mt-50">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center w-[80%] mx-auto overflow-hidden">
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
