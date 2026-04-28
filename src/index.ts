import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import merchantRoutes from "./routes/merchant.routes";
import merchantQualityRoutes from "./routes/merchantQuality.routes";
import shopTypeRoutes from "./routes/shopType.routes";
import itemRoutes from "./routes/item.routes";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/merchants", merchantRoutes);
app.use("/api/merchant-qualities", merchantQualityRoutes);
app.use("/api/shop-types", shopTypeRoutes);
app.use("/api/items", itemRoutes);


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