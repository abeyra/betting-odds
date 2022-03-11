import './Homepage.scss';

export default function Homepage({odds}) {
    return (
        <>
            <section>
                <ul>
                    {odds.map((odd) => {
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
                                            <p>{odd.bookmakers[1].markets[0].outcomes[0].point}</p>
                                            <p>{odd.bookmakers[1].markets[0].outcomes[0].price}</p>
                                        </div>
                                        <div>
                                            <p>{odd.bookmakers[1].markets[0].outcomes[1].point}</p>
                                            <p>{odd.bookmakers[1].markets[0].outcomes[1].price}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            </>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}