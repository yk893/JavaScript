//* =======================================
//*          ARRAY ITERATIONS
//* =======================================

//? Array iteration: bir arayın içindeki her bir elemana tek tek ulaşıp  grekli işlemlerin, karşılaştırmaların, filtlerin gibi işlemlerin yapılmasıdır

//! forEach
//! map
//! filter
//! reduce

//* =======================================
//*           FOREACH METHOD
//* =======================================
//! forEach, bir dizinin elemanlarını teker teker işlemek veya belirli bir işlemden geçirmek için oldukça kullanışlıdır.
//? 1-Void bir metottur: Herhangi bir değer döndürmez. (Yani işlemin sonucu undefined olur.)
//? 2-Diziyi değiştirmez: Orijinal dizi üzerinde değişiklik yapmaz, yalnızca her bir eleman üzerinde işlem yapar.
//? 3-Callback fonksiyonu alır: Dizinin her bir öğesi için çalıştırılacak bir fonksiyon alır.

const sayilar = [675, 89, 234, 12, 67, 34, 89];

// for (let sayi of sayilar) {
//     console.log(sayi)
// }

//! forEach ile

sayilar.forEach((x) => console.log(x)); //inline arrow function.
//! Tek satırlı işlemlerde { } gerek yoktur

const fruit = ["Elma", "Armut", "Muz", "Çilek"];

fruit.forEach((item)=>console.log(item.toUpperCase()))

let yas = [45, 78, 12, 56, 16, 17];

yas.forEach((item)=>{
    if (item>=18) {
        console.log("yetişkin")
    } else {
        console.log("Çocuk")
    }
})

yas.forEach((item)=>{
    item >=18  ? console.log("Yetişkin") : console.log("Çocuk") 
})

console.clear()
/* -------------------------------------------------------------------------- */
// fonksiyon ile kullanımının ikinci yolu

yas.forEach(yasYazdir)

function yasYazdir(x){
    console.log(x)
}

// fonksiyon ile kullanımının üçüncü yolu
yas.forEach(function (x){
    console.log(x)
})

/* -------------------------------------------------------------------------- */
//! ForEach 3 parametre alır. 1.zorunlu gibi diğerleri ihtiyaç olduğunda kullanılabilir

//? ikinci parametresi index dir.
const sebzeler = ["pırasa", "havuç", "ıspanak", "lahana", "kabak"];
sebzeler.forEach((sebze, index)=>{
    console.log(`${index + 1} numaralı sebze ${sebze}`)
})


sebzeler.forEach((item, index, arr)=> console.log(item, index, arr) )

//!--- Hayati öneme sahip bilgi ----
//! forEach return yapmaz(void function)

const numbers = [45, 243, 123, 78, 23, 56];

let kare = []

kare = numbers.forEach((num)=>num * num)
console.log(kare)

//? ÖRNEK

// 1-Sıcaklıkların Ortalamasını Hesapla
// 2- 22°C'yi aşan günlerin sayısını bul.
// 3-Sıcaklıklar arasındaki farkları hesapla. Örneğin, bir önceki gün ile bir sonraki gün arasındaki farkın mutlak değerini alarak, toplam sıcaklık farkını hesapla.

const sicakliklar = [23, 25, 22, 24, 20, 19, 18, 21, 24, 26, 22];
let toplamSicaklik = 0;
let sıcakGünler = 0;
let farkTolami = 0;

let sonuc = sicakliklar.forEach((sicaklik)=>{
    toplamSicaklik+=sicaklik
    sicaklik > 22 ? sıcakGünler++ : null
})

console.log(toplamSicaklik)

let ort = toplamSicaklik/sicakliklar.length
console.log(ort.toFixed(2))

console.log(sıcakGünler)