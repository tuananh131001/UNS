import axios from "axios";

const getAllPhotos = () => axios.get("http://localhost:5001/photo");
export { getAllPhotos };
