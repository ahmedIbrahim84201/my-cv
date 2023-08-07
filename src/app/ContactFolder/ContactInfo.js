import "./ContactInfo.css";
import { FaEnvelope, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";

const phoneNumber = "+905353264960";
const whatsApp = <a href="https://wa.me/+905353264960">Whatsapp</a>;
const email = <a href="mailto:ahmedibrahim51836@gmail.com">Email</a>;

function ContactInfo() {
  return (
    <div>
      <div className="style">
        <h1 className="name">Ahmed Ibrhaim</h1>
        <div className="phone-number">
          <FaPhone />
          {phoneNumber}
        </div>

        <div className="spacing">
          <a
            href="https://www.linkedin.com/in/ahmed-ibrahim-9310a523a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+905353264960"
            target="_blank"
            rel="noopener noreferrer"
            className="before"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="spacing">
          <a
            href="mailto:ahmedibrahim51836@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
