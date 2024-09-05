import { Schema, model } from 'mongoose';

const availabilitySchema = new Schema({
    start: { type: Date, required: true },
    end: { type: Date, required: true }
});

export default model('Availability', availabilitySchema);
