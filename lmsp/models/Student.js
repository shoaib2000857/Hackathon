// models/Student.js
import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  courses: [{ type: String }],
});

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);