import express from "express";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/auth";
import tripRoutes from "./routes/trip";
import simulationRoutes from "./routes/simulation";

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(simulationRoutes);
app.use(tripRoutes);

// Servir o frontend buildado (pasta dist na raiz do repositório)
const distPath = path.join(__dirname, "../../dist");
app.use(express.static(distPath));

// Fallback SPA: qualquer rota GET não atendida acima devolve o index.html.
// OBS: Express 5 usa path-to-regexp v8, que não aceita mais o curinga "*";
// por isso o padrão de rota precisa ser uma RegExp.
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});