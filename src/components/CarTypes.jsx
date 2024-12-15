import {Link} from "react-router-dom";
import car_typeButtons from "../consts/car_typeButtons";


const CarTypes = () => {
  return (
    <header className="cartype-header">
      <h3>Категории автомобилей</h3>
      <nav className="cartype-links">
        {car_typeButtons.map((btn, i) => (
          <img src={btn.Image} alt="" />,
          <Link key={i} to={btn.href} className="cartype-link">{ btn.text }</Link>
        ))}
      </nav>
    </header>
  );
}

export default CarTypes;
