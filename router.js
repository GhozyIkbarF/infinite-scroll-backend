import express from "express";
const router = express.Router();
import { getPhoto } from "./controller.js";

router.get('/:page', getPhoto);


export default router;