import express from "express";
import * as categoryController from "../controllers/category";

const router = express.Router();

router.get("/all", categoryController.getCategories);
router.post("/insert", categoryController.insertCategories);
router.put("/update", categoryController.updateCategories);
router.get("/getCategory/:id", categoryController.getIdCategories);

export default router;
