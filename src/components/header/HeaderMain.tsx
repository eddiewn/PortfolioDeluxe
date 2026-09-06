import { useState } from "react";
function HeaderMain() {
    const [menuOpen, setMenuOpen] = useState(false);
    const url = window.location.pathname;
    return (
        <header className="w-full bg-transparent text-white mt-6 sm:mt-10 my-10 md:mb-20 lg:mb-40">
            <div className="md:mx-10 flex h-16 sm:h-20 items-center justify-between px-5 sm:px-8">
                <nav>
                    <a
                        href="/"
                        className=" font-serif text-4xl sm:text-5xl lg:text-7xl "
                    >
                        Wiik
                    </a>
                </nav>
                <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
                    <a
                        href="/portfolio"
                        className={`text-xl xl:text-2xl transition-colors ${url === "/portfolio" ? "text-purple-400" : "text-white hover:text-purple-400"}`}
                    >
                        Portfolio
                    </a>
                    <a
                        href="/about"
                        className={`text-xl xl:text-2xl transition-colors ${url === "/about" ? "text-purple-400" : "text-white hover:text-purple-400"}`}
                    >
                        Wiik(i)-pedia
                    </a>
                    <a
                        href="/contact"
                        className={`text-xl xl:text-2xl transition-colors ${url === "/contact" ? "text-purple-400" : "text-white hover:text-purple-400"}`}
                    >
                        Contact
                    </a>
                </nav>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                    />
                    <span
                        className={`block h-0.5 w-7 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
                    />
                    <span
                        className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                    />
                </button>
            </div>
            <div
                className={` lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} `}
            >
                <nav className="flex flex-col items-end gap-5 px-7 pb-6 pt-4">
                    <a
                        href="/portfolio"
                        onClick={() => setMenuOpen(false)}
                        className={`text-xl transition-colors ${url === "/portfolio" ? "text-purple-400" : "text-white hover:text-purple-400"}`}
                    >
                        Portfolio
                    </a>
                    <a
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        className={`text-xl transition-colors ${url === "/about" ? "text-purple-400" : "text-white hover:text-purple-400"}`}
                    >
                        Wiik(i)-pedia
                    </a>
                    <a
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className={`text-xl transition-colors ${url === "/contact" ? "text-purple-400" : "text-white hover:text-purple-400"}`}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}
export default HeaderMain;
