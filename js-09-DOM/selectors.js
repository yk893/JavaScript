console.log("***********Selectors*********");

document.title = "FS19";

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

console.log(document.getElementById("add-new-item"));

// id si add-new-item olan elamanı seçer
const headerText = document.getElementById("add-new-item");

//!Seçilen elemanın style propertisini manipüle ettik
//herşey key-value şeklinde yazılır
headerText.style.color = "blue";
headerText.style.backgroundColor = "orange";
headerText.style.border = "2px solid black";
//! NOTE property'lerde kebap-case yerine camel-case notasyonu kullanılır

const addBtn = document.getElementById("btn");
console.log(addBtn);

// headerText.style = "font-family:tahoma; font-size:40px" //? CSS vari Erişim

const htmlLi = document.getElementById("html-li");
console.log(htmlLi);
htmlLi.style.color = "red";

//? HTML elementlerininin İçerikleri okuma ve değiştirme
//?----------------------------------------

//? bir text elementinin içeriği aşağıdaki attribute'ler ile degisitirlebilir.
//! textContent, innerText, innerHTML

console.log(htmlLi.textContent)
htmlLi.textContent = "<h2>HTML5</h2>"

document.getElementById("js-li").innerText = "<h2>JS</h2>"

document.getElementById("react-li").innerHTML = "<h2 style='color:green'>React JS</h2>"


//?! input'ların degerinin okunması/yazılması

const myInput = document.getElementById("input")
console.log(myInput.value)

// myInput.addEventListener("input", (e)=>{
//     console.log(e.target.value)
// } )

addBtn.value = "Submit"

console.clear()
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const allLi = document.getElementsByTagName("li")
console.log(allLi) //HTMLCollection

console.log(allLi[0].textContent)
allLi[2].textContent = "JavaScript"


//! array-like grubunda direk array metotları kulanılamamz.
// allLi.forEach((li)=>console.log(li));

//? Toplu bir şekilde erişim için For of yapısıda kullanılabilir
for (const li of allLi) {
    console.log(li.textContent)
}

//? Çözüm olarak array-like grubu array'e çevirilebilriz.
//? 1-Spread
const arrAllLi = [...allLi]
console.log(arrAllLi)

arrAllLi.forEach((li)=>li.style.color = "crimson")

//? 2-Array.from()
console.log(Array.from(allLi))
Array.from(allLi).map((li)=>li.style.backgroundColor = "skyblue")

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName("list")
console.log(myList)

myList[0].innerText = "HTML Dersleri"

document.getElementsByClassName("item-list")[0].style.border = "2px solid red"

console.clear()
//* ==========================================
//*              QUERYSELECTOR()
//* ==========================================
// ! Query Selector ile id, tag, class seçilebilir.
//! bu secici akısta gördügü ilk elementi secer.

//? id ile seçmek için
console.log(document.querySelector("#btn"))

//? Class ile seçmek için
console.log(document.querySelector(".item-list"))

//? tag ile seçmek için
console.log(document.querySelector("li")) //? ilk gördüğü elemanı seçer

//? CSS selectorleri querySelector ile kullanılabilir.
const myH3 = document.querySelector("main section.item-list h3")
console.log(myH3)

const myGrayLi = document.querySelector(".item-list ul li:nth-child(3)")
console.log(myGrayLi)
myGrayLi.style.backgroundColor = "gray"


//* ==========================================
//*              QUERYSELECTORALL()
//* ==========================================

const liste = document.querySelectorAll(".item-list .list")

console.log(liste)

// querySelectorAll bir nodelist döndürür. NodeList dahili olarak  forEach metodunu barındırır. Ama istenirse spread veya Array.from() ile yine Arraye'dönüsüm yapılabilir.
liste.forEach((li)=>console.log(li.innerText))

const newList  = [...liste]
console.log(newList.map((e)=>e.style.backgroundColor="orange"))