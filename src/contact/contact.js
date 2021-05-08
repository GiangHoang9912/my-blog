import './contact.css';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";

function Contact() {
  return (
    <div className="contact-page">
        <Header />
        <div className="contact">
          FOR ALL WORKS CONTACT:
          GIANGHOANG.9955@GMAIL.COM
        </div>
        <Footer page="contact"/>
    </div>
  );
}

export default Contact;
