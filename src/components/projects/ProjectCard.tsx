    type Props = {
        title: string,
        image: string,
        tags: string[],
    }

function ProjectCard({title, image, tags}: Props){
    return(
        <>
            <div className="h-full w-full">
<div className="relative after:pointer-events-none after:absolute after:inset-0 after:shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                    <img src={image} alt="" />
                </div>
                <h2 className="text-7xl text-white">{title}</h2>
                <p className="text-purple-700">{tags.join(" / ")}</p>
            </div>
        </>
    )
}

export default ProjectCard