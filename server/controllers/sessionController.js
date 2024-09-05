import Session from '../models/Session.js';

export async function createSession(req, res) {
    try {
        const { start, end, attendees } = req.body;
        const session = new Session({ start, end, attendees });
        await session.save();
        res.status(201).json(session);
    } catch (error) {
        res.status(400).json({ message: 'Error creating session', error });
    }
}

export async function getSessions(req, res) {
    try {
        const sessions = await Session.find();
        res.status(200).json(sessions);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching sessions', error });
    }
}
