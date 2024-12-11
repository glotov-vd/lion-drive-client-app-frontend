import {Link} from "react-router-dom";
import headerButtons from "../consts/headerButtons.js";


const Header = () => {
  return (
    <header className="header">
      <Link to='/'>
        <img src="/logo/logo-gold-text.png" alt="logo" className="header-logo" />
      </Link>
      <nav className="header-links">
        {headerButtons.map((btn, i) => (
          <Link key={i} to={btn.href} className="header-link">{ btn.text }</Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;