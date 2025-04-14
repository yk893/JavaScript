//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok on

//*Asenkron (setTimeout) 1 seferlik
//******************************** */

setTimeout(() => {
    console.log("aleykumselam");
    
}, 2000);

console.log("selamun aleykum");

setTimeout(() => {
    console.log("naber , nasilsin");
    
}, 1000);

//!-Selamun Aleyküm-- Naber-Aleyküm Selam  çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır

let sayac = 0

const interval1 = setInterval(() => {
    console.log(++sayac);
    if(sayac == 7){
        clearInterval(interval1)
    }
}, 2000);

console.log("Merhaba");


// //?callback hell

setTimeout(() => {
    console.log("ayse:s.a. ahmet");
  
    setTimeout(() => {
      console.log("ahmet: a.s. ayse nasılsın");
  
      setTimeout(() => {
        console.log("ayse: iyiyim teşekkür ederim");
      }, 1000);
    }, 1000);
  }, 1000);