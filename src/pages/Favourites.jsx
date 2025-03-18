import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Favorites() {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    return (
        <div>
            <h1>Favorites</h1>
            {favorites.length === 0 ? (
                <p>No favorite cryptocurrencies yet.</p>
            ) : (
                <ul>
                    {favorites.map((coin) => (
                        <li key={coin.id}>
                            <Link to={`/coin/${coin.id}`}>{coin.name} ({coin.symbol})</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Favorites;
