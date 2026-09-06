function ContactForm() {
    return (
        <>
            <section className="md:w-5/10">
                <form className="space-y-11 ">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-5 block text-base font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            className="w-full border-0 border-b border-purple-400 bg-transparent pb-8 text-base text-white placeholder:text-white/25 outline-none focus:border-purple-400"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-5 block text-base font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="w-full border-0 border-b border-purple-400 bg-transparent pb-8 text-base text-white placeholder:text-white/25 outline-none focus:border-purple-400"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="mb-5 block text-base font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Your message"
                            required
                            className="w-full resize-none border-0 border-b border-purple-400 bg-transparent pb-8 text-base text-white placeholder:text-white/25 outline-none focus:border-purple-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="group relative mt-8 overflow-hidden rounded-full bg-[#292929] px-8 py-5 text-sm font-bold text-white hover:cursor-pointer"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                            SEND MESSAGE!
                        </span>

                        <span className="absolute inset-y-0 left-0 z-0 w-0 bg-purple-400 transition-all duration-500 ease-in-out group-hover:w-full" />
                    </button>
                </form>
            </section>
        </>
    );
}

export default ContactForm;
