# Un clavier piano

## Des sons, pour mon piano!

La première chose est d'avoir des fichiers sons.
Source : https://archive.org/details/24-piano-keys

24 sons de piano. Malheureusement je n'ai pas la note associée. 

## Algo

Utilisation d'un module `piano` qui a les propriétés suivantes :
`element` : permet d'atteindre l'élément HTML qui contient le piano.
`init` : fonction qui permet de générer les touches de clavier, d'y attacher 2 propriétés 
 - `data-note` : correspond à la clé du fichier .mp3
 - `data-key` : correspond à une touche de clavier 
`key` :  tableau qui gardera en mémoire les touches, afin de pouvoir les réutiliser
`listen` : event listener pour les touches
`play` : la fonction qui exécutera la lecture du fichier mp3 correspondant.
`keyboard` : simple tableau pour les 24 touches de clavier que nous utiliseront.
`display` : élément html permettant de donner des informations sur les touches et notes jouées.

Tout repose sur les `data-attribute` générés dynamiquement et recueillis lors du déclenchement d'events.

Un peu de style pour avoir une information visuelle lorsque la note est jouée et est terminée.