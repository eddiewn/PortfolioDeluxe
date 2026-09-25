import linkedinDark from "../../assets/images/linkedin (4).png";
import github from "../../assets/images/social.png";
import EddieCV from "../../assets/EddieCV.pdf"

function FooterHeader() {
    return (
        <>
            <footer className="flex flex-col w-full my-15">
                <div className="mx-auto sm:my-10 my-20 w-3/5 md:w-4/5 z-20 h-px bg-purple-400 "></div>
                <div className="flex flex-col gap-20 w-full md:my-20">
                    <section className="flex flex-col opacity-80 md:ml-40 mx-10 text-2xl">
                        <p>Web developer based in Malmö.</p>
                        <br />
                        <p>Always searching for new problems to solve!</p>
                    </section>
                    <nav className="flex flex-col md:flex-row md:ml-40 items-center gap-7 text-6xl font-extrabold">
                        <a className="hover:text-violet-400 duration-200 transition-colors" href="/portfolio">Work</a>
                        <a className="hover:text-violet-400 duration-200 transition-colors" href="/about">About</a>
                        <a className="hover:text-violet-400 duration-200 transition-colors" href="/contact">Contact</a>
                    </nav>
                    <nav className="flex m-auto gap-5">
                        <a href=""><img className="w-15 border-2 rounded-full bg-white" src={linkedinDark} alt="" /></a>
                        <a href=""><img className="w-15" src={github} alt="" /></a>
                        <a href={EddieCV} download="Eddie_Wiik_Nilsson_CV" className="flex justify-center  items-center text-3xl w-15 h-15 border-2 rounded-full hover:bg-violet-400 hover:text-black transition-all duration-500">
                            CV
                        </a>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default FooterHeader;
