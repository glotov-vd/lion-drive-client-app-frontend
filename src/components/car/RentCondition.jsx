const RentCondition = () => {

  return (
    <div className="rent-condition">
      <div>
        <h3 className="rent-condition__title">Условия аренды автомобиля в компании Lion Drive</h3>
        <div className="rent-condition__content">
          <div className="info-block">
            <h2>Требования к арендатору:</h2>
            <table>
              <tbody>
              <tr className="first-row">
                <td>от</td>
                <td>20 лет</td>
              </tr>
              <tr className="second-row">
                <td></td>
                <td>возраст</td>
              </tr>

              <tr className="first-row">
                <td>от</td>
                <td>2 лет</td>
              </tr>
              <tr className="second-row">
                <td></td>
                <td>стаж вождения</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="info-block">
            <h2>Для аренды потребуется:</h2>
            <table>
              <tbody>
              <tr className="first-row">
                <td>обязательные документы</td>
                <td>Водительское удостоверение</td>
              </tr>
              <tr className="second-row">
                <td></td>
                <td>скан с двух сторон</td>
              </tr>

              <tr className="first-row">
                <td>обязательные документы</td>
                <td>Паспорт</td>
              </tr>
              <tr className="second-row">
                <td></td>
                <td>первая страница + регистрация</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentCondition;