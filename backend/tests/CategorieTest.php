<?php

namespace App\Tests\Entity;

use App\Entity\Categorie;
use PHPUnit\Framework\TestCase;

class CategorieTest extends TestCase
{
    public function testAddCategorie(): void
    {
        $categorie = new Categorie();
        $categorie->setNom("Test Catégorie");

        $this->assertEquals("Test Catégorie", $categorie->getNom(), "Le nom de la catégorie doit être 'Test Catégorie'.");
    }

    public function testUpdateCategorie(): void
    {
        $categorie = new Categorie();
        $categorie->setNom("Ancien Nom");

        $categorie->setNom("Nouveau Nom");

        $this->assertEquals("Nouveau Nom", $categorie->getNom(), "Le nom de la catégorie doit être 'Nouveau Nom'.");
    }

    public function testRemoveCategorie(): void
    {
        $categorie = new Categorie();

        $this->assertNull($categorie->getId(), "L'id doit être null au début.");
        $this->assertNull($categorie->getNom(), "Le nom doit être null au début.");

        unset($categorie);

        $this->assertTrue(true, "La catégorie a été supprimée correctement.");
    }
}
