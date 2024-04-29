import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import { toast } from 'react-toastify';

const UpdateTouristSpot = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const allTouristsSpot = useLoaderData();
    const [country, setCountry] = useState('');
    
    const touristSpot = allTouristsSpot.find(spot => spot._id === id);
    
    useEffect(() => {
        console.log(touristSpot);
    }, [touristSpot]);
    
    const { image, average_cost, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time } = touristSpot;

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`https://assignment-10-server-blue-iota.vercel.app/tourist_spots/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update tourist spot');
            }

            window.location.href = '/my_list';
            toast.success('Your Tourist Spot Updated Successfully');
        } catch (error) {
            console.error('Error updating tourist spot:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form-group">
                <TextField
                    id="image"
                    label="Image URL"
                    variant="standard"
                    defaultValue={image}
                    fullWidth
                    {...register('image')}
                />
            </div>
            <div className="form-group">
                <TextField
                    id="tourists_spot_name"
                    label="Tourist Spot Name"
                    variant="standard"
                    defaultValue={tourists_spot_name}
                    fullWidth
                    {...register('tourists_spot_name')}
                />
            </div>
            <div className="form-group">
                    <Select
                        id="country_name"
                        label="Country Name"
                        variant="standard"
                        fullWidth
                        value={country}
                        onChange={handleCountryChange}
                    >
                        <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                        <MenuItem value="Thailand">Thailand</MenuItem>
                        <MenuItem value="Indonesia">Indonesia</MenuItem>
                        <MenuItem value="Malaysia">Malaysia</MenuItem>
                        <MenuItem value="Vietnam">Vietnam</MenuItem>
                        <MenuItem value="Cambodia">Cambodia</MenuItem>
                    </Select>
                </div>
            <div className="form-group">
                <TextField
                    id="location"
                    label="Location"
                    variant="standard"
                    defaultValue={location}
                    fullWidth
                    {...register('location')}
                />
            </div>
            <div className="form-group">
                <TextField
                    id="short_description"
                    label="Short Description"
                    variant="standard"
                    defaultValue={short_description}
                    fullWidth
                    {...register('short_description')}
                />
            </div>
            <div className="form-group">
                <TextField
                    id="average_cost"
                    label="Average Cost"
                    variant="standard"
                    defaultValue={average_cost}
                    fullWidth
                    {...register('average_cost')}
                />
            </div>
            <div className="form-group">
                <TextField
                    id="seasonality"
                    label="Seasonality"
                    variant="standard"
                    defaultValue={seasonality}
                    fullWidth
                    {...register('seasonality')}
                />
            </div>
            <div className="form-group">
                <TextField
                    id="travel_time"
                    label="Travel Time"
                    variant="standard"
                    defaultValue={travel_time}
                    fullWidth
                    {...register('travel_time')}
                />
            </div>
            <div className="form-group">
                <TextField
                    id="total_visitors_per_year"
                    label="Total Visitors Per Year"
                    variant="standard"
                    defaultValue={total_visitors_per_year}
                    fullWidth
                    {...register('total_visitors_per_year')}
                />
            </div>
            <div className="form-group">
                <Button type="submit" variant="contained" color="primary">
                    Update
                </Button>
            </div>
        </form>
    );
};

export default UpdateTouristSpot;