//select 
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var newbutton=document.getElementById("new-popup-btn")

newbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


//select cancel
var cancelbtn=document.getElementById("cancel")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select add-btn, book-title-input,book-author-input,book-description-input,container
var container=document.querySelector(".container")
var addbutton=document.getElementById("add-btn")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5><br>
            <p>${bookdescription.value}</p>
            <button onclick="deleteitem(event)">Delete</button>`
            container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"
        })

function deleteitem(event){
    event.target.parentElement.remove()
}