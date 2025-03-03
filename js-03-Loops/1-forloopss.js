/* -------------------------------------------------------------------------- */
//!                                 FOR LOOP                                  */
/* -------------------------------------------------------------------------- */
// for (başlangıç; koşul; artış) {
//     // Döngü bloğu
//   }

// Başlangıç: Döngünün başlangıcında yapılacak işlem. Bu genellikle bir sayaç değişkeni tanımlar.
// Koşul: Döngünün çalışmaya devam etmesi için gereken koşuldur. Koşul sağlanmadığında döngü sona erer.
// Artış: Her döngü sonunda sayaç değişkeninin nasıl değişeceğini belirler.


// for(let sayi=1; sayi<5; sayi++){
//     console.log(sayi);
    
// }

// console.clear()

/* -------------------------------------------------------------------------- */
// 3 kişinin iki notunu alan ve ortalmasını(herbirinin ve hepsinin) bulan programı yazın



// let toplam=0;

// for(let i=1; i<=3; i++){

//     const not1=+prompt("vize notunuzu giriniz")
//     const not2=+prompt("final notunuzu giriniz")
// let ort=(not1+not2)/2
// console.log(`${i}.ogrencinin ortalamasi ${ort}`);
// toplam=toplam+ort

// }
//  let genelortalama=toplam/3
//  console.log(genelortalama);
 

//!BREAK VE CONTINUE keywordleri kullaninimi


// for(let i=0; i<=10;i++){
 
//  if(i%3==0){
//     continue;
//  }
    
// // 3 un katlarina denk geldikce asagiya inme donguye devam et 

// if(i===7){
//     break;
// }
// //  i=7 oldugunda donguden cik
// console.log(i);

    
// }

// console.log("donguden cikildi");

// //!continue ve break loop içinde kullanılır if yapısında kulanılmaz.
// //! if yapısı içinde continue ve break kullanılmaz
// //? loop  içindeolmayan if de continue ve break çalışmaz


