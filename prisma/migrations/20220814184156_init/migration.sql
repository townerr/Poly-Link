/*
  Warnings:

  - You are about to drop the column `pageColor` on the `User` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "pageBgColor" TEXT NOT NULL,
    "pageTitle" TEXT NOT NULL,
    "pageFont" TEXT NOT NULL,
    "pageTextColor" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "name") SELECT "email", "emailVerified", "id", "image", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT,
    "textColor" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "font" TEXT NOT NULL
);
INSERT INTO "new_Link" ("bgColor", "font", "icon", "id", "text", "textColor", "url", "userId") SELECT "bgColor", "font", "icon", "id", "text", "textColor", "url", "userId" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
