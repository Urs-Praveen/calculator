// console.log("Hack the world!!")

// var headerTitle = document.getElementById('main-header')
// headerTitle.style.borderBottom = "solid 3px black"

// var item = document.getElementsByClassName('title')
// // console.log(item);
// item[0].style.fontWeight ="bold"
// item[0].style = 'color: #00FF00'

// var listItem = document.getElementsByClassName('list-group-item')
// console.log(listItem);
// var listItem = document.getElementsByClassName('list-group-item')
// listItem[2].style.backgroundColor ='green'
// for(let i=0;i<listItem.length ;i++){
//     if(i == 2){
//         continue
//     }
//     listItem[i].style.fontWeight ='bold'
//     listItem[i].style ='color : red'

// }
// var li= document.getElementsByTagName('li')
// //console.log(li)
// li[4].style.backgroundColor = '#ccc'

// var secondChild = document.querySelector('.list-group-item:nth-child(2)')
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)')

// secondChild.style.color ='green'
// thirdItem.remove()
var list = document.querySelectorAll('.list-group-item')
//console.log(list)
//list[1].style.color = 'green'
for(let i=0 ;i<list.length ;i++){
    if(i%2==0){
        list[i].style.backgroundColor='green'
    }
}
//querySelector() selects the first element in the html code 
//querry selector all selects the whole class and convert it into a array that can be iterated 