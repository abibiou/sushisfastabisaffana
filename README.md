# SushiFast

## Présentation du projet

Le projet **SushiFast** consiste à développer une application web en React permettant à un restaurant de sushis de présenter l'ensemble de ses menus à ses clients. L'application affiche les menus proposés, leurs caractéristiques ainsi que des informations détaillées. Les données utilisées sont fournies via un fichier JSON (`boxes.json`) mis à disposition sur e-learning.

---

## Objectifs pédagogiques

* Manipuler React avec Vite
* Exploiter des données issues d'un fichier JSON
* Mettre en place un routage avec React Router
* Structurer une application en composants
* Utiliser un framework CSS (Bootstrap)

---

## Pages implémentées

L'application est composée de **6 onglets/pages**.

### 1. Accueil

C'est l'affichage de tous les menus. Les informations visibles sont :

* Nom du menu
* Nombre de pièces d'un menu
* Image du menu
* Prix du menu

Lorsqu'on clique sur un menu, l'on est redirigé vers une page de détail afin de consulter les aliments qui le composent.

### 2. Nos saveurs

C'est la présentation des saveurs associées à chaque menu.

### 3. Avocat ou coriandre

C'est la liste des menus contenant comme saveurs :

* Avocat
* ou
* Coriandre

### 4. California Saumon Avocat

C'est la liste des menus ne contenant pas l'aliment "California Saumon Avocat".

### 5. Menu pièces inf à 13

C'est le calcul du prix total et l'affichage des menus ayant moins de 13 pièces.

### 6. Menu cher ou non

C'est là qu'on retrouve le menu le plus cher, et le menu le moins cher.

---

## Auteurs

**Abi VIGNESWARAN** & **Saffana SALAOUDINE**

*Projet réalisé dans le cadre du TP noté React – R504*
