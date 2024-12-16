import {Link} from "react-router-dom";
import car_typeButtons from "../consts/car_typeButtons";


const CarTypes = () => {
  return (
    <div className="cartypes">
      <div className="name_of_component"><h3>Категории автомобилей</h3></div>
      <div className="cartype-links">
        {car_typeButtons.map((btn, i) => (
          <div className="cartype-item" key={i}>
            <Link to={btn.href} className="cartype-link">
              <img src={btn.Image} alt="картинка" />
            </Link>
            <div className="cartype-text">{btn.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarTypes;
