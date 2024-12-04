<?php

namespace App\Controller;

use App\Entity\Categorie;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CategorieController extends AbstractController
{
    // permet de créer une nouvelle catégorie
    #[Route('/categorie/create', name: 'create-categorie', methods: ['POST', 'GET'])]
    public function create(Request $request, ManagerRegistry $doctrine): Response
    {
        $requestData = json_decode($request->getContent(), true);

        if (!isset($requestData['nom'])) {
            return new Response('Des données sont manquantes', Response::HTTP_BAD_REQUEST);
        }
        $categorie = new Categorie();
        $categorie->setNom($requestData['nom']);

        if ($categorie->getNom()) {
            $em = $doctrine->getManager();
            $em->persist($categorie);
            $em->flush();
            return new Response('Catégorie créée avec succès', Response::HTTP_CREATED);
        }
        return new Response('Catégorie créée avec succès', Response::HTTP_CREATED);
    }

    // permet de lire toutes les catégories sous format Json
    #[Route('/categorie', name: 'readAll-categorie')]
    public function readAll(ManagerRegistry $doctrine)
    {
        $repository = $doctrine->getRepository(Categorie::class);
        $categories = $repository->findAll();

        $data = [];
        foreach ($categories as $categorie) {
            $data[] = [
                "id" => $categorie->getId(),
                "nom" => $categorie->getNom(),
            ];
        }
        return new JsonResponse($data);
    }

    // Permet de lire seulement une catégorie grâce à l'ID toujours sous format Json
    #[Route('/categorie/read/{id}', name: 'read-categorie')]
    public function read(ManagerRegistry $doctrine, int $id)
    {
        $repository = $doctrine->getRepository(Categorie::class);
        $categorie = $repository->findOneBy(array("id" => $id));

        $data = [
            "id" => $categorie->getId(),
            "nom" => $categorie->getNom(),
        ];

        return new JsonResponse($data);
    }

    // Permet de modifier une catégorie avec l'ID
    #[Route('/categorie/update/{id}', name: 'update-categorie')]
    public function update(ManagerRegistry $doctrine, Request $request, int $id): Response
    {
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Categorie::class);
        $categorie = $repository->findOneBy(array("id" => $id));

        $categorie->setNom($requestData['nom']);

        if ($categorie->getNom()) {
            $em = $doctrine->getManager();
            $em->persist($categorie);
            $em->flush();
            return new Response('Catégorie modifiée avec succès', Response::HTTP_OK);
        }
        return new Response('Catégorie non modifiée', Response::HTTP_CREATED);
    }

    // Permet de supprimer une catégorie avec l'ID
    #[Route('/categorie/delete/{id}', name: 'categorie-delete')]
    public function delete(ManagerRegistry $doctrine, int $id)
    {
        $repository = $doctrine->getRepository(Categorie::class);
        $categorie = $repository->findOneBy(array("id" => $id));
        $em = $doctrine->getManager();
        $em->remove($categorie);
        $em->flush();
        return new Response('Catégorie supprimée avec succès', Response::HTTP_OK);
    }
}
