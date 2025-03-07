// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları)

/* -------------------------------------------------------------------------- */
// recursive Function
// IIFE (Immediately Invoked Function Expresion)
// Callback Function

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır


//! * --------Function-Declaration----------------------------*/
// /JavaScript'te function declaration (fonksiyon bildirimi), bir fonksiyonun ismini ve içeriğini önceden belirleyerek tanımlamanın temel yoludur.
// Function declaration, function anahtar kelimesi kullanılarak yapılır 
//? Bir fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.


function yazdir(){
    console.log("merhaba nasilsiniz");
    
}

yazdir();

// Hoisting : yukarı kaldırma 
//! sadece function declerationda hoisting yapılıyor
// Hoisting: Function declaration ile tanımlanan fonksiyonlar, JavaScript tarafından kodun en başına "yükseltilir" (hoist edilir), bu nedenle fonksiyon tanımlanmadan önce bile çağrılabilir.


topla()

function topla(){
    console.log(25+30);
    
}


console.clear()

//? Parametreli fonksiyonlar
// Parametreli fonksiyonlar, belirli girdilerle işlem yapabilen fonksiyonlardır. 
//?Parametreler, fonksiyon tanımlanırken parantez içinde belirtilir ve fonksiyon çağrıldığında değerler gönderilerek (argüman olarak) kullanılır.
//* Fonksiyon tanımlanırken verilen değerlere arguments denir


function toplam(a,b,c) {
    // console.log(a+b+c)
    let result = a+b+c
    return result
}

console.log (toplam(5,8,7))


function selamla (ad,yas =30, meslek = "mimar") {
console.log(ad);
console.log(yas);
console.log(meslek);

}

selamla("harvey",20,"coder")

function degerler(a,b){
    console.log(a);
    console.log(b);
    console.log(arguments);
    
    
}
degerler(66,55,255,8765786,45)

//! RETURN keyword

function yashesapla(isim,tarih){
    // console.log(`Merhaba ben ${isim} ${2025-tarih} yasindayim`);
    let yasbul =2025 -tarih
    return yasbul
}

let yas = yashesapla("harvey",1999)

console.log(yas);

if (yas>30) {
    console.log("yasiniz 30 dan buyuk");
    
    
} else {
    console.log("yasiniz 30 dan kucuk");
    
    
}


// dairenin cevresini bulan fonksiyon

function dairecevresi(r){
    let cevre = 2*Math.PI*r
    return cevre
}
console.log(dairecevresi(5));
