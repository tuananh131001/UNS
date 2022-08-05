import { Photo } from "../models/Photo.js";

// Post photo model to server
export const postPhoto = (req, res) => {
  const photo = new Photo(req.body);
  try {
    const newPhoto = photo.save();
    console.log(newPhoto.createdAt); // 2022-02-26T16:37:48.244Z
    res.status(200).json(newPhoto);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Return all photos in the db
export const getPhoto = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.status(200).json(photos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Search  photos by nakme in the db
export const getPhotoByName = async (req, res) => {
  try {
    let photos;
    let name = req.body.name;
    if (name == "") {
      photos = await Photo.find();
    } else {
      photos = await Photo.find({
        name: {
          $regex: `${name}`,
          $options: "i",
        },
      });
    }
    console.log(photos)
    if (photos != null) {
      res.status(200).send(photos);
    }
  } catch (error) {
    res.status(500).send("Internal server");
  }
};
// Function delete Photo
export const deletePhoto = async (req, res) => {
  const photos = await Photo.findById(req.params.id);

  try {
    const photo = photos.delete();
    res.status(200).send("Sucess");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
