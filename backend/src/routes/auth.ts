import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { prisma } from "../lib/prisma";

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || "taggy_secret_dev";


// CADASTRO
router.post("/register", async (req, res) => {
  const { nome, email, senha, tipo } = req.body;

  const existe = await prisma.user.findUnique({
    where: { email }
  });

  if (existe) {
    return res.status(400).json({
      error: "Usuário já existe"
    });
  }

  const senhaHash = await bcrypt.hash(senha, 10);

  const user = await prisma.user.create({
    data: {
      nome,
      email,
      senha: senhaHash,
      tipo
    }
  });

  return res.json(user);
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(400).json({
        error: "Usuário não encontrado"
      });
    }

    const senhaCorreta = await bcrypt.compare(
      senha,
      user.senha
    );

    if (!senhaCorreta) {
      return res.status(400).json({
        error: "Senha incorreta"
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        tipo: user.tipo
      },
      JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    return res.json({
      token,
      user
    });

  } catch (error) {
    console.error("ERRO LOGIN:", error);

    return res.status(500).json({
      error: "Erro interno"
    });
  }
});
export default router;