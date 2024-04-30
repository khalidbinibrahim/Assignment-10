import { NavLink } from "react-router-dom";

const Country = ({ country }) => {
    const { country_name, image_url, description } = country;

    return (
        <NavLink to={`/countries/${country_name}`} className="border-2 border-gray-300 rounded-xl">
            <div className="p-6">
                <div className="mb-4">
                    <img height="200px" width="330px" className="rounded-2xl" src={image_url || "https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
                </div>

                <div className="mb-4">
                    <h3 className="font-bebasNeue text-2xl text-black font-medium mb-3">{country_name}</h3>
                    <p className="text-[#0d0d0dcc] font-poppins font-medium text-xl">{description}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default Country;