import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import tripRoutes from "./routes/trip";
import simulationRoutes from "./routes/simulation";
const app = express();

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(simulationRoutes);
app.use(tripRoutes);


app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});