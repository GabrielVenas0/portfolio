import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.routes";

dotenv.config();

const app: Application = express();
const APP_FRONTEND_URL = process.env.APP_FRONTEND_URL;
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: [`${APP_FRONTEND_URL}`],
  })
);
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio Backend is running");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
