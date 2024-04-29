import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UpdateTouristSpot = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`https://assignment-10-server-bkec7iu7p-khalid-bin-ibrahims-projects.vercel.app/tourist_spots/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update tourist spot');
            }

            window.location.href = '/my-list';
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
                <Button type="submit" variant="contained" color="primary">
                    Update
                </Button>
            </div>
        </form>
    );
};

export default UpdateTouristSpot;