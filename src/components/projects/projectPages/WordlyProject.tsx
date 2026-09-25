const WordlyProject = () => {
    return (
        <>
            <main className="flex flex-col w-9/10 m-auto gap-10 text-white">
                <h1 className="text-9xl font-semibold">Wordly</h1>
                <div className="flex flex-col lg:flex-row gap-5 w-fit lg:mb-20">
                    <a
                        href="https://wordly.eddiewiiknilsson.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap shrink-0 px-6 py-3 rounded-xl bg-purple-500 text-white font-bold shadow-md shadow-purple-500/20 transition-all duration-200 hover:-translate-y-1 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                        View Live Project →
                    </a>
                    <a
                        href="https://github.com/eddiewn/wordly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap shrink-0 px-6 py-3 rounded-xl bg-purple-500 text-white font-bold shadow-md shadow-purple-500/20 transition-all duration-200 hover:-translate-y-1 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                        View GitHub Repo ↗
                    </a>
                </div>
            </main>
        </>
    );
};

export default WordlyProject;
