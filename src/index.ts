import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Mercaderes Backend funcionando");
});

app.get("/api/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    app: "Mercaderes Backend",
    version: "0.1.0",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor de Mercaderes funcionando en http://localhost:${PORT}`);
});