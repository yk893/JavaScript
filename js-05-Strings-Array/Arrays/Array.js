console.log("*********Arrays**********")


//* Dizi Tanimlama
//*-----------------------------------------------

//! 1-Square bracket ( Array Literal) yöntemi ile dizi tanımlama
//! En çok tercih edilen yöntem

const names = ["ahmet", "mehmet", "ali", "veli", 56 , true, [5, 10 ,15]]

console.log(names)
console.log(typeof names)
console.log(names.length)

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------

//? OKUMA

console.log(names[1])
console.log(names[5])
console.log(names[6][2])
console.log(names[names.length-1])
const newNames = names[names.length-1]
console.log(newNames)

//? YAZMA 

names[3] = "Can"
console.log(names)

names[4]++
console.log(names)
console.log(names[0].toUpperCase())

// names = [1,2,3,4,5,6] Asignment to constant variable.

// names.push("5")
// console.log(names)

// ! 2.Yöntem (Object Constructor)

const programinLanguage = new Array("Go", "JS" ,"Python")
console.log(programinLanguage)

const myArr = new Array(10)
console.log(myArr)

const sayilar = Array.of(4)
console.log(sayilar)

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

// programinLanguage.push("HTML")
// console.log(programinLanguage)

const cars = ["BMW","Audi","Mercedes","Skoda","Porche","Tesla"]
console.log(cars);
console.log(cars[4]);




const newCar = cars.push("Jeep")
console.log(cars);


console.log(newCar);




const deletedcar = cars.pop()
console.log(cars);

console.log(deletedcar);


const ElemanEkle =cars.unshift("Tofas")
console.log(cars);
console.log(ElemanEkle);


cars.splice(2,1,"Serce","seat","bugatti","Bugatti")
console.log(cars);

cars.splice(5,1,"Ford")
console.log(cars);

cars.splice(3,1)

console.log(cars);

cars.splice(3,0,"Fiat")

console.log(cars);


// cars.splice(3)
// console.log(cars);

console.clear()




console.log(cars);
console.log(cars.reverse());
console.log(cars[2]);


/* -------------------------------------------------------------------------- */
//!                                    SORT                                   */
/* -------------------------------------------------------------------------- */
//! sort metodu diziyi iterasyona ugratir ve ascii karaktere göre sıralama yapar.
//! Dolayısıyla string'le doğru şekilde sıralama yapabilir.

cars.sort()
console.log(cars)

// Sort metodu sayılarıda stringmiş gibi bir sıralamaya sokar. Bu nedenle sayısal oalrak hatalı bir sıralama oluşur. 

const numbers1=[3,556,243,133,6,78,98]
console.log(numbers1);

numbers1.sort()
console.log(numbers1);

// Kucukten buyuge siralama//

numbers1.sort((a,b)=>a-b)
console.log(numbers1);

//Buyukten kucuge siralama//

numbers1.sort((a,b)=>b-a)
console.log(numbers1);


