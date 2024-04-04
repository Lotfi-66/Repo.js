console.log('hello !');

/*
Par convention les nommages de variables et de fonctions se formattent en "camel case".
Commence par une minuscule, et chaque mots suivants avec une majuscule
ex: si je veux nommer une variable "nombre un" on écrit "nombreUn"
*/

let nombreUn = 5;
nombreUn = 3;

// Pour les constantes on utilise des majuscules et "_" pour séparer les mots
const NOMBRE_FIXE = 45;
// Une erreur apparaît dans la console car on n'a pas le droit de modifier une constante
// NOMBRE_FIXE = 56;

// Déclaration d'une fonction sans retour de valeur (alias procédure, routine, sub)
function displayAddition(nombreA, nombreB) {
    // "result" ne sera valable que dans la fonction
    // "let" crée cette variable dans la "portée" (alias le scope) de cette fonction
    let result = nombreA + nombreB;
    // nombreUn reste accessible ici sauf si on recrée un "nombreUn"
    // car elle fait partie du scope global
    // Par contre si dans le scope global elle a été déclaré avec "var" au lieu de "let"
    // on peut toujours y accéder en passant par "window"
    // console.log( window.nombreUn );
    console.log('Le résultat est: ', result);
}

function helloToto(name) {
    console.log('hello ' + name);
}

helloToto('Lotfi');
// console.log( result );

// Appel d'une fonction
displayAddition(5, 8);
displayAddition(8, 45);

// Fonction avec valeur de retour
function getAddition(nombreA, nombreB) {
    let nombreAIsNumber = typeof nombreA === 'number';
    let nombreBIsNumber = typeof nombreB === 'number';

    if (!nombreAIsNumber || !nombreBIsNumber) {
        throw 'Les arguments doivent être des nombres !';
    }

    let result = nombreA + nombreB;

    return result;
}

// let addition1 = getAddition( 9, 6 );
// console.log( 'Youpi ça fait : ', addition1 );

// Fonction displayAdditionV2 version améliorée de la V1
function displayAdditionV2(premierNombre, deuxiemeNombre) {
    let result;

    try {
        result = getAddition(premierNombre, deuxiemeNombre);
    }
    catch (e) {
        console.log('Une erreur s\'est produite : ', e);
        return;
    }

    console.log('Le résultat V2 est : ', result);
}

displayAdditionV2(2, 83);
//différence 
let valeur1 = 5;
let valeur2 = '5';
console.log(valeur1 === valeur2); //false
console.log(valeur1 == valeur2); //true


