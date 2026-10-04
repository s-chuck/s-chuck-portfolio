import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SUMIT<span>.</span>
      </Link>

      <div className="nav-links">
        <Link to="/work">WORK</Link>
        <Link to="/about">ABOUT</Link>

        <a
          href="https://github.com/s-chuck"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>

        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
}

export default Navbar;