import Countries from "./Countries/Countries";
import Header from "./Header/Header";
import TouristsSpots from "./TouristsSpots/TouristsSpots";

const Home = () => {
    return (
        <div>
            <Header />
            <TouristsSpots />
            <Countries />
        </div>
    );
};

export default Home;