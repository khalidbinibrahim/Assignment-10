import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

const AddTouristsSpot = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const { image, average_cost, country_name, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time, user_email, user_name } = data;
        console.log(image, average_cost, country_name, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time, user_email, user_name)
        const touristSpot = { image, average_cost, country_name, location, seasonality, short_description, total_visitors_per_year, tourists_spot_name, travel_time, user_email, user_name };

        fetch('http://localhost:5000/tourist_spots', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(touristSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                toast.success('Tourists Spot created Successfully');
                reset();
            } else {
                toast.error('Tourist Spot is not created! Try Again')
            }
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
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
                <TextField
                    id="country_name"
                    label="Country Name"
                    variant="standard"
                    fullWidth
                    {...register('country_name', { required: true })}
                />
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
                    multiline
                    rows={4}
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
                <Button type="submit" variant="contained" color="primary">
                    Add
                </Button>
            </div>
        </form>
    );
};

export default AddTouristsSpot;