# Profondeur interactive CLAVIS

## Objectif
Conserver exactement la structure, la palette et la typographie actuelles tout en ajoutant une profondeur 3D et un verre plus crédible.

## Mise en œuvre
- Agrandir légèrement le cartouche CLAVIS dans l’en-tête sans modifier sa composition.
- Ajouter derrière le contenu d’accueil une clé abstraite en verre, composée d’un anneau et d’une tige 3D, avec une rotation lente et un éclairage doux adapté à la palette existante.
- Transformer les trois cartes d’infrastructure en vrai verre translucide, puis placer des lueurs bleu CLAVIS derrière elles pour rendre la transparence et la profondeur visibles.
- Rendre chaque carte accessible au clic et au clavier.
- Créer une grande fenêtre Liquid Glass dédiée à chaque infrastructure, avec données illustratives, icônes animées et bouton de transition vers la demande d’audit.
- Faire entrer les trois lignes de doctrine une à une depuis la gauche au défilement.
- Respecter les préférences de réduction des animations et vérifier le rendu sur ordinateur et mobile.

## Détails techniques
- React Three Fiber et Drei pour la scène 3D, montée uniquement dans le navigateur afin de préserver le rendu initial de la page.
- Matériau physique transmisif avec `transmission: 1`, `roughness: 0.1`, `thickness: 2` et `ior: 1.5`.
- Motion pour les fenêtres, les icônes et les entrées séquencées.
- Aucun changement de contenu, de navigation, de couleurs ou de typographie hors des quatre demandes.
