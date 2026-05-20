import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

router.post("/trips", async (req, res) => {
  try {
    const {
      origem,
      destino,
      distancia,
      co2,
      combustivel,
      tempo,
      userId,
    } = req.body;

    const trip = await prisma.trip.create({
      data: {
        origem,
        destino,
        distancia,
        co2,
        combustivel,
        tempo,
        userId,
      },
    });

    res.json(trip);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/trips/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const trips = await prisma.trip.findMany({
      where: {
        userId: Number(userId),
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(trips);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;