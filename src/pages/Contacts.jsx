import Header from "../components/header/Header.jsx";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";

const CONTACT_INFO = {
  address: "г. Санкт-Петербург, Малый проспект Васильевского острова, 62, к1",
  phone: "+7 (499) 555-55-55",
  workTime: "Ежедневно с 09:00 до 21:00",
};

const Contacts = () => {
  return (
    <div className="contacts">
      <Header/>
      <div className="contacts__content">
        <div className="contact-data">
          <h1>Контактная информация Lion Drive</h1>

          <div className="contact-data__content">
            <div className="address">
              <span className="label">Адрес:</span>
              <span className="value">{CONTACT_INFO.address}</span>
            </div>

            <div className="phone">
              <span className="label">Телефон:</span>
              <a className="value" href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
            </div>

            <div className="work-time">
              <span className="label">Время работы:</span>
              <span className="value">{CONTACT_INFO.workTime}</span>
            </div>
          </div>
        </div>

        <div className="map">
          <YMaps>
            <Map defaultState={{center: [59.940389, 30.252312], zoom: 16}} width="100vw" height="400px">
              <Placemark geometry={[59.940389, 30.252312]}/>
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
