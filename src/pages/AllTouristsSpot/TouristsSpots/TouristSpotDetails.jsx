import { useEffect } from 'react';
import { IoMdTime } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { LuSunSnow, LuUsers2 } from 'react-icons/lu';
import { useLoaderData, useParams } from 'react-router-dom';

const TouristSpotDetails = () => {
    const { id } = useParams();
    const allTouristsSpot = useLoaderData();

    const touristSpot = allTouristsSpot.find(spot => spot._id === id);

    useEffect(() => {
        console.log(touristSpot);
    }, [touristSpot]);

    const { image, average_cost, country_name, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time } = touristSpot;

    return (
        <div>
            {touristSpot && (
                <div className="px-32 my-10">
                    <div className="flex gap-10 justify-center p-6">
                        <div className="p-8 bg-[#1313130D] rounded-2xl">
                            <img src={image} alt="" />
                        </div>

                        <div>
                            <div className="mb-3">
                                <h2 className="text-[#131313] font-bebasNeue font-semibold text-4xl mb-4">{tourists_spot_name}</h2>
                                <p className="text-[#0d0d0dcc] font-montserrat font-medium">{country_name}</p>
                            </div>
                            <hr />
                            <div className="my-4">
                                <p className="text-[#0d0d0dcc] font-poppins font-medium">Price: {average_cost}</p>
                            </div>
                            <hr />
                            <div className="">
                                <p className="text-[#131313B3] my-4 font-poppins"><span className="text-[#131313] font-semibold font-bebasNeue">Review:</span> {short_description}</p>
                            </div>
                            <hr />
                            <div className="font-poppins my-6">
                                <p className="text-[#282828CC] font-normal flex items-center gap-3 mb-1"><LuSunSnow className="text-xl" /><i className="font-montserrat font-medium">Season:</i> {seasonality}</p>
                                <p className="text-[#282828CC] font-normal flex items-center gap-3 mb-1"><LuUsers2 className="text-xl" /><i className="font-montserrat font-medium">Visitors per year:</i> {total_visitors_per_year}</p>
                                <p className="text-[#282828CC] font-normal flex items-center gap-3 mb-1"><IoMdTime className="text-xl" /><i className="font-montserrat font-medium">Travel Time:</i> {travel_time}</p>
                                <p className="text-[#282828CC] font-normal flex items-center gap-3 mb-1"><IoLocationOutline className="text-xl" /><i className="font-montserrat font-medium">Location:</i> {location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TouristSpotDetails;
