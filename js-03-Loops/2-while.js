// * ============================================
//!            WHILE LOOP
// * ============================================
// JavaScript'te while döngüsü, bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır. 

// while (şart){
//     yapılacak işlemler
// }

// let i=0;

// while(i<=10){
//     console.log(i);
//     i++
    
// }

// for(let i=0; i<=10;i++){
//     console.log(i);

// }while ile yazılan örneğin aynısını for ile de yazdık

//* kullanıcıdan doğru şifre girene kadar şifre isteyelim


// let password = prompt("lutfen sifre giriniz");

// while(password!="45%.a"){

//     password = prompt("input password")
// }

// console.log("tebrikler dogru girdiniz");


//! Tek başına karar yapıları ile tekrarlama işlemi yapılamaz.
//! Tekrar varsa döngu var demektir.
//! karar yapısı kontrol eder ve duruma gore programın akışını yönlendirir ama tekrar yaptırmaz





//? Bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.
// toFixed(x); //*virgülden sonra x adet basamak olsun



// 0-100 arasında değer girilene kadar değer girilmesini isteyen kod bloğu

// let number1=+prompt("enter a number")

// while(number1<0 || number1>100){

//     alert("wrong number")
//     number = +prompt("lutfen dogru birs sayi giriniz");
    
//     if(number1=="q"){
//         break
//     }  


// }
// console.log("donguden cikildi");



//? : Tahmin Oyunu
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.





const rastgele=Math.ceil(Math.random()*20)

let hak=5;

while(hak>0){

    const tahmin = +prompt("sayi tahmininizi giriniz")
    hak--;

    if(tahmin==rastgele){
        console.log("tebrikler bildiniz");
        break;
    }
        else if(tahmin > rastgele){

            console.log(hak + "hakkiniz kaldi azalt📉");


            
}else{
    console.log("arttir📈");
    
}

if(hak==0)
{console.log("uzgunuz bilemediniz");
}

}


