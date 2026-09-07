function ContactSidebar() {
    return (
        <>
            <section className="
                flex flex-col gap-2 lg:gap-8 md:w-4/10
                opacity-0
                fade-in-up
            ">
                <h2 className="text-5xl md:text-5xl lg:text-7xl font-extrabold">
                    Let's work together.
                </h2>
                <div>
                    <p className="text-2xl lg:text-3xl font-light md:font-medium">
                        If you have a question, or just want to say hello?</p>
                    <p className="text-2xl lg:text-3xl font-light md:font-medium">
                        I'd love to hear from you!
                    </p>
                </div>
            </section>
        </>
    );
}

export default ContactSidebar;
