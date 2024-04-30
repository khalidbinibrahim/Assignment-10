import { useState, useEffect } from "react";
import TouristSpot from "./TouristSpot/TouristSpot";
import { Fade } from "react-awesome-reveal";

const AllTouristsSpot = () => {
    const [allTouristsSpot, setAllTouristsSpot] = useState([]);
    const [sortedTouristSpots, setSortedTouristSpots] = useState([...allTouristsSpot]);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        fetch('https://assignment-10-server-blue-iota.vercel.app/tourist_spots')
            .then(res => res.json())
            .then(data => setAllTouristsSpot(data))
    }, [])

    useEffect(() => {
        const sorted = [...allTouristsSpot].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.average_cost - b.average_cost;
            } else {
                return b.average_cost - a.average_cost;
            }
        });
        setSortedTouristSpots(sorted);
    }, [allTouristsSpot, sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div>
            <Fade direction="down" triggerOnce={true}>
                <div className="mb-12">
                    <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">All Tourists Spot</h2>
                    <div className="my-10 flex items-center justify-center font-montserrat font-semibold">
                        <select onChange={handleSortChange} value={sortOrder}>
                            <option value="asc">Sort by Average Cost (Ascending)</option>
                            <option value="desc">Sort by Average Cost (Descending)</option>
                        </select>
                    </div>
                </div>
            </Fade>

            <Fade direction="up" triggerOnce={true}>
                <div className="px-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {sortedTouristSpots.map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot} />)}
                </div>
            </Fade>
        </div>
    );
};

export default AllTouristsSpot;
