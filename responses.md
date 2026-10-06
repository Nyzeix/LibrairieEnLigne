#### Q1. Le texte "Hello, pleine-page" vient de quelle ligne de app.ts ?
R1. Ligne 11:
```ts
export class App {
	protected readonly title = signal('pleine-page'); // <- Ici
}
```

#### Q2. Sous l'en-tête, la page est vide. Pourtant `<router-outlet />` est bien dans app.html. Ouvrez app.routes.ts : pourquoi rien ne s'affiche ?
R2. router-outlet est vide car rien ne lui est associé.

#### Q3. Le texte "Hello, pleine-page" a disparu. Quel fichier le contenait ?
R3. Le texte a disparu car nous avons éditer le fichier, qui a remplacer l'affichage.

#### Q4. Réponse de Q2 : qu'est-ce qui a changé dans `app.routes.ts` pour que le catalogue apparaisse à la place réservée ?
R4. Nous avons changé l'affichage qui était associé à cette route (enfin, nous en avons surtout ajouté un), donc Angular affiche ce qu'on a écrit.

#### Q5. Ajoutez un neuvième livre dans `livres.ts` sans toucher au HTML. Que se passe-t-il à l'écran, et pourquoi ? Retirez-le ensuite.
R5. Comme l'affichage dans le fichier HTML est fait à partir d'une boucle `for`, ajouter un livre le fait s'afficher directement à l'écran.

#### Q6. Le compteur "2 livre(s)" se met à jour sans que vous ayez écrit une ligne pour lui. Quelle déclaration de `catalogue.ts` s'en charge ?
R6. Dans le fichier `catalogue.html`, il y a une mention de `resultat().length`. En fait, dans `catalogue.ts`, les livres filtrés sont écrits dans la variable `resultat`, puis dans l'affichage, on affiche la taille de cette variable, donc le nombre de livres correspondants qu'elle contient.

#### Q7. Tapez FERRAND en majuscules. Le résultat est le même : quelle partie du code le permet ?
R7. `toLowerCase()`

#### Q8. Retirez withComponentInputBinding() de app.config.ts et rechargez /livre/1000 . Que voyez-vous dans la console du navigateur (F12) ?
R8. app_fiche ne s'affiche plus, et la page devient vide. la console du navigateur indique un root vide.

#### Q9. Quand seul le paramètre :id change, Angular garde le même objet Fiche et lui donne la nouvelle valeur de id . Que devient alors ajoute , et pourquoi le bouton reste gris ?
R9. La valeur id change, mais Angular garde le même objet. `ajoute`, lui, est associé à l'objet. Sa valeur reste donc la même, même si l'on change de livre, puisque l'objet n'est pas détruit/récréer.

#### Q10. Rechargez la page avec F5 sur ce même livre. Le bouton redevient bleu : expliquez pourquoi avec votre réponse à Q9.
R10. Cette fois, la page est rechargée, don l'objet est recréer à partir de zéro. La valeur de `ajoute` est donc réinitialiser.

#### Q11. Le panier est perdu au rechargement (F5). Où faudrait-il le garder pour qu'il survive ?
R11. Il faut le garder en backend.



### Notes
J'ai exporté un composant "Book-card" pour pouvoir l'utiliser dans la page Catalogue et la page d'un livre, dans la section recommandation. Ça rend l'ensemble plus joli et cohérent.