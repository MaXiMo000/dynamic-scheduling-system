import Availability from '../models/Availability.js';

export async function addAvailability(req, res) {
    try {
        const { start, end } = req.body;
        const availability = new Availability({ start, end });
        await availability.save();
        res.status(201).json(availability);
    } catch (error) {
        res.status(400).json({ message: 'Error adding availability', error });
    }
}

export async function updateAvailability(req, res) {
    try {
        const { id, start, end } = req.body;
        const availability = await Availability.findByIdAndUpdate(id, { start, end }, { new: true });
        res.status(200).json(availability);
    } catch (error) {
        res.status(400).json({ message: 'Error updating availability', error });
    }
}

export async function deleteAvailability(req, res) {
    try {
        const { id } = req.body;
        await Availability.findByIdAndDelete(id);
        res.status(200).json({ message: 'Availability deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting availability', error });
    }
}

export async function getAvailability(req, res) {
    try {
        const availability = await Availability.find();
        res.status(200).json(availability);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching availability', error });
    }
}
