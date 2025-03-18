import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets/")
            .then((response) => response.json())
            .then((data) => setCoins(data.data));
    }, []);

    return (
        <div>
            <h1>Cryptocurrency Prices</h1>
            <ul>
                {coins.map((coin) => (
                    <li key={coin.id}>
                        <Link to={`/coin/${coin.id}`}>{coin.name} ({coin.symbol})</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
