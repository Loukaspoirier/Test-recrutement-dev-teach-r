<?php

namespace App\Controller;

use App\Entity\Categorie;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CategorieController extends AbstractController
{
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
}
