#!/usr/bin/env bash
set -e

# 1. Instala dependências e builda o frontend (Vite)
npm install
npm run build

# 2. Instala dependências e gera o Prisma Client no backend
cd backend
npm install
npx prisma generate
