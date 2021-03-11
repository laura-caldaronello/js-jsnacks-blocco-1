$(document).ready(function() {

// esercizio 1

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

var pesoTot = 0;
for (var i = 0; i < zucchine.length; i++) {
    pesoTot += zucchine[i].peso;
}
console.log('peso totale: ' + pesoTot);

// /esercizio 1

// esercizio 2

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
console.log(under15);
console.log('peso zucchine piccole: ' + pesoUnder);

var pesoOver = 0;
for (var i = 0; i < overEqual15.length; i++) {
    pesoOver += overEqual15[i].peso;
}
console.log(overEqual15)
console.log('peso zucchine grandi: ' + pesoOver);

// /esercizio 2

// esercizio 3

var userString = prompt('scrivi una stringa da girare');
var newString = [];

for (var i = 0; i < userString.length; i++) {
    newString[i] = userString[userString.length - 1 - i];
}
newString = String(newString);
newString = newString.replace(/,/g,'');
console.log(newString);

// /esercizio 3

});

