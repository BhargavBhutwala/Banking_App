import express from "express";
import { getAccounts, depositMoney, withdrawMoney } from "../controllers/accountController.js";
const router = express.Router();
router.get("/", getAccounts);
router.post("/deposit", depositMoney);
router.post("/withdraw", withdrawMoney);
export default router;
