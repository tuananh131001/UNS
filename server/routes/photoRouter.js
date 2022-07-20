import express from "express";
import { postPhoto,getPhoto,deletePhoto } from "../controllers/photoController.js";
const router = express.Router();
router.route("/").get(getPhoto)

router.route("/add").post(postPhoto)
router.route("/delete/:id").delete(deletePhoto)
export default router