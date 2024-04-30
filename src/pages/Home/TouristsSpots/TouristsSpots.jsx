import { useEffect, useState } from "react";
import TouristSpot from "../../AllTouristsSpot/TouristSpot/TouristSpot";
import { Fade } from "react-awesome-reveal";

const TouristsSpots = () => {
    const [touristSpots, setTouristSpots] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-blue-iota.vercel.app/tourist_spots')
            .then(res => res.json())
            .then(data => setTouristSpots(data))
    }, [])

    return (
        <div>
            <Fade direction="down" triggerOnce={true}>
                <div className="mb-12">
                    <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">Tourists Spots Section</h2>
                    <p className="font-poppins font-normal text-[#878787] text-center">Real estate is defined as the land and any permanent structures, like a home, or <br /> improvements attached to the land, whether natural or man-made.</p>
                </div>
            </Fade>

            <Fade direction="up" triggerOnce={true}>
                <div className="px-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        touristSpots.map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot} />)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default TouristsSpots;