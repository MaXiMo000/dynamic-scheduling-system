import pkg from 'jsonwebtoken';
const { verify } = pkg;

const SECRET_KEY = '12345678'; // Replace with a secure key

export default (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            req.user = decoded;
            next();
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};