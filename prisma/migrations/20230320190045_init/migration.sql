/*
  Warnings:

  - You are about to drop the column `title` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `SubTask` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Task` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Board` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `SubTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Board_title_key";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SubTask" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Board_name_key" ON "Board"("name");
