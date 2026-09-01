import type { ReactNode } from "react"

    type Props = {
        title: string,
        image: ReactNode,
        tags: string[],
    }

function ProjectCard({title, image, tags}: Props){
    return(
        <>
            <div className="bg-amber-500 h-70 w-[80%] gap-2 p-5 m-auto">
                {image}
                {title}
                {tags}
            </div>
        </>
    )
}

export default ProjectCard