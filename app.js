//task 7 creating nodes
var list = document.querySelector('#items')
//parent node
//console.log(list.parentNode)
list.parentNode.style.backgroundColor= '#ccc'

// console.log(list.parentElement)
// console.log(list.parentNode)
//console.log(list.childNodes)
// console.log(list.children[1])

// list.children[0].style.backgroundColor ='red'
// console.log(list.firstChild)
// console.log(list.firstElementChild)
// list.firstElementChild.style = 'color:red'
// console.log(list.lastElementChild)
// list.lastElementChild.style = 'color:red'
// //next sibling
// console.log(list.nextSibling)
// console.log(list.nextElementSibling)
// console.log(list.previousSibling)
// console.log(list.previousElementSibling)
// list.previousElementSibling.style.color ='green'
//creating division
var newDiv = document.createElement('div')
newDiv.className = 'hello'
newDiv.id='hello1'
newDiv.setAttribute('title','Hello')

var textContent = document.createTextNode('hello')
newDiv.appendChild(textContent)
console.log(newDiv);
var container = document.querySelector('ul')
var pointer= document.querySelector('ul li')
container.insertBefore(newDiv,pointer)
var newDiv2 = document.createElement('div')
newDiv2.className = 'hello'
newDiv2.id='hello1'
newDiv2.setAttribute('title','Hello')

var textContent = document.createTextNode('hello')
newDiv2.appendChild(textContent)

var container2 =document.querySelector('header .container')
var pointer2 =document.querySelector('header h1')
container2.insertBefore(newDiv2,pointer2)