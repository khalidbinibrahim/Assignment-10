import { MdOutlineTravelExplore } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-950 text-neutral-content font-poppins">
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center mr-6 text-white text-3xl mb-2">
                        <MdOutlineTravelExplore className="text-4xl" />
                        <a className="font-bold font-montserrat">TravelTrove</a>
                    </div>
                    <p className="font-montserrat text-white text-sm font-medium">A tourism or travel website serves as an information hub for prospective <br /> travelers planning a getaway. Today, people travel for a range of <br /> experiences—babymoons, staycations, voluntourism or bleisure—you name it. <br /> So, provide as much relevant information as possible to help users plan their trips.</p>
                </div>
                <nav>
                    <NavLink to="/" className="link link-hover text-white hover:text-[#FBB804]">Home</NavLink>
                    <NavLink to="/add_tourists_spot" className="link link-hover text-white hover:text-[#FBB804]">Add Tourists Spot</NavLink>
                    <NavLink to="/all_tourists_spot" className="link link-hover text-white hover:text-[#FBB804]">All Tourists Spot</NavLink>
                    <NavLink to="/my_list" className="link link-hover text-white hover:text-[#FBB804]">My List</NavLink>
                    <NavLink to="/login" className="link link-hover text-white hover:text-[#FBB804]">Login</NavLink>
                </nav>
                <nav>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Suites</a>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Apartment</a>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Villas & Houses</a>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Butique Room</a>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Buildings</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;