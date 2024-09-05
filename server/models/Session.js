import { Schema, model } from 'mongoose';

const sessionSchema = new Schema({
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    attendees: [{ type: String }]
});

export default model('Session', sessionSchema);
