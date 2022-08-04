import axios from "axios";

const getAllPhotos = () => axios.get("http://localhost:5001/photo");
const postPhoto = (data) => axios.post("http://localhost:5001/photo/add",data);
const deletePhoto = (id) => axios.delete("http://localhost:5001/photo/delete/"+id);

export { getAllPhotos,postPhoto,deletePhoto };
