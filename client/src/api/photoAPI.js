import axios from "axios";
const HOST = import.meta.env.VITE_URL;
const getAllPhotos = () => axios.get(HOST + "/photo");
const getPhotoByName = (data) => axios.post(HOST + "/photo/name", data);
const postPhoto = (data) => axios.post(HOST + "/photo/add", data);
const deletePhoto = (id) => axios.delete(HOST + "/photo/delete/" + id);

export { getAllPhotos, postPhoto, deletePhoto, getPhotoByName };
