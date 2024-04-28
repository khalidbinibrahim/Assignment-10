import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import TouristSpot from "./TouristsSpots/TouristSpot";
import Aos from "aos";
import 'aos/dist/aos.css'

const AllTouristsSpot = () => {
    const allTouristsSpot = useLoaderData();

    useEffect(() =>{
        Aos.init({duration: 1000});
    }, [])

    return (
        <div data-aos="fade-down">
            <div className="mb-12">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">All Tourists Spot</h2>
            </div>

            <div className="px-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    allTouristsSpot.map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot}/>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;