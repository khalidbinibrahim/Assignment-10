import { useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {
    const allTouristsSpot = useLoaderData();

    return (
        <div>
            <h1>{allTouristsSpot.length}</h1>
            <div>
                {
                    allTouristsSpot.map(touristSpot => <p key={touristSpot._id}>{touristSpot.tourists_spot_name}</p>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;