import "./Basketball.scss";
const cors = require('cors');

export default function Basketball({ basketballOdds }) {
  return (
    <section className="sports-container">
      <ul className="sports-container__sport">
        {basketballOdds.map((odd) => {
          let filteredBookie = odd.bookmakers.filter(
            (bookie) => bookie.key === "draftkings"
          );
          console.log(filteredBookie);
          return (
            <>
              <li key={odd.id} className="sports-card">
                <p className="sports-card__time">{new Date (odd.commence_time).toLocaleString()}</p>
                <div className="sports-card__content">
                  <div className="sports-card__content-away-team">
                    <h3>{odd.away_team}</h3>

                    <div className="sports-card__content-odds-away">
                      <p className="sports-card__content-odds-away-price">Spread: {filteredBookie[0].markets[0].outcomes[0].point}</p>
                      <p className="sports-card__content-odds-away-spread">Price: {filteredBookie[0].markets[0].outcomes[0].price}</p>
                    </div>
                  </div>
                  <div className="sports-card__content-away-team">
                    <h3>{odd.home_team}</h3>

                    <div className="sports-card__content-odds-home">
                      <p className="sports-card__content-odds-home-spread">Spread: {filteredBookie[0].markets[0].outcomes[1].point}</p>
                      <p className="sports-card__content-odds-home-spread">Price: {filteredBookie[0].markets[0].outcomes[1].price}</p>
                    </div>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </section>
  );
}
