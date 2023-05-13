// Selecting of by
// tag
// let element = document.querySelector('h1');
// console.log(element);
// // id
// let element1 = document.querySelector('#element1');

// console.log(element1)
// // class
// let element2 = document.querySelector('.element2')
// console.log(element2);

// get element by id 

// let element1 = document.getElementById('element1');
// console.log(element1);

// // get element by class
// let element2 = document.getElementsByClassName('element2');
// console.log(element2);
// let element = document.getElementsByTagName("h1");
// console.log(element);

// creating and removing elements from the Dom
// let mainContent = document.querySelector("#main-content")
// let newElement = document.createElement('p');
// let newContent = document.createTextNode('welcome to mandera county a county with unlimited possibilities')
// newElement.append(newContent)
// mainContent.append(newElement)
// newElement.remove();
// console.log(newElement);
// Changing style dynamically
// let div = document.querySelector("div");
// div.classList.add("success");
// div.classList.remove("success");
// div.classList.add("error");

// div.style.border = "10px solid green"

// Mouse Events
// let button = document.querySelector("button");

// button.addEventListener("mouseover", () => {
//  document.body.style = "background: #333";
// })
// button.addEventListener("mouseleave", () => {
//   document.body.style = "background: #fff";
//  })
 
//  Keyboard events
let typing = document.querySelector("#typing");
let clone = document.querySelector("#clone");

// typing.addEventListener("keyup", () => {
//   clone.innerHTML = typing.value;
// })
typing.addEventListener("keydown", (event) => {
if(event.altKey) {
  console.log("alt pressed")
}
})