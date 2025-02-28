/* ---------------------------------- */
//!             OPERATORS             */
/* ---------------------------------- */
//! Aritmatik Operatorler

let a = 10;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Öncelik sıralaması-  işlem önceliği
// üs, parantez içi, çarpma/bölme, çıkarma/toplama

// Dakika olarak verilen ağaşıdaki deger kaç saat kaç dakikaya denk gelmektedir

let sure = 377;
let saat = Math.floor(sure / 60);
console.log(saat);
let dakika = sure % 60;
console.log(dakika);
console.log(`${saat}:${dakika}`);

// INCREMENT ++  - DECREMENT --

let x = 10;
// x ++ önce yazdır sonra arttır
// ++ x önce arttır sonra yazdır
console.log("INCREMENT");
console.log(++x);
console.log("DECREMENT");
// x-- önce yazdır sonra azalt
// --x önce azalt sonra yazdır
//x=x-1
console.log(--x);

console.clear();

// ASSIGMENT OPERATORS

let t = 7;
let z = 6;
console.log(t);
t = z;
console.log(t);

// t = t+z
// t = t-z
console.log(t);
t += z; //! t = t+z
console.log(t);
t -= z; //! t = t-z
console.log(t);
t *= 3; //! t = t*z
console.log(t);
t /= 2; //! t = t/z
console.log(t);
t %= 4; //! t = t%z
console.log(t);
t++;
t **= 6; //! t = t**z
console.log(t);

/* ---------------------------------- */
/*        COMPARISON OPERATORS        */
/* ---------------------------------- */
//Karşılaştırma opretörleri bize Boolean bir değer döndürür.

let c = 2;
let d = "2";
console.log(typeof c);
console.log(typeof d);
console.log(c == d); // == eşittir tipine bakmadan sadece değerler aynıysa eşit olarak kabul eder.
console.log(c === d); // === hem veri tipini kontrol eder hemde değeri kontrol eder.

// otomatik tip dönüşümü - Type conversion
// + hariç diğerlerinde bir string ve number ifade işleme alınıyosa js insiyatif kullanır ve işlemi gerçekleştirir.

console.log(c - d);

console.log(c != d); // false sonucu vererek eşittir demiş oluyor:
//eşit değildir =>false yani eşittir sonucunu veriyor. ikisi değer olarak eşit olduğu için eşit değildir kontrolünde (false) yani eşittir olarak veriyor. Tiplerine bakmadan kontrol ediyor
console.log(c !== d); // 2="2" eşit değil değil mi, evet bunlar eşit değil.

/*-----------------------------------------------------------*/

console.log(5 > 4);

console.log(5 < 4);

console.log(7 >= 17);
console.log(7 <= 17);

/*-----------------------------------------------------------*/

console.clear();

// AND operatoru &&
// mukemmelliyetcidir -hersey true olmali- bir tane false gordugu anda orada islem biter.

console.log(Boolean(""));

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(5));
console.log(Boolean(""));
console.log(Boolean(NaN));

console.log(true && true && true && true && true && 5);
console.log(true && true && 0 && true && true && 5);

console.log("elma" && "armut" && "muz" && NaN && "cilek");

let f = "elma" && "armut" && "muz" && 0 && "cilek";

console.log(typeof f);
/*-----------------------------------------------------------*/

// OR operatoru
// Hersey false olsa bile bir tane bile true bir deger varsa true doner.


console.log(false || false || 1 || false || false );
console.log(-0 || "" || 0 || undefined || NaN );



