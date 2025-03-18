import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Favorites from "./pages/Favourites";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <h1>¡Hola, la app está funcionando!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coin/:id" element={<Coin />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    );
}

export default App;