//Boucle Javascript
console.log('boucle');
//Boucles

//BOUCLE FOR
//A besoin de 3 paramètres : initialisation, condition, incrémentation
for (i = 0; i <= 10; i++) {
    console.log('Je suis dans le passage de la boucle numéro:', i);
}

//BOUCLE WHILE
let j = 0;

while (j <= 10) {
    console.log('je suis dans le passage de boucle while numéro :', j);
    //INCRÉMENTATION
    j++;
}

//BOUCLE DO WHILE
//INITIALISATION
let k = 0;
//do while execute le code au moins une fois
do {
    console.log('je suis dans la boucle do while numéro : ', k);
    //incrémentation dans les accolades
    k++;
}
while (k <= 10);

//BOUCLE FORACH
//PERMET DE PARCOURIR UN TABLEAU:AVANTAGE PAS DE RISQUE DE BOUCLE INFINIE

//Tableau numérique
let array = [1, 7, 'toto', 45, 5, 4, 8, 9, null];

//tableau numérique
array.forEach((value, index) => {
    console.log('A l\'index:', index, 'la valeur est:', value);
})

//tableau associatif
let associatifArray = [
    { nom: 'Doe', prenom: 'John', age: 25, isClient: true },
    { nom: 'Wayne', prenom: 'Bruce', age: 35, isClient: false },
    { nom: 'Parker', prenom: 'Peter', age: 45, isClient: true },
    { nom: 'Kent', prenom: 'Clark', age: 55, isClient: true },
    { nom: 'Tarzan', prenom: 'Jane', age: 85, isClient: true }
]
// console.log(array.length >= 9);
console.log(associatifArray);

associatifArray.forEach((value) => {
    console.log('Mon nom est ', value.nom, '', value.prenom);
    console.log('J\'ai', value.age, ' ans');
    value.isClient ? console.log('Je suis client') : console.log('Je ne suis pas client');
})

