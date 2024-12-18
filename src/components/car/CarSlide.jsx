import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const CarSlide = ({ car }) => {
  const { name, price, img } = car;

  return (
    <div className="car-slide">
      <Link to={`/cars/${car.id}`}>
        <div className="car-slide__content">
          <div className="car-slide__title">
            <span>{name}</span>
          </div>
          <span className="car-slide__price">{price} ₽ / сут.</span>
        </div>
        <img className="car-slide__img" src={img} alt='' />
      </Link>
    </div>
  );
}

// Валидация пропсов
CarSlide.prototype = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
}

export default CarSlide;