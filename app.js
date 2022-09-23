console.log("Hack the world!!")

var headerTitle = document.getElementById('main-header')
headerTitle.style.borderBottom = "solid 3px black"

var item = document.getElementsByClassName('title')
// console.log(item);
item[0].style.fontWeight ="bold"
item[0].style = 'color: #00FF00'

var listItem = document.getElementsByClassName('list-group-item')
console.log(listItem);