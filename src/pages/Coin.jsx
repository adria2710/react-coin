import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Coin() {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/${id}`)
            .then((response) => response.json())
            .then((data) => setCoin(data.data));
    }, [id]);

    const toggleFavorite = () => {
        let updatedFavorites;
        if (favorites.some((fav) => fav.id === coin.id)) {
            updatedFavorites = favorites.filter((fav) => fav.id !== coin.id);
        } else {
            updatedFavorites = [...favorites, coin];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    if (!coin) return <p>Loading...</p>;

    return (
        <div>
            <h1>{coin.name} ({coin.symbol})</h1>
            <p>Price: ${coin.priceUsd}</p>
            <button onClick={toggleFavorite}>
                {favorites.some((fav) => fav.id === coin.id) ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
}

export default Coin;