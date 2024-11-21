// app/api/student/courses.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Student from '/models/Student';

export async function GET(req) {
  const { username } = req.headers;

  try {
    await connectToDatabase();

    const student = await Student.findOne({ username });
    if (!student) {
      return NextResponse.json({ message: 'Access denied' }, { status: 403 });
    }

    return NextResponse.json({ courses: student.courses }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}