import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AvailabilityForm from './components/AvailabilityForm';
import SessionForm from './components/SessionForm';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/availability" element={<AvailabilityForm />} />
            <Route path="/sessions" element={<SessionForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<LoginForm />} />
        </Routes>
    </Router>
);

export default App;
