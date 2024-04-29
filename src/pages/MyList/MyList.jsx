import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { NavLink } from 'react-router-dom';

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [userTouristSpots, setUserTouristSpots] = useState([]);

    useEffect(() => {
        const UserTouristSpots = async () => {
            try {
                if (user) {
                    const response = await fetch(`https://assignment-10-server-blue-iota.vercel.app/user_tourist_spots/${user.uid}`);
                    console.log(response.ok)
                    if (!response.ok) {
                        throw new Error('Failed to fetch user tourist spots');
                    }
                    const data = await response.json();
                    setUserTouristSpots(data);
                }
            } catch (error) {
                console.error('Error fetching user tourist spots:', error.message);
            }
        };

        UserTouristSpots();
    }, [user]);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://assignment-10-server-blue-iota.vercel.app/tourist_spots/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete tourist spot');
            }
            setUserTouristSpots(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.error('Error deleting tourist spot:', error.message);
        }
    };
    
    return (
        <div>
            <h1>Your List Here!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userTouristSpots.map(touristSpot => (
                        <tr key={touristSpot._id}>
                            <td>{touristSpot.name}</td>
                            <td>{touristSpot.location}</td>
                            <td>{touristSpot.category}</td>
                            <td>
                                <NavLink to="/update_tourist_spot/:id"><button>Update</button></NavLink>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(touristSpot._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyList;
