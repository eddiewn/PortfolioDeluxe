import ContactForm from "./ContactForm";
import ContactSidebar from "./ContactSidebar";

function ContactMain() {
    return (
        <>
            <main className="m-auto w-4/5 lg:w-3/5">
                <div className="flex flex-col-reverse md:flex-row gap-10 justify-between">
                        <ContactForm />
                        <ContactSidebar />
                </div>
            </main>
        </>
    );
}
export default ContactMain;
