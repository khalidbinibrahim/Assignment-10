import { NavLink } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(toast.success('User log out successfully'))
            .catch(error => {
                console.error(error);
            })
    }

    const navLinks = <>
        <NavLink to="/" className="mr-3 font-bold text-black hover:bg-base-300 focus:border-b-2 focus:border-[#F9A51A] focus:text-[#F9A51A] focus:font-semibold rounded-lg py-2 px-3">Home</NavLink>
        <NavLink to="/add_tourists_spot" className="mr-3 font-bold text-black hover:bg-base-300 focus:border-b-2 focus:border-[#F9A51A] focus:text-[#F9A51A] focus:font-semibold rounded-lg py-2 px-3">Add Tourists Spot</NavLink>
        <NavLink to="/all_tourists_spot" className="mr-3 font-bold text-black hover:bg-base-300 focus:border-b-2 focus:border-[#F9A51A] focus:text-[#F9A51A] focus:font-semibold rounded-lg py-2 px-3">All Tourists Spot</NavLink>
        <NavLink to="/my_list" className="mr-3 font-bold text-black hover:bg-base-300 focus:border-b-2 focus:border-[#F9A51A] focus:text-[#F9A51A] focus:font-semibold rounded-lg py-2 px-3">My List</NavLink>
    </>

    return (
        <div className="navbar font-montserrat px-32 py-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <Fade cascade damping={0.1}>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </Fade>
                </div>
                <div className="flex gap-2 items-center mr-6 text-3xl">
                    <MdOutlineTravelExplore className="text-4xl" />
                    <a className="font-bold text-[#131313] font-montserrat">TravelTrove</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex mr-4 ml-4">
                <Fade cascade damping={0.2}>
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </Fade>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex gap-2 items-center">
                            <button onClick={handleLogOut} className="btn bg-[#FBB804] text-black font-bold px-7">Log Out</button>
                            <NavLink to="/update_profile">
                                <img id="userPhoto" alt="" src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} className="w-14 h-14 rounded-full" />
                            </NavLink>
                            <Tooltip 
                                anchorId="userPhoto"
                                place="top"
                                content={user.displayName}
                            />
                        </div> :
                        <NavLink to="/login" className="btn bg-[#FBB804] text-black font-bold px-7">Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Navigation;