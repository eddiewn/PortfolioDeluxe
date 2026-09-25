import ProjectCard from "./ProjectCard";
import wordlyProject from "../../assets/images/wordly-project.webp";
import blogProject from "../../assets/images/image.png";
import portfoliopic from "../../assets/images/portfoliopic.png";
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
                threshold: 0.5,
            },
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
            <main className="w-full">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center w-4/5 mx-auto overflow-hidden">
                    <ProjectCard
                        title={"Blog"}
                        image={blogProject}
                        tags={[
                            "React",
                            "PostgreSQL",
                            "TailwindCSS",
                            "Node.js",
                            "Express.js",
                            "Typescript",
                        ]}
                        linkType="read-more"
                        link={"/projects/Blog"}
                    />
                    <ProjectCard
                        title={"Wordly"}
                        image={wordlyProject}
                        tags={[
                            "React",
                            "PostgreSQL",
                            "TailwindCSS",
                            "Typescript",
                        ]}
                        linkType="read-more"
                        link={"/projects/Wordly"}
                    />

                    <ProjectCard
                        title={"This portfolio!"}
                        image={portfoliopic}
                        tags={["React", "TailwindCSS", "Node.js"]}
                        linkType="github"
                        link="https://github.com/eddiewn/PortfolioDeluxe"
                    />
                    {/* <ProjectCard
                        title={"Wordly"}
                        image={wordlyProject}
                        tags={["React", "PostgresQL", "TailwindCSS"]}
                        link="https://github.com/eddiewn"
                    />
                    <ProjectCard
                        title={"Wordly"}
                        image={wordlyProject}
                        tags={["React", "PostgresQL", "TailwindCSS"]}
                        link="https://github.com/eddiewn"
                    /> */}
                </section>
            </main>
        </>
    );
}
export default ProjectsMain;
