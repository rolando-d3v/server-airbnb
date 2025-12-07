-- CreateTable
CREATE TABLE "user" (
    "id_user" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "role" (
    "id_role" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id_role")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
