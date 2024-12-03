<?php

namespace App\Controller;

use App\Entity\Categorie;
use App\Entity\Produit;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProduitController extends AbstractController
{
    #[Route('/produit/create', name: 'create-produit', methods: ['POST'])]
    public function create(Request $request, ManagerRegistry $doctrine): Response
    {
        $requestData = json_decode($request->getContent(), true);

        if (!isset($requestData['categorieId'], $requestData['nom'], $requestData['description'], $requestData['prix'], $requestData['date'])) {
            return new Response('Des données sont manquantes', Response::HTTP_BAD_REQUEST);
        }

        $entityManager = $doctrine->getManager();

        $categorie = $doctrine->getRepository(Categorie::class)->find($requestData['categorieId']);
        if (!$categorie) {
            return new Response('Catégorie introuvable', Response::HTTP_NOT_FOUND);
        }

        $produit = new Produit();
        $produit->setCategorie($categorie);
        $produit->setNom($requestData['nom']);
        $produit->setDescription($requestData['description']);
        $produit->setPrix((float)$requestData['prix']);
        $produit->setDateCreation(new \DateTime($requestData['date']));

        if ($produit->getNom() && $produit->getDescription() && $produit->getPrix() && $produit->getDateCreation()) {
            $entityManager->persist($produit);
            $entityManager->flush();
            return new Response('Produit créé avec succès', Response::HTTP_CREATED);
        }

        return new Response('Échec de la création du produit', Response::HTTP_BAD_REQUEST);
    }


    #[Route('/produit', name: 'readAll-produit')]
    public function readAll(ManagerRegistry $doctrine)
    {
        $repository = $doctrine->getRepository(Produit::class);
        $produits = $repository->findAll();

        $data = [];
        foreach ($produits as $produit) {
            $data[] = [
                "id" => $produit->getId(),
                "categorie" => $produit->getCategorie()->getNom(),
                "nom" => $produit->getNom(),
                "description" => $produit->getDescription(),
                "prix" => $produit->getPrix(),
                "date" => $produit->getDateCreation()->format('Y-m-d'),
            ];
        }
        return new JsonResponse($data);
    }

    #[Route('/produit/read/{id}', name: 'read-produit')]
    public function read(ManagerRegistry $doctrine, int $id)
    {
        $repository = $doctrine->getRepository(Produit::class);
        $produit = $repository->findOneBy(array("id" => $id));

        $data = [
            "id" => $produit->getId(),
            "categorie" => $produit->getCategorie()->getNom(),
            "nom" => $produit->getNom(),
            "description" => $produit->getDescription(),
            "prix" => $produit->getPrix(),
            "date" => $produit->getDateCreation()->format('Y-m-d'),
        ];

        return new JsonResponse($data);
    }

    #[Route('/produit/update/{id}', name: 'update-produit')]
    public function update(ManagerRegistry $doctrine, Request $request, int $id): Response
    {
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Produit::class);
        $produit = $repository->findOneBy(array("id" => $id));

        $categorie = $doctrine->getRepository(Categorie::class)->find($requestData['categorieId']);
        if (!$categorie) {
            return new Response('Catégorie introuvable', Response::HTTP_NOT_FOUND);
        }

        $produit->setCategorie($categorie);
        $produit->setNom($requestData['nom']);
        $produit->setDescription($requestData['description']);
        $produit->setPrix((float)$requestData['prix']);
        $produit->setDateCreation(new \DateTime($requestData['date']));

        if ($produit->getNom() && $produit->getDescription() && $produit->getPrix() && $produit->getDateCreation()) {
            $em = $doctrine->getManager();
            $em->persist($produit);
            $em->flush();
            return new Response('Produit modifié avec succès', Response::HTTP_OK);
        }
        return new Response('Produit non modifié', Response::HTTP_CREATED);
    }

    #[Route('/produit/delete/{id}', name: 'produit-delete')]
    public function delete(ManagerRegistry $doctrine, int $id)
    {
        $repository = $doctrine->getRepository(Produit::class);
        $produit = $repository->findOneBy(array("id" => $id));
        $em = $doctrine->getManager();
        $em->remove($produit);
        $em->flush();
        return new Response('Produit supprimé avec succès', Response::HTTP_OK);
    }
}
