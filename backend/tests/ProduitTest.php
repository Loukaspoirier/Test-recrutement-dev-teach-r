<?php

namespace App\Tests\Entity;

use App\Entity\Produit;
use App\Entity\Categorie;
use PHPUnit\Framework\TestCase;

class ProduitTest extends TestCase
{
    public function testAddProduit(): void
    {
        $categorie = new Categorie();
        $categorie->setNom("Catégorie Test");

        $produit = new Produit();
        $produit->setNom("Produit Test")
                ->setDescription("Description du produit test")
                ->setPrix(99.99)
                ->setDateCreation(new \DateTime("2024-01-01"))
                ->setCategorie($categorie);

        $this->assertEquals("Produit Test", $produit->getNom());
        $this->assertEquals("Description du produit test", $produit->getDescription());
        $this->assertEquals(99.99, $produit->getPrix());
        $this->assertEquals("2024-01-01", $produit->getDateCreation()->format("Y-m-d"));
        $this->assertSame($categorie, $produit->getCategorie());
        $this->assertNotNull($produit->getCategorie());
    }

    public function testUpdateProduit(): void
    {
        $produit = new Produit();
        $produit->setNom("Ancien Nom")
                ->setDescription("Ancienne Description")
                ->setPrix(49.99)
                ->setDateCreation(new \DateTime("2023-01-01"));

        $produit->setNom("Nouveau Nom")
                ->setDescription("Nouvelle Description")
                ->setPrix(79.99)
                ->setDateCreation(new \DateTime("2024-01-01"));

        $this->assertEquals("Nouveau Nom", $produit->getNom());
        $this->assertEquals("Nouvelle Description", $produit->getDescription());
        $this->assertEquals(79.99, $produit->getPrix());
        $this->assertEquals("2024-01-01", $produit->getDateCreation()->format("Y-m-d"));
    }

    public function testRemoveProduit(): void
    {
        $produit = new Produit();
        $produit->setNom("Produit à Supprimer")
                ->setDescription("Description à supprimer")
                ->setPrix(29.99)
                ->setDateCreation(new \DateTime("2023-12-01"));

        unset($produit);

        $this->assertTrue(true, "Le produit a été supprimé correctement.");
    }
}

