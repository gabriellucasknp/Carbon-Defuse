import { Router } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";

const router = Router();

const JWT_SECRET = "taggy_secret";

router.post("/simulation", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "Token não enviado"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded: any = jwt.verify(token, JWT_SECRET);

    const {
      origem,
      destino,
      distancia,
      co2,
      combustivel,
      tempo,
      tipo,
      veiculo,
      quantidadeVeiculos,
    } = req.body;

    const simulation = await prisma.simulation.create({
      data: {
        origem,
        destino,
        distancia,
        co2,
        combustivel,
        tempo,
    
        tipo,
        veiculo,
        quantidadeVeiculos,
    
        userId: decoded.id,
      },
    });

    return res.json(simulation);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: "Erro ao salvar"
    });
  }
});
router.get("/simulation", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "Token não enviado"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded: any = jwt.verify(token, JWT_SECRET);

    const simulations = await prisma.simulation.findMany({
      where: {
        userId: decoded.id
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return res.json(simulations);

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: "Erro ao buscar simulações"
    });
  }
});
export default router;