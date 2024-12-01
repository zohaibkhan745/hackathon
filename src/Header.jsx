import { Link } from "react-router-dom";

const Header = () => (
    <section id="header">
      {/* <a href="#">
        <img src="img/logo.png" alt="logo" />
      </a> */}
      <div>
        <ul id="navbar">
          <Link to="/"><li>home</li></Link>
          <li>shop</li>
          <li>blog</li>
          <li>about</li>
          <li>contacts</li>
          <li>
            <a href="cart.html">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );

export default Header;