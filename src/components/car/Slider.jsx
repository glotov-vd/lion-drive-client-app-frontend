const carInfoLabels = {
  class: 'класс',
  engine_power: 'мощность двигателя',
  acceleration: 'разгон 0-100',
  drive: 'привод',
  seats_number: 'количество мест',
};

const Slider = ({ carInfo }) => {

  return (
    <div className="slider">
      <div className="image-container">
        <img src="/tmp/img_4.png" alt="" />
      </div>
      <div className="slider__content">
        <h1 className="slider__info-title">Аренда {carInfo.name}</h1>

        <div className="slider__info-cards">
          {Object.entries(carInfoLabels).map(([key, label]) => (
            <div key={key} className="slider__info-card">
              <div className="slider__info-card__title">{label}:</div>
              <div>{carInfo.info[key]} {key === 'engine_power' && 'л.с.'} {key === 'acceleration' && 'секунды'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;