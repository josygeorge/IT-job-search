import mongoose from 'mongoose';

// Modelling the users schema
const userSchema = new mongoose.Schema({
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true, min: 6 },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    about: { type: String, default: '' },
    address: { type: String, default: '' },
    phone: { type: String, default: '' },
    skills: { type: [], default: [''] },
    education: { type: [], default: [''] },
    project: { type: [], default: [''] },
    experience: { type: [], default: [''] },
    jobsApplied: []
}, { timestamps: true });

const Users = new mongoose.model('Users', userSchema);
// module.exports = Users;
export default Users; ``