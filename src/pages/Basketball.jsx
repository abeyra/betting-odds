import './Basketball.scss';

export default function Basketball({basketballOdds}) {

    return (
            <section className="">
                <ul>
                    {basketballOdds
                    .map((odd) => {
                        let filteredBookie = odd.bookmakers.filter(bookie => bookie.key === 'draftkings')
                        console.log(filteredBookie);
                        return (
                            <>
                            
                            <li key={odd.id}>
                                <p>{odd.commence_time}</p>
                                <div>
                                    <div>
                                        <h3>{odd.away_team}</h3>
                                        <h3>{odd.home_team}</h3>
                                    </div>
                                    <div>
                                        <div>
                                            <p>{filteredBookie[0].markets[0].outcomes[0].point}</p>
                                            <p>{filteredBookie[0].markets[0].outcomes[0].price}</p>
                                        </div>
                                        <div>
                                            <p>{filteredBookie[0].markets[0].outcomes[1].point}</p>
                                            <p>{filteredBookie[0].markets[0].outcomes[1].price}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            </>
                        )
                    })}
                </ul>
            </section>
    )
}