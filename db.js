import mongoose from "mongoose";

const DB_URL = process.env.DATABASE_URL;

export default () =>
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
