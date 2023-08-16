-- CreateTable
CREATE TABLE "DefaultDisease" (
    "id" INTEGER NOT NULL,
    "classification" TEXT NOT NULL,
    "culture" TEXT NOT NULL,
    "scientificName" TEXT NOT NULL,
    "commonNames" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "symptoms" TEXT NOT NULL,
    "bioecology" TEXT NOT NULL,
    "control" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "DefaultDisease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefaultFungicide" (
    "id" INTEGER NOT NULL,
    "tradeMark" TEXT NOT NULL,
    "patentHolder" TEXT NOT NULL,
    "toxicologyClassification" TEXT NOT NULL,
    "ambientalClassification" TEXT NOT NULL,
    "registerNumber" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "actionMethod" TEXT NOT NULL,
    "applicationMethod" TEXT NOT NULL,
    "compatibility" TEXT NOT NULL,
    "packaging" TEXT NOT NULL,
    "activeIngredients" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "DefaultFungicide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "default_disease_fungicide" (
    "id" SERIAL NOT NULL,
    "disease_id" INTEGER NOT NULL,
    "fungicide_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "default_disease_fungicide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DefaultDiseaseToDefaultFungicide" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DefaultDiseaseToDefaultFungicide_AB_unique" ON "_DefaultDiseaseToDefaultFungicide"("A", "B");

-- CreateIndex
CREATE INDEX "_DefaultDiseaseToDefaultFungicide_B_index" ON "_DefaultDiseaseToDefaultFungicide"("B");

-- AddForeignKey
ALTER TABLE "default_disease_fungicide" ADD CONSTRAINT "default_disease_fungicide_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "DefaultDisease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "default_disease_fungicide" ADD CONSTRAINT "default_disease_fungicide_fungicide_id_fkey" FOREIGN KEY ("fungicide_id") REFERENCES "DefaultFungicide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" ADD CONSTRAINT "_DefaultDiseaseToDefaultFungicide_A_fkey" FOREIGN KEY ("A") REFERENCES "DefaultDisease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" ADD CONSTRAINT "_DefaultDiseaseToDefaultFungicide_B_fkey" FOREIGN KEY ("B") REFERENCES "DefaultFungicide"("id") ON DELETE CASCADE ON UPDATE CASCADE;
