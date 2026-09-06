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
                        className="mt-8 rounded-full bg-[#292929] px-8 py-5 text-sm font-bold transition-colors hover:bg-purple-400 hover:text-black"
                    >
                        SEND MESSAGE!
                    </button>
                </form>
            </section>
        </>
    );
}

export default ContactForm;
