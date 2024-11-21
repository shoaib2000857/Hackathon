// app/api/notes/[course]/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Note from '/models/Note';
import Student from '/models/Student';

export async function GET(req, { params }) {
  const { course } = params;
  const { username } = req.headers; // Assume username is passed in headers

  try {
    await connectToDatabase();

    const student = await Student.findOne({ username });
    if (!student || !student.courses.includes(course)) {
      return NextResponse.json({ message: 'Access denied' }, { status: 403 });
    }

    const notes = await Note.find({ course });

    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}