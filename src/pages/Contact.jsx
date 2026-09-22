import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import EnquiryForm from "../components/EnquiryForm";

function Contact() {
  return (
    <main>

      <ContactHero />

      <section className="contact-section">

        <ContactInfo />

        <EnquiryForm />

      </section>

    </main>
  );
}

export default Contact;