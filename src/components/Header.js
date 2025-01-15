import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src="https://react-router-ps.vercel.app/static/media/rp-logo.a76b4d6a8e6239425057.png"
          alt="RP logo"
          title="RP | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/diplomas" className={getClass}>
          Diplomas
        </NavLink>
        <NavLink to="/register" className={getClass}>
          Register
        </NavLink>
        <NavLink to="/faq" className={getClass}>
          FAQ
        </NavLink>
      </nav>
    </header>
  );
}
