import pkg from 'jsonwebtoken';
const { sign } = pkg;

const SECRET_KEY = '12345678'; // Replace with a secure key

export function login(req, res) {
    const { email } = req.body;
    // Generate a token
    const token = sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
}
