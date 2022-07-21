import axios from "axios";

const getAllPhotos = () => axios.get("http://localhost:5001/photo");
const postPhoto = (data) => axios.post("http://localhost:5001/photo/add",data);

export { getAllPhotos,postPhoto };
