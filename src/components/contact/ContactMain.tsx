import ContactForm from "./ContactForm";
import ContactSidebar from "./ContactSidebar";

function ContactMain() {
    return (
        <>
            <main className="m-auto w-4/5 lg:w-3/5">
                <div className="flex flex-col-reverse md:flex-row gap-10 justify-between">
                    <section className="md:w-6/10">
                        <ContactForm />
                    </section>
                    <section className="flex flex-col gap-2 md:w-3/10">
                        <ContactSidebar />
                    </section>
                </div>
            </main>
        </>
    );
}
export default ContactMain;
