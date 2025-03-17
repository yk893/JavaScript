// ?==============================================
// ?            DIZI ERISIM METOTLARI
// ?==============================================

//Array Property
/* -------------------------------------------------------------------------- */
/*                                   length                                   */
/* -------------------------------------------------------------------------- */
// Bir arrayın kaç elemandan oluştuğunu verir

const number = [3, 5, 2, "4", "bes", "dort", 3, 6, "bes", 5,56]


console.log(`Number arrayi ${number.length} eleman sayisina sahiptir`);





console.log(number.includes(5));  // number dizisi 5 sayisini icerd9igi icini true doner.

console.log(number.includes(9)); //


// const userlist = ["excalibur16","cezalanadirici28","fisek44","tozduman55","crazyboy_56"]

// const guest = prompt("Bir kullanici giriniz")

// userlist.includes(guest) ? console.log("Kayitli kullanici giris yapti") : console.log("Kayit olabilirsinizexcali");


// if(number.indexOf("bes")<0){
//     console.log("Aranan oge yok");
    
// }else{
//     console.log(`Aradiginiz ogenin index numarasi ${number.indexOf("bes)}`);
    
//     }

// 

const satement = ["oku", "da", "adam", "ol"]

console.log(satement.join("-"));

console.log(satement);

const newStr = satement.join("#")
console.log(newStr);



console.log(satement.slice(1,3));

