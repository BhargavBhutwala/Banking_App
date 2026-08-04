import express from "express";
import accountRoutes from "./routes/accountRoutes.js";
const app = express();
app.use(express.json());
app.use("/accounts", accountRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
