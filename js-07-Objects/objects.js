/* ---------------------------------- */
/*               Object               */
/* ---------------------------------- */
//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object kullanılır

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

const isim = ["Ali", "Veli", "Sema", 5, true, [], {}];
const soyad = ["Yılmaz", "Çelik", "Taş"];

console.log(`${isim[0]},${soyad[1]}`);

const ogr = { ad: "Ali", soyad: "Yılmaz" };
console.log(ogr.ad, ogr.soyad);

/* -------------------------------------------------------------------------- */
//* --------------------------------------------------------------*/
//*               Object Oluşturma Yöntemleri                    */
//* --------------------------------------------------------------*/
//! 3 farkli yöntem ile Object oluşturulabilir.
//? 1. Object() class'ından türetme
// Bu yöntem, JavaScript'teki Object sınıfını kullanarak bir nesne oluşturmayı içerir.
// Bunun için new Object() yazılır ve sonradan nesneye özellikler atanır.

const car = new Object();
car.marka = "BMW";
car.model = "2024";
car.beygir = 180;
console.log(car);

const car1 = new Object();
car1.marka = "Mercedes";
car1.model = 2020;
car1.beygir = 220;
console.log(car1);
/* -------------------------------------------------------------------------- */
//? 2. Constructor metodu ile Object oluşturma
//! OOP(Object Oriented Programming)

function PersonelList(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
}

const personel1 = new PersonelList(1000, "Ali", 50000);
console.log(personel1);

const personel2 = new PersonelList(1001, "Harvey", 55000);
console.log(personel2);
//! her nesne için ayrı bir kopya oluşturulan metodlar, bellek kullanımını arttırabilir

//? 3. Object Literal (en çok kullanacağımız ve tercih edilen yöntem)

const icecek = {
  ad: "cay",
  hazırlıkSüresi: "Yarım Saat",
  tercihler: ["demli", "açık", "paşa çayı"],
  menşei: "Rize",
};

console.log(icecek);

//Boş Obje

const ev = {};

ev.oda = 5;
ev.ısıtma = "doğalgaz";
ev.havuz = true;

console.log(ev);

/* -------------------------------------------------------------------------- */

let personal = {
  name: "Brad",
  lastName: "Pitt",
  birth: 1988,
  horoscobe: "Gemini",
  isMaried: true,
  children: ["chole", "shiloh", "angel"],
  adress: { city: "losangeles", street: "bakery", number: 5 },
  calculateAge: function () {
    return new Date().getFullYear() - this.birth;
  },

  selamla: () => {
    return "Merhaba";
  },
  // * Object içinde arrow function kullanılıyorsa this keywordu window nesnesine karşılık gelir. Zaten arrow functionın ortaya çıkma sebebi thislerden kurtulmaktır.

  arrowFunction: () => {
    return personal.isMaried;
  },
};

console.log(personal.calculateAge());
console.log(personal.selamla());
console.log(personal.arrowFunction());

console.log(this);

//! Arrow functionda this window objesine karşılık gelir. Arrow functionda this kullanmıyoruz
//! window objesi içinde isMarried isimli bir özellik bulamadığından undefined
console.clear();

/* -------------------------------------------------------------------------- */
//* ------- OKUMA/ERİŞME ----------

//! 1- .(dot) notation ile erişim

console.log(personal.name);
console.log(personal.birth);
console.log(personal.children[2]);
console.log(personal.children.forEach((child) => console.log(child)));
console.log(personal.adress.city);
console.log(personal.adress.street);
console.log(personal.selamla());

//! 1- [] square brackets, özellik yöntemi

console.log(personal["name"]);
console.log(personal["lastName"]);
console.log(personal["adress"]["street"]);
console.log(personal["horoscobe"]);

//dinamik değerlere erişim için avantajlıdır
const keyword = "birth";
console.log(personal[keyword]);
console.clear();

//?yeni bir özellik ekleme
personal.phone = "321-654-87-89";
console.log(personal);
personal[keyword] = 1990;
console.log(personal);

/* -------------------------------------------------------------------------- */
//? Bir objeyi kopyalama
//! 1- Shallow Copy (sığ) Kopyalama
const fimaPersoneli = personal;
console.log(fimaPersoneli);
fimaPersoneli.name = "Fatma";
console.log("Personal", personal.name);
console.log("Personal", fimaPersoneli.name);

//! 2 Deep Copy yöntemi
// JSON.stringify() , JSON.parse()
console.log("************************");
const deepCopyPersonal = JSON.parse(JSON.stringify(personal));
console.log(deepCopyPersonal);
deepCopyPersonal.name = "Zehra";
console.log(deepCopyPersonal);
console.log(personal);

//! 3- Object Assign
//! 4 Spread Operatoru
console.clear();

//* ------------------------------------------------------ */
//*                     OBJECT METHODS
//* ------------------------------------------------------ */
//? İçiçe (nested) Object kullanımı

const employeeList = {
  person1: { name: "Harvey", lastName: "Watson", age: 18 },
  person2: { name: "Helen", lastName: "Kuttery", age: 28 },
  person3: { name: "Ethan", lastName: "Specter", age: 33 },
  person4: { name: "Ashley", lastName: "Arrow", age: 27 },
};

console.log(employeeList.person2.lastName);
console.log(employeeList["person1"]["lastName"]);

//* -------------------------------------------------------- */
//*                   FOR - OF -IN YAPISI                    */
//* -------------------------------------------------------- */
//? for ... of
//! for...of sıralı olan dizilerde kullanılır ama objectlerde daha komplex bir yapı olduğu için for-of kullanılmaz

// for (const i of employeeList) {
//     console.log(i)    //!employeeList is not iterable
// }

//? for in 
//! for...in yapısı ile obje keyleri üzerinde döngü kurabiliriz ancak bu tavsiye edilen bir yöntem değildir. Bunun yerine obje özelliklerini diziye dönüştüren metodları kullanabiliriz

for (const i in employeeList) {
    console.log(i)
}

console.clear()

/* -------------------------------------------------------------------------- */
// for in yada for of yerine object  arraye çeviren yöntemler var
// Bir object key - value çiftlerinden oluşur

//?  KEY lere erişim sağlamak için Object.keys metodu kullanılır.

const keys = Object.keys(personal) //!Array döner

console.log(keys)

// keys.forEach((i)=>console.log(i))

//? VALUE lara erişim sağlamak için Object.values()


const values = Object.values(personal) //!Array döner

console.log(values)

// values.forEach((i)=>console.log(i))

//? OBJECT.ENTRIES


const degerler = Object.entries(personal) //!Array döner
console.log(degerler)


/* ------------------------------------------------------ */
//*         JSON -Javascript Script Object Notation       */
//* ------------------------------------------------------ */

console.clear()

//? JSON ile farklı veri türleri barındırılabilir
//? Dillerden bağımsızdır.
//? nesnelerin (objelerin) temsil edilmesi için anahtar-değer çiftlerini kullanır. Bu, verilerin daha iyi organize edilmesini ve ilişkilendirilmesini sağlar.
//? JSON, veri  işleme açısından hızlıdır. Bu nedenle web uygulamalarında ve servislerde yaygın olarak kullanılır.

const employees = [
    {
      name1: "Abdulkadir",
      lastName: "baki",
      dateOfBirth: 1980,
      salary: 18000,
      job: "developer",
    },
    {
      name2: "elif",
      lastName: "akalın",
      dateOfBirth: 1990,
      salary: 20000,
      job: "developer",
    },
    {
      name3: "esra",
      lastName: "bilgin",
      dateOfBirth: 1985,
      salary: 21000,
      job: "devops",
    },
  ];

  employees.map((employee)=>console.log(employee))
  employees.map((employee)=>console.log(employee.salary))
  employees.map((employee)=>console.log(employee.lastName))


  employees.push(
    {
        name2: "harvey",
        lastName: "watson",
        dateOfBirth: 1999,
        salary: 150000,
        job: "mobile developer",
      }
  )

  console.log(employees)