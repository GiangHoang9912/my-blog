import "./footer.css";
import { NavLink } from "reactstrap";

function Footer(props) {
  if (props.page === "contact") {
    return (
      <div className="footer">
        <div className="footer-contact">
          <div className="footer-content-contact">
            {/* facebook */}
            <div id="div-item">
              <NavLink
                target="_blank"
                href="https://www.facebook.com/GiangHoang.1209/"
              >
                Facebook
              </NavLink>
            </div>
            {/* Instagram */}
            <div id="div-item">
              <NavLink
                target="_blank"
                href="https://www.instagram.com/_hzagg._/"
              >
                Instagram
              </NavLink>
            </div>
            {/* GitHub */}
            <div id="div-item">
              <NavLink target="_blank" href="https://github.com/GiangHoang9912">
                GitHub
              </NavLink>
            </div>
            {/* Twitter */}
            <div>
              <NavLink
                target="_blank"
                href="https://twitter.com/GiangHo98131677"
              >
                Twitter
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <div className="footer-content">
          {/* facebook */}
          <div id="div-item">
            <NavLink
              target="_blank"
              href="https://www.facebook.com/GiangHoang.1209/"
            >
              Facebook
            </NavLink>
          </div>
          {/* Instagram */}
          <div id="div-item">
            <NavLink target="_blank" href="https://www.instagram.com/_hzagg._/">
              Instagram
            </NavLink>
          </div>
          {/* GitHub */}
          <div id="div-item">
            <NavLink target="_blank" href="https://github.com/GiangHoang9912">
              GitHub
            </NavLink>
          </div>
          {/* Twitter */}
          <div>
            <NavLink target="_blank" href="https://twitter.com/GiangHo98131677">
              Twitter
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
