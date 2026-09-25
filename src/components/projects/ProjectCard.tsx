import github from "../../assets/images/github.png";
import { useNavigate } from "react-router-dom";
type Props = {
    title: string;
    image: string;
    tags: string[];
    linkType: "read-more" | "github";
    link: string;
};
function ProjectCard({ title, image, tags, linkType, link }: Props) {
    const navigate = useNavigate();

    return (
        <a
            onClick={() => {
                if (linkType === "read-more") {
                    navigate(link);
                }
            }}
            className="card"
            target={linkType === "github" ? "_blank" : undefined}
            rel={linkType === "github" ? "noopener noreferrer" : undefined}
            href={linkType === "github" ? link : undefined}
        >
            <div className=" h-full w-full mb-12 sm:mb-16 lg:mb-20">
                <div className="group mx-auto w-[92%] sm:w-[90%]">
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-80">
                        <div className="relative overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:shadow-[inset_0_-15px_15px_rgba(18,18,18,1)] sm:after:shadow-[inset_0_-20px_20px_rgba(24,24,24,1)]">
                            <img
                                className="w-full h-auto object-cover transition duration-500"
                                src={image}
                                alt={title}
                            />
                        </div>

                        {linkType === "github" && (
                            <div className="absolute top-1/3 left-1/2 h-16 w-16 sm:h-20 sm:w-20 lg:h-25 lg:w-25 -translate-x-1/2 -translate-y-1/2 rotate-45 scale-50 rounded-full bg-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 flex items-center justify-center">
                                <img src={github} alt="GitHub Image" />
                            </div>
                        )}

                        {linkType === "read-more" && (
                            <div className="absolute top-1/3 left-1/2 h-16 w-16 sm:h-20 sm:w-20 lg:h-25 lg:w-25 -translate-x-1/2 -translate-y-1/2 rotate-45 scale-50 rounded-full bg-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 flex items-center justify-center">
                                <p className="text-black">Read More</p>
                            </div>
                        )}

                        <div className="ml-5 transition-transform duration-500 group-hover:duration-200 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 lg:group-hover:-translate-y-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
                                {title}
                            </h2>

                            <p className="text-purple-400 text-sm sm:text-base md:text-lg">
                                {tags.join(" / ")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
export default ProjectCard;
