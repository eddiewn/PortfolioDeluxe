import profilePic from "../../assets/images/profilePic.webp"

function AboutMain(){
    return(
        <>
            <main className="flex flex-row justify-between w-4/5 m-auto">
                <section className="w-4/10">
                    <img src={profilePic} alt="" />
                </section>
                <section className="w-4/10">
                    <h1 className="text-4xl font-extrabold">Hello you! I'm a Frontend Webdeveloper from Sweden :]</h1>
                    <p>I started my programming journey not like many others, with accidentally choosing a programming "Gymnasie" instead of general IT, OOPS! It is not anything I regret as I found it very fun to work with.</p>
                    <br />
                    <p>My favorite tools to work with is React and TailwindCSS as I love the clean feeling of having everything in one file!</p>
                    <br />
                    <p>Outside of writing code on my computer I enjoy beach volleyball when the weather allows for it.</p>
                </section>
            </main>
        </>
    )
}
export default AboutMain;