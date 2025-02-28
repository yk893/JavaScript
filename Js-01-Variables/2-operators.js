// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const kola=50

const cips=60

const cikolata=35

let toplam=kola+cips+cikolata

console.log(toplam);

//! bir arttir

toplam=toplam+1
console.log(toplam);

toplam++

console.log(toplam);

//! 10 arttir
toplam+=10

console.log(toplam);

//! + operatoru stringlerde birlestirme yapar (concatination) 

const ad="joseph"

const soyad="bilir"

console.log("adim ve soyadim " + ad + " " +soyad);

console.log(`adim ve soyadim ${ad}       ${soyad}`);

// arttirma azaltma

let a=5

console.log("ilk",a++);
console.log("ikinci", a); //6

let b=a++
console.log("b:" ,b); //6
console.log("a:" , a); //7

let c=10

console.log(++c); //11


let e=45

console.log(e--);
console.log(e);
console.log(--e);


//  e yi 5 arttirir

// e nin 5 katini gor

e*=5
console.log(e);

// carpma ve us alma

const pi=3.14

const yaricap=5

const alan=pi*yaricap**2
console.log(alan);

















