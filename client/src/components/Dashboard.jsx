import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        fetchSessions();
    }, []);

    const fetchSessions = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/sessions', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setSessions(response.data);
        } catch (error) {
            console.error("Error fetching sessions", error);
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Sessions Dashboard</h1>
            <div className='availability-grid'>
                {sessions.length > 0 ? (
                    sessions.map((session) => (
                        <div key={session._id} className="availability-item">
                            <p>{new Date(session.start).toLocaleString()} - {new Date(session.end).toLocaleString()}</p>
                            <p>Attendees: {session.attendees.join(', ')}</p>
                        </div>
                    ))
                ) : (
                    <p>No sessions scheduled.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
