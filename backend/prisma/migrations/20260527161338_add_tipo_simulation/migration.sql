-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Simulation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "distancia" REAL NOT NULL,
    "co2" REAL NOT NULL,
    "combustivel" REAL NOT NULL,
    "tempo" REAL NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'fisica',
    "quantidadeVeiculos" INTEGER NOT NULL DEFAULT 1,
    "veiculo" TEXT NOT NULL DEFAULT 'compact',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Simulation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Simulation" ("co2", "combustivel", "createdAt", "destino", "distancia", "id", "origem", "tempo", "userId") SELECT "co2", "combustivel", "createdAt", "destino", "distancia", "id", "origem", "tempo", "userId" FROM "Simulation";
DROP TABLE "Simulation";
ALTER TABLE "new_Simulation" RENAME TO "Simulation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
