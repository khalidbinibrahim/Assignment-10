import { LuUsers2, LuSunSnow } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { NavLink } from "react-router-dom";

const TouristSpot = ({ touristSpot }) => {
    const { _id, tourists_spot_name, average_cost, total_visitors_per_year, travel_time, seasonality, image } = touristSpot;

    return (
        <div className="border-2 border-gray-300 rounded-xl">
            <div className="p-6">
                <div className="mb-4">
                    <img height="200px" width="330px" className="rounded-2xl" src={image || "https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
                </div>

                <div className="mb-4">
                    <h3 className="font-bebasNeue text-2xl text-black font-medium mb-3">{tourists_spot_name}</h3>
                    <p className="text-[#0d0d0dcc] font-poppins font-medium text-xl">Price: {average_cost}</p>
                </div>

                <div className="font-poppins mb-6">
                    <p className="text-[#282828CC] font-normal flex items-center gap-3 mb-1"><LuSunSnow className="text-xl" /> {seasonality}</p>
                    <p className="text-[#282828CC] font-normal flex items-center gap-3 mb-1"><LuUsers2 className="text-xl" /> {total_visitors_per_year}</p>
                    <p className="text-[#282828CC] font-normal flex items-center gap-3 mb-1"><IoMdTime className="text-xl" /> {travel_time}</p>
                </div>

                <div>
                    <NavLink to={`/tourist_spot/${_id}`} className="btn w-full bg-[#FBB804] font-montserrat text-black font-bold px-7 text-center rounded-md border-none">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;