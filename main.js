// 1
let contenu = document.getElementsByTagName('h1')[1];
console.log(contenu);
let text1 = contenu.textContent;
console.log(text1);

// 2
let contenu2 = document.getElementsByTagName('li')[3];
console.log(contenu2);
let text2 = contenu2.textContent;
console.log(text2);

// 3
let contenu3 = document.getElementsByTagName('p')[0];
let text3 = contenu3.textContent.toUpperCase();
console.log(text3);

// 4
document.querySelectorAll('li').forEach(function (element) {
    let text4 = element.textContent.toUpperCase();
    console.log(text4);
});

// autres méthodes
//1 
let secondH1 = document.getElementsByTagName('h1')[1]
console.log(secondH1.innerText);

//2 
// méthode1
let lastLi = document.getElementsByTagName('li')[3]
console.log(lastLi.innerText);
// méthode2
let myUl = document.getElementsByTagName('ul')[0]
console.log(myUl.lastElementChild.innerText);
// méthode3
let lastLi2 = document.getElementsByTagName('li')
console.log(lastLi2[lastLi2.length - 1].innerText);

//3
// méthode1
let para = document.getElementsByTagName('p')[0].innerText.toUpperCase()
console.log(para);
//méthode2
let div1 = document.getElementsByTagName('div')[0]
let para2 = div1.getElementsByTagName('p')[0].innerText.toUpperCase()
console.log(para2);

//4
let list = document.getElementsByTagName('li')
console.log(list);

// let test = [].slice.call(list)
// console.log(test);
let listArray = Array.from(list)
console.log(listArray);

listArray.forEach(element => {
    console.log(element.innerText.toUpperCase());
});

