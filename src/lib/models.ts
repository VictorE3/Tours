import mongoose from "mongoose";

const { Schema } = mongoose;

const tourSchema = new Schema({
  img: String,
  name: String,
  info: String,
});

export const Tour = mongoose.models?.Tour || mongoose.model("Tour", tourSchema);
