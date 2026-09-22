import profilePic from "../../assets/images/fff.png"


function AboutMain(){
    return(
        <>
            <main className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around w-3/5 m-auto">
                <section className="md:w-4/10">
                    <img src={profilePic} alt="" />
                </section>
                <section className="md:w-4/10 flex flex-col gap-5 md:gap-3 text-2xl md:text-base">
                    <h1 className="text-4xl font-extrabold">Hello you! I'm a Frontend Web developer from Sweden :]</h1>
                    <p>I started my programming journey not like many others, with accidentally choosing a programming "Gymnasie" instead of general IT, OOPS! It is not anything I regret as I found it very fun to work with.</p>
                    <p>My favorite tools to work with is React and TailwindCSS as I love the clean feeling of having everything in one file!</p>
                    <p>Outside of writing code on my computer I enjoy beach volleyball when the weather allows for it. And when it does not allow for it I have a new found hobby of reading books, latest read was 1984 by George Orwell.</p>
                </section>
            </main>
        </>
    )
}
export default AboutMain;