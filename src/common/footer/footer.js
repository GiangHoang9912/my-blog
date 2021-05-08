import "./footer.css";

function Footer(props) {
  if (props.page === "contact") {
    return <div className="footer-contact"></div>;
  } else {
    return <div className="footer"></div>;
  }
}

export default Footer;
