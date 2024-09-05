import React, { useState } from 'react';
import axios from 'axios';

const SessionForm = () => {
    const [sessionStart, setSessionStart] = useState('');
    const [sessionEnd, setSessionEnd] = useState('');
    const [attendees, setAttendees] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            await axios.post('http://localhost:5000/api/sessions', { start: sessionStart, end: sessionEnd, attendees: attendees.split(',') }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setSessionStart('');
            setSessionEnd('');
            setAttendees('');
        } catch (error) {
            console.error("Error creating session", error);
        }
    };

    return (
        <div className="availability-form">
            <h1>Schedule a Session</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="sessionStart">Session Start Time</label>
                    <input
                        type="datetime-local"
                        id="sessionStart"
                        value={sessionStart}
                        onChange={(e) => setSessionStart(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sessionEnd">Session End Time</label>
                    <input
                        type="datetime-local"
                        id="sessionEnd"
                        value={sessionEnd}
                        onChange={(e) => setSessionEnd(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="attendees">Attendees (comma separated emails)</label>
                    <input
                        type="text"
                        id="attendees"
                        value={attendees}
                        onChange={(e) => setAttendees(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Session</button>
            </form>
        </div>
    );
};

export default SessionForm;
