import { Link } from "react-router-dom";
import { headerButtons, headerFilterButtons }  from "../../consts/headerButtons.js";
import HeaderFilterButton from "./HeaderFilterButton.jsx";


const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to='/'>
          <img src="/logo/logo-gold-text.png" alt="logo" className="header-logo" />
        </Link>
        <nav className="header-links">
          {headerButtons.map((btn, i) => (
            <Link key={i} to={btn.href} className="header-link">{ btn.text }</Link>
          ))}
        </nav>
        <div>
          <span>+7 (499) 555-55-55</span>
        </div>
      </div>
      <div className="header-line" />

      <div className="header-buttons">
        {headerFilterButtons.map((btn, i) => (
          <HeaderFilterButton key={i} btn={btn} />
        ))}
      </div>
    </header>
  );
}

export default Header;