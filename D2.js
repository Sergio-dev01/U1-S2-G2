/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numb1 = 5;
const numb2 = 20;

if (numb1 > numb2) {
  console.log("Il numero maggiore è:" + numb1);
} else {
  console.log("Il numero maggiore è:" + numb2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const number = 6;

if (number != 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const divisibleNumber = 10;

if (divisibleNumber % 5 === 0) {
  console.log("Il numero è divisibile per 5 senza resto");
} else {
  console.log("Il numero non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const intNumber1 = 10;
const intNumber2 = 2;

if (intNumber1 === 8 || intNumber2 === 8) {
  //Variante con AND per avere la possibilità di trovare entrambi i numeri uguali a 8
  console.log("Uno tra i due numeri è uguale a 8");
} else if (intNumber1 + intNumber2 === 8) {
  console.log("La somma tra i due numeri è uguale a 8");
} else if (intNumber1 - intNumber2 === 8) {
  console.log("La sottrazione tra i due numeri è uguale a 8");
} else {
  console.log("Nessuno tra le opzioni sono disponibili");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const shippingCost = 10;
let totalShoppingCart = 30;

if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita");
} else {
  totalShoppingCart = totalShoppingCart + shippingCost;
  console.log("Il totale con spedizione inclusa è di:  " + totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const fridayDiscount = 0.2;
const shippingCost1 = 10;
let totalShoppingCart1 = 40;
let totalAfterDiscount = totalShoppingCart1 * (1 - fridayDiscount);

if (totalAfterDiscount > 50) {
  console.log("Hai diritto alla spedizione gratuita");
} else {
  totalAfterDiscount = totalAfterDiscount + shippingCost1;
  console.log("Il totale con spedizione inclusa è di:  " + totalAfterDiscount);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let num1 = 15;
let num2 = 56;
let num3 = 34;
let temp;

if (num1 < num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
}

if (num1 < num3) {
  let temp = num1;
  num1 = num3;
  num3 = temp;
}

if (num2 < num3) {
  let temp = num2;
  num2 = num3;
  num3 = temp;
}

console.log(num1, num2, num3);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const typeNum = 5;

if (typeof typeNum === "number") {
  console.log("Il valore è un numero.");
} else {
  console.log("Il valore NON è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const evenNum = 5;

if (evenNum % 2 === 0) {
  console.log("Il numero è pari.");
} else {
  console.log("Il numero è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arrayNum = [];
arrayNum.unshift(1);
arrayNum.push(2);
arrayNum.push(3);
arrayNum.push(4);
arrayNum.push(5);
arrayNum.push(6);
arrayNum.push(7);
arrayNum.push(8);
arrayNum.push(9);
arrayNum.push(10);

console.log(arrayNum);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arrayNum.splice(arrayNum.length - 1, 1, 100);
console.log(arrayNum);
