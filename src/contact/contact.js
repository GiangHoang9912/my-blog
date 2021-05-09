import "./contact.css";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Giang Hoàng - contact</title>
      </Helmet>

      <Header />
      <div className="contact">
        FOR ALL WORKS CONTACT: GIANGHOANG.9955@GMAIL.COM
      </div>
      <Footer page="contact" />
    </div>
  );
}

export default Contact;
