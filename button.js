var form = document.getElementById('addForm')
var itemList = document.getElementById('items')

form.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)
function addItem(e){
    e.preventDefault()
   var newItem = document.getElementById('item').value; //input element 
   var li = document.createElement('li') //create new list 
   li.className = 'list-group-item' //add same class
   //add text node with input value
   li.appendChild(document.createTextNode(newItem))
   
   var deleteBtn = document.createElement('button')
   deleteBtn.className ='btn btn-danger btn-sm float-right delete'
   deleteBtn.appendChild(document.createTextNode('X')) //add text to button
   li.appendChild(deleteBtn)

   //edit button
   var editBtn = document.createElement('button')
   editBtn.className = 'btn btn-warning btn btn-sm float-right'
   editBtn.appendChild(document.createTextNode('edit'))
   li.appendChild(editBtn)
   itemList.appendChild(li)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Hata Du SochLe ??')){
            var li = e.target.parentElement;
            itemList.removeChild(li)    
        }
    }
     
}