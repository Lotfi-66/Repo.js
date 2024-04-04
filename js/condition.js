//conditions de java
console.log('conditions.js chargé !');

let blueColor = 'bleu';
let redColor = 'rouge';

//LES CONDITIONS
//IF ELSE
if (blueColor == 'bleu') {
    console.log('La couleur est bleue');

} else {
    console.log('La couleur n\'est pas bleue');
}

//IF ELSEIF ELSE

if (blueColor == 'bleu' && redColor == 'rouge') {
    console.log('Les couleurs sont bleu et rouge');
} else if (blueColor == 'bleu' || redColor == 'rouge') {
    console.log('Une des deux couleurs est bleu ou rouge');
}
else {
    console.log('La couleur n\'est pas bleue ni rouge');
}

// if(){

// }else if(){

// }else() 
//Switch
let age = 18;

switch (true) {
    case age > 0 && age <= 2:
        console.log('Bébé');
        break;
    case age > 2 && age <= 10:
        console.log('Enfant');
        break;
    case age > 10 && age <= 18:
        console.log('Adolescent');
        break;
    case age > 18 && age <= 50:
        console.log('Adulte');
        break;
    case age > 50:
        console.log('Senior');
        break;
    default:
        console.log('Age incorrect');
}