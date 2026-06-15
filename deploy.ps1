# =============================================================================
#  Deploy do Carbon Defuse direto pela CLI (Windows / PowerShell)
# -----------------------------------------------------------------------------
#  O que ele faz:
#    1. Valida o build do frontend (Vite) localmente — se quebrar, NÃO faz deploy.
#    2. Valida o Prisma Client do backend.
#    3. Faz commit das mudanças e envia para o GitHub (branch main),
#       o que dispara automaticamente o deploy no Render (autoDeploy = true).
#
#  Uso:
#    .\deploy.ps1                       # mensagem de commit padrão
#    .\deploy.ps1 "minha mensagem"      # mensagem de commit personalizada
# =============================================================================
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "==> [1/4] Instalando dependencias e validando o build do frontend..." -ForegroundColor Cyan
npm install
npm run build

Write-Host "==> [2/4] Validando o backend (Prisma Client)..." -ForegroundColor Cyan
Set-Location "$PSScriptRoot\backend"
npm install
npx prisma generate
Set-Location $PSScriptRoot

Write-Host "==> [3/4] Registrando alteracoes no git..." -ForegroundColor Cyan
git add -A
if (git diff --cached --quiet; $LASTEXITCODE -eq 0) {
    Write-Host "    Nenhuma alteracao para commitar — enviando o estado atual." -ForegroundColor Yellow
} else {
    $msg = if ($args.Count -gt 0) { $args -join " " } else { "deploy: atualizacao do Carbon Defuse" }
    git commit -m $msg
}

Write-Host "==> [4/4] Enviando para o Render (git push origin main)..." -ForegroundColor Cyan
git push origin main

Write-Host ""
Write-Host "Deploy disparado com sucesso!" -ForegroundColor Green
Write-Host "Acompanhe o progresso em: https://dashboard.render.com" -ForegroundColor Green
