import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [userTouristSpots, setUserTouristSpots] = useState([]);

    useEffect(() => {
        const fetchUserTouristSpots = async () => {
            if (user) {
                try {
                    const response = await fetch('https://assignment-10-server-blue-iota.vercel.app/user_tourist_spots', {
                        headers: {
                            Authorization: `Bearer ${user.token}`
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Failed to fetch user tourist spots');
                    }
                    const data = await response.json();
                    setUserTouristSpots(data);
                } catch (error) {
                    console.error('Error fetching user tourist spots:', error.message);
                    toast.error('An error occurred while fetching your tourist spots.');
                }
            }
        };

        fetchUserTouristSpots();
    }, [user]);

    const handleDelete = (id) => {
        fetch(`https://assignment-10-server-blue-iota.vercel.app/tourist_spots/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok, status: ${res.status}, statusText: ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setUserTouristSpots(prev => prev.filter(item => item._id !== id));
                toast.success('Your Tourist Spot Deleted Successfully');
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                toast.error('An error occurred while processing your request. Please try again later.');
            });

    };

    return (
        <div className="container mx-auto w-8/12 my-14">
            <div className="mx-8 my-10 px-14 py-8 border rounded-md border-gray-400 font-montserrat text-center">
                <h1 className="text-3xl font-bold my-4">Your List Here!</h1>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Country</th>
                            <th className="px-4 py-2">Location</th>
                            <th className="px-4 py-2">Season</th>
                            <th className="px-4 py-2">Total Visitors</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userTouristSpots.map(touristSpot => (
                            <tr key={touristSpot._id}>
                                <td className="border px-4 py-2">{touristSpot.tourists_spot_name}</td>
                                <td className="border px-4 py-2">{touristSpot.country_name}</td>
                                <td className="border px-4 py-2">{touristSpot.location}</td>
                                <td className="border px-4 py-2">{touristSpot.seasonality}</td>
                                <td className="border px-4 py-2">{touristSpot.total_visitors_per_year}</td>
                                <td className="border px-4 py-2">{touristSpot.average_cost}</td>
                                <td className="border px-4 py-2">
                                    <NavLink to={`/update_tourist_spot/${touristSpot._id}`} className="btn text-blue-500 hover:text-blue-700 font-bold px-7 text-center rounded-md border-none mb-2">Update</NavLink>
                                    <button onClick={() => handleDelete(touristSpot._id)} className="btn text-red-500 hover:text-red-700 font-bold px-7 text-center rounded-md border-none">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
