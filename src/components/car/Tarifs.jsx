const Tarifs = ({ tarifs }) => {

  return (
    <div className="tarifs">
      <div>
        <h3 className="tarifs__title">Цены на аренду Mercedes-Benz AMG GT 63s</h3>
        <div className="tarifs__content">
          <div className="info-block">
            <table>
              <tbody>
              {tarifs.tarifs.map((tarif, index) => (
                <tr key={index}>
                  <td>{tarif.daysRange}</td>
                  <td>{tarif.negotiable ? "договорная" : tarif.price}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarifs;