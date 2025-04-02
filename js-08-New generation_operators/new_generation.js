console.log("**** NEW GEN OPERATORS *****");

// * =============================================
// *  DESTRUCTURING (OBJECT)
// * =============================================

const product1={
    id:"12345",
    brand:"Apple",
    type:"smart phone",
    price:30000
}

const product2 = {
  id: "12346",
  brand: "Samsung",
  type: "mobile phone",
  price: 50000,
};

//? . notaion ile erisim

console.log(product2.brand);
console.log(product1.type);


let yeni1 = product1.price

console.log(yeni1);
yeni1+=10

console.log(yeni1);

console.log(product1.price);

//? square bracket ile erisim

console.log(product2['type']);

//?  DESTRUCTURING YONTEMI

let {id,brand,price,type} = product1

console.log("ID", id);
console.log("BRAND", brand);
console.log("PRICE", price);
console.log("TYPE", type);


price += 34
console.log(price);
console.log(product1.price);

let {id:id2,brand:brand2,price:price2,type:type2} = product2

console.log(brand2);


// //? NESTED DESTR
const insanlar = {
    kisi1: {
      kimlikNo: "1234567890",
      adi: "Ahmet",
      soyadi: "Can",
      meslek: "Mimar",
      maas: 30000,
    },
    kisi2: {
      kimlikNo: "44234567890",
      adi: "Canan",
      soyadi: "Can",
      meslek: "Sosyal Gelişim Uzmani",
      maas: 25000,
    },
  };

//    /* ---------------------------------- */
//    /*              // 1. YOL             */
//    /* ---------------------------------- */

  //! 1 level destructing

//   const {kisi1,kisi2} = insanlar

//   console.log(kisi1.adi);


//! 2 level destructing

// const {adi,meslek} = kisi1

// console.log(adi);

// console.log(meslek);

// console.log(kisi1.soyadi);


// let {maas, adi:adi2} = kisi2

// console.log(maas);

// console.log(adi2);


   /* ---------------------------------- */
//    /*              // 2. YOL             */  (iki seviyeli)
   /* ---------------------------------- */

const {kisi1:{adi,soyadi,meslek},kisi2:{adi: adi2, meslek :meslek2}} = insanlar

console.log(meslek);

  


//* Example
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "John",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ];


  console.log("*********************");

  team.forEach((kisi)=>{
    console.log(kisi.name);
    console.log(kisi.surname);
    console.log(kisi.job);
    console.log(kisi.age);
    
  })
  
  console.log("*********************");

  team.forEach((kisi)=>{

const {name,age,surname,job} = kisi

    console.log(name);
    console.log(surname);
    console.log(job);
    console.log(age);

  })

  console.log("*********************");

  team.forEach((name,age,surname,job)=>{


    console.log(name);
    console.log(surname);
    console.log(job);
    console.log(age);

  })

  const objeGoster = function (){
    return {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    }
  }

  console.log(objeGoster());

  let{name,surname,job} = objeGoster()

  console.log(job);

  //? parametreli fonksiyon

  console.log("*************");

  const printVeri = (veri)=>{

console.log(veri.id, veri.bilgi, veri.tarih);

  }



  const printVeriDest = ( veri) =>{
const {id, bilgi, tarih} = veri

console.log(id, bilgi, tarih);


  }


  const printVeriHAvadaDest = ({id, bilgi, tarih}) =>{
console.log(id, bilgi, tarih);


  }

  const data = {
    id:"12456",
    bilgi:"teslim edildi",
    tarih :"2 nisan"
  }

  printVeri(data)
  printVeriDest(data)
  printVeriHAvadaDest(data)
  
//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Muzaffar", "Mehmet", "Raife", "Mustafa", "Ozgur"]


 const [kisi1,kisi2,,kisi3] = people 

 console.log(kisi3);


 
//* ==============================================
//*  REST (...)
//* =============================================
//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//! ARRAY
const takimlar = ["GS", "FB", "BJK", "TS", "DENIZLISPOR", "BURSA", "ISTANBUL"]

const [takim1,takim2,takim3, ...anadoluTakimlari] = takimlar

console.log(anadoluTakimlari);
console.log(takim2);

//! OBJECTS

const person  ={

  adi:"ipek",
  soyadi:"bilir",
  meslek:"ev hanimi",
  yas:34
}

const {ad,soyad, ...geriKalan} = person

console.log(geriKalan);

//! 2 - Bir fonksiyon argumanlarini diziye cevirmek icin kullanilir

const topla1 = (...a)=>  {
  console.log(a);

  return a.reduce((x,y)=> x+y)


}

const topla2 = (a,b,c, ...diger)=>{

  console.log(diger);
  return a+b+c
  
}

console.log(topla1(5,6,7,8,9,22,454));
console.log(topla2(1,3,5,60,0,2));

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.

/* ---------------------------------- */
/*               SPREAD               */
/* ---------------------------------- */

