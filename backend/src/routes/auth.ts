import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { prisma } from "../lib/prisma";

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || "taggy_secret_dev";

function gerarToken(user: { id: number; tipo: string }) {
  return jwt.sign(
    { id: user.id, tipo: user.tipo },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
}

// Remove a senha (hash) antes de devolver o usuário ao cliente.
function semSenha(user: any) {
  const { senha, ...rest } = user;
  return rest;
}

// CADASTRO
router.post("/register", async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({
        error: "Preencha nome, e-mail e senha"
      });
    }

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
        tipo: tipo || "fisica"
      }
    });

    const token = gerarToken(user);

    // Já devolve o token para o usuário entrar autenticado após o cadastro.
    return res.json({ token, user: semSenha(user) });
  } catch (error) {
    console.error("ERRO REGISTER:", error);

    return res.status(500).json({
      error: "Erro ao cadastrar"
    });
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        error: "Preencha e-mail e senha"
      });
    }

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

    const token = gerarToken(user);

    return res.json({
      token,
      user: semSenha(user)
    });

  } catch (error) {
    console.error("ERRO LOGIN:", error);

    return res.status(500).json({
      error: "Erro interno"
    });
  }
});
export default router;
