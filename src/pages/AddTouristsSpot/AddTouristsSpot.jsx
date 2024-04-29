import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';

const AddTouristsSpot = () => {
    const { register, handleSubmit, reset } = useForm();
    const [country, setCountry] = useState('');

    const onSubmit = (data) => {
        data.country_name = country;
        console.log(data);
        const { image, average_cost, country_name, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time, user_email, user_name } = data;
        console.log(image, average_cost, country_name, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time, user_email, user_name)
        const touristSpot = { image, average_cost, country_name, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time, user_email, user_name };

        fetch('https://assignment-10-server-blue-iota.vercel.app/tourist_spots', {
            mode: "no-cors",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(touristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Tourists Spot created Successfully');
                    reset();
                } else {
                    toast.error('Tourist Spot is not created! Try Again')
                }
            })
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <div className='mx-8 lg:mx-96 my-10 px-10 py-8 border rounded-md border-gray-400 font-montserrat'>
            <h1 className='mb-6 font-bold text-black text-2xl'>Add Tourists Spot</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form grid grid-cols-2 gap-6 items-center justify-center">
                <div className="form-group">
                    <TextField
                        id="image"
                        label="Image URL"
                        variant="standard"
                        fullWidth
                        {...register('image', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="tourists_spot_name"
                        label="Tourist Spot Name"
                        variant="standard"
                        fullWidth
                        {...register('tourists_spot_name', { required: true })}
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
                        fullWidth
                        {...register('location', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="short_description"
                        label="Short Description"
                        variant="standard"
                        fullWidth
                        {...register('short_description', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="average_cost"
                        label="Average Cost"
                        variant="standard"
                        fullWidth
                        {...register('average_cost', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="seasonality"
                        label="Seasonality"
                        variant="standard"
                        fullWidth
                        {...register('seasonality', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="travel_time"
                        label="Travel Time"
                        variant="standard"
                        fullWidth
                        {...register('travel_time', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="total_visitors_per_year"
                        label="Total Visitors Per Year"
                        variant="standard"
                        fullWidth
                        {...register('total_visitors_per_year', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="user_email"
                        label="User Email"
                        variant="standard"
                        fullWidth
                        {...register('user_email', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="user_name"
                        label="User Name"
                        variant="standard"
                        fullWidth
                        {...register('user_name', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <button className='btn w-full bg-[#FBB804] font-montserrat text-black font-bold px-7 text-center rounded-md border-none'>
                        Add
                    </button>
                </div>
            </form>
            </div>
    );
};

export default AddTouristsSpot;