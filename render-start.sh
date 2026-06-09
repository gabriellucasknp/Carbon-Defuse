#!/usr/bin/env bash
set -e

cd backend
npx prisma migrate deploy
npx tsx src/server.ts
