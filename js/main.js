$(document).ready(function() {
    
// esercizio 1
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

var zucchine = [
    {
        'tipo': 'tipo1',
        'peso': 10,
        'lunghezza': 16
    },
    {
        'tipo': 'tipo2',
        'peso': 20,
        'lunghezza': 14
    },
    {
        'tipo': 'tipo3',
        'peso': 10,
        'lunghezza': 15
    },
    {
        'tipo': 'tipo4',
        'peso': 30,
        'lunghezza': 18
    },
    {
        'tipo': 'tipo5',
        'peso': 5,
        'lunghezza': 12
    },
    {
        'tipo': 'tipo6',
        'peso': 10,
        'lunghezza': 25
    },
    {
        'tipo': 'tipo7',
        'peso': 10,
        'lunghezza': 20
    },
    {
        'tipo': 'tipo8',
        'peso': 5,
        'lunghezza': 8
    },
    {
        'tipo': 'tipo9',
        'peso': 20,
        'lunghezza': 5
    },
    {
        'tipo': 'tipo10',
        'peso': 10,
        'lunghezza': 10
    }
];

// Calcola quanto pesano tutte le zucchine.

var pesoTot = 0;
for (var i = 0; i < zucchine.length; i++) {
    pesoTot += zucchine[i].peso;
}
console.log('peso totale: ' + pesoTot);

// /esercizio 1

// esercizio 2
// Crea 10 oggetti che rappresentano una zucchina (sfrutto i 10 oggetti contenuti nell'array precedente)
// Dividi in due array separati le zucchine che misurano meno o più di 15cm

var under15 = [];
var overEqual15 = [];
for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        under15.push(zucchine[i]);
    }
    else {
        overEqual15.push(zucchine[i]);
    }
}

var pesoUnder = 0;
for (var i = 0; i < under15.length; i++) {
    pesoUnder += under15[i].peso;
}

var pesoOver = 0;
for (var i = 0; i < overEqual15.length; i++) {
    pesoOver += overEqual15[i].peso;
}

// Infine stampa separatamente quanto pesano i due gruppi di zucchine

console.log(under15);
console.log('peso zucchine piccole: ' + pesoUnder);

console.log(overEqual15)
console.log('peso zucchine grandi: ' + pesoOver);

// /esercizio 2

// esercizio 3
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

var userString = prompt('scrivi una stringa da girare');
var newString = '';

for (var i = 0; i < userString.length; i++) {
    newString += userString[userString.length - 1 - i];
}
console.log(newString);

// /esercizio 3

// esercizi 12 marzo
console.log('DA QUI ESERCIZI DEL 12 MARZO');

// esercizio 1
console.log('DA QUI ESERCIZIO 1');
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
var listaNomi = ['Noemi','Laura','Marta','Yumi','Federica','Michela'];
var listaCognomi = ['Rea','Dionisi','Prudentino','Shikata','Manograssi','Piras'];

var falsiInvitati = [];
for (var i = 0; i < 3; i++) {
    indNome = Math.floor(Math.random() * listaNomi.length); /* nb: listaNomi e listaCognomi potrebbero avere tranquillamente lunghezze diverse come si vede da queste due righe */
    indCognome = Math.floor(Math.random() * listaCognomi.length);
    falsiInvitati.push({
        'nome': listaNomi[indNome],
        'cognome': listaCognomi[indCognome]
    });
}
console.log('falsi invitati: ');
console.log(falsiInvitati);

// /esercizio 1

// esercizio 2
console.log('DA QUI ESERCIZIO 2');
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// anche se non è necessario, per creare l'array faccio uso di una funzione che avevo già elaborato per esercizi precedenti, che si trova fuori dal document ready
var numInt = nRandMinToMax(10,0,50);
console.log('numeri: ' + numInt);
var sum = 0;

for (var i = 1; i < numInt.length; i = i + 2) {
    sum += numInt[i];
}
console.log('somma posizioni dispari: ' + sum);

// /esercizio 2

// esercizio 3
console.log('DA QUI ESERCIZIO 3');
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.
var arr1 = nRandMinToMax(nRandMinToMax(1,1,10),1,50);
var l1 = arr1.length;
console.log('primo array: ' + arr1);

var arr2 = nRandMinToMax(nRandMinToMax(1,1,10),1,50);
var l2 = arr2.length;
console.log('secondo array: ' + arr2);

if (l1 == l2) {
    alert('riprovare perchè sono stati generati due array di stessa lunghezza nell\'esercizio 3');
}
else {
    while (l1 > l2) {
        arr2.push(nRandMinToMax(1,1,50));
        l2 = arr2.length;
    }
    while (l1 < l2) {
        arr1.push(nRandMinToMax(1,1,50));
        l1 = arr1.length;
    }
}
console.log('nuovo primo array: ' + arr1);
console.log('nuovo secondo array: ' + arr2);

// /esercizio 3

// esercizio 4
console.log('DA QUI ESERCIZIO 4');
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
var ar1 = nRandMinToMax(10,1,50);
console.log('array1: ' + ar1);
var ar2 = ['a','b','c','d','e','f','g','h','i','j'];
console.log('array2: ' + ar2);

function mix(array1,array2) {
    var array3 = [];
    var k = 0;
    for (var i = 0; i < array1.length; i++) {
        array3[k] = array1[i];
        array3[k + 1] = array2[i];
        k = k + 2;
    }
    return array3;
}

console.log('array3: ' + mix(ar1,ar2));

// /esercizio 4

// esercizio 5
console.log('DA QUI ESERCIZIO 5');
// Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
function arrBetweenAB(arr,a,b) {
    if (a < b && b < arr.length) {
        var newArr = [];
        for (var i = 0; i < b - a + 1; i++) {
            newArr[i] = arr[a + i];
        }
        return newArr;
    }
    else {
        alert('Deve essere a < b e b < arr.length');
    }
}

// test
arrTest = nRandMinToMax(10,1,50);
aTest = nRandMinToMax(1,0,arrTest.length / 2)[0]; /* un indice compreso nella prima metà dell'array. devo specificare [0] perchè nrandmintomax genera sempre array */
bTest = nRandMinToMax(1,(arrTest.length / 2) + 1,arrTest.length - 1)[0]; /* un indice compreso nella ssconda metà dell'array */

console.log ('array: ' + arrTest);
console.log('a: ' + aTest + ', b: ' + bTest);
console.log('array tra a e b: ' + arrBetweenAB(arrTest,aTest,bTest));

// /esercizio 5

});

// utilities
function nRandMinToMax(n,min,max) {

    var array = [];

    if (max - min + 1 >= n) {
        for (var i = 0; i < n; i++) {
            array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
            while (array.indexOf(array[i]) != -1 && array.indexOf(array[i]) < i) { /* per assicurarsi che siano tutti diversi */
                array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }
    }
    else if (max - min + 1 < n) {
        alert('impossibile generare numeri diversi tra loro');
    }

    return array;

}

