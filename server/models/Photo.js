import mongoose from "mongoose";

const PhotoEle = new mongoose.Schema(
  {
    name: String,
    url: String,
  },
  { timestamps: true }
);
export const Photo = mongoose.model("Photo", PhotoEle);
