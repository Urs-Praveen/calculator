console.log("Hack the world!!")

var headerTitle = document.getElementById('main-header')
headerTitle.style.borderBottom = "solid 3px black"

var item = document.getElementsByClassName('title')
// console.log(item);
item[0].style.fontWeight ="bold"
item[0].style = 'color: #00FF00'

var listItem = document.getElementsByClassName('list-group-item')
console.log(listItem);
var listItem = document.getElementsByClassName('list-group-item')
listItem[2].style.backgroundColor ='green'
for(let i=0;i<listItem.length ;i++){
    if(i == 2){
        continue
    }
    listItem[i].style.fontWeight ='bold'
    listItem[i].style ='color : red'

}