import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AvailabilityForm = () => {
    const [availability, setAvailability] = useState({});
    const [editMode, setEditMode] = useState(null);

    useEffect(() => {
        fetchAvailability();
    }, []);

    const fetchAvailability = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/availability', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const availabilityData = {};
            response.data.forEach((slot) => {
                const date = new Date(slot.start).toDateString();
                if (!availabilityData[date]) {
                    availabilityData[date] = [];
                }
                availabilityData[date].push({
                    id: slot._id,
                    start: slot.start,
                    end: slot.end
                });
            });
            setAvailability(availabilityData);
        } catch (error) {
            console.error("Error fetching availability", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            if (editMode) {
                await axios.put('http://localhost:5000/api/availability', { id: editMode, ...data }, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setEditMode(null);
            } else {
                await axios.post('http://localhost:5000/api/availability', data, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            }
            fetchAvailability();
        } catch (error) {
            console.error("Error handling availability submission", error);
        }
    };

    const handleEdit = (date, slot) => {
        setEditMode(slot.id);
        document.getElementById('start').value = new Date(slot.start).toISOString().slice(0, -1);
        document.getElementById('end').value = new Date(slot.end).toISOString().slice(0, -1);
        document.getElementById('date').value = date;
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete('http://localhost:5000/api/availability', {
                headers: { Authorization: `Bearer ${token}` },
                data: { id }
            });
            fetchAvailability();
        } catch (error) {
            console.error("Error deleting availability", error);
        }
    };

    return (
        <div className="availability-form">
            <h1>Manage Availability</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" required />
                </div>
                <div className="form-group">
                    <label htmlFor="start">Start Time</label>
                    <input type="datetime-local" id="start" name="start" required />
                </div>
                <div className="form-group">
                    <label htmlFor="end">End Time</label>
                    <input type="datetime-local" id="end" name="end" required />
                </div>
                <button type="submit">{editMode ? 'Update' : 'Add'} Availability</button>
            </form>
            <div>
                <h2>Availability Slots</h2>
                {Object.keys(availability).length > 0 ? (
                    Object.keys(availability).map((date) => (
                        <div key={date} className="card">
                            <h3>{date}</h3>
                            {availability[date].map((slot) => (
                                <div key={slot.id}>
                                    <p>{new Date(slot.start).toLocaleTimeString()} - {new Date(slot.end).toLocaleTimeString()}</p>
                                    <button onClick={() => handleEdit(date, slot)}>Edit</button>
                                    <button onClick={() => handleDelete(slot.id)}>Delete</button>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <p>No availability slots available.</p>
                )}
            </div>
        </div>
    );
};

export default AvailabilityForm;
