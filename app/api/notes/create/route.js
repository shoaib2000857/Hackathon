// app/api/notes/create/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Note from '/models/Note';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ dest: '/tmp' });

export async function POST(req) {
  const { title, content, course, uploadedBy } = req.body;

  try {
    await connectToDatabase();

    let fileUrl = '';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      fileUrl = result.secure_url;
    }

    const note = new Note({
      title,
      content,
      course,
      uploadedBy,
      fileUrl,
    });

    await note.save();

    return NextResponse.json({ message: 'Note created' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default upload.single('file')(POST);