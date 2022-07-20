import { Photo } from "../models/Photo.js";

// Post photo model to server
export const postPhoto =  (req, res) => {
  const photo = new Photo(req.body)
  try {
    const newPhoto = photo.save();
    res.status(200).json(newPhoto);
  } catch(err) {
    res.status(500).json({message: err.message});
    
  }
}

// Return all photos in the db
export const getPhoto = async (req,res) =>{
  try{
    const photos  = await Photo.find()
    res.status(200).json(photos)
  } catch(err){
    res.status(500).json({message: err.message});

  }
}
// Function delete Photo
export const deletePhoto = async (req,res) =>{
  const photos  = await Photo.findById(req.params.id)

  try{
    const photo  = photos.delete();
    res.status(200).send("Sucess")
  } catch(err){
    res.status(500).json({message: err.message});

  }
}

