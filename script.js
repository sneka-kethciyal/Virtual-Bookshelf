// popup elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var newbutton = document.getElementById("new-popup-btn");

// show popup
newbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

// cancel popup
var cancelbtn = document.getElementById("cancel");
cancelbtn.addEventListener("click", function () {
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// form elements
var container = document.querySelector(".container");
var addbutton = document.getElementById("add-btn");
var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var bookdescription = document.getElementById("book-description-input");

// add book
addbutton.addEventListener("click", function () {

  // basic validation
  if (
    booktitle.value === "" ||
    bookauthor.value === "" ||
    bookdescription.value === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  var div = document.createElement("div");
  div.className = "book-container";

  div.innerHTML = `
    <h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5><br>
    <p>${bookdescription.value}</p>
    <button onclick="deleteitem(event)">Delete</button>
  `;

  container.append(div);

  // clear inputs
  booktitle.value = "";
  bookauthor.value = "";
  bookdescription.value = "";

  // close popup
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// delete book
function deleteitem(event) {
  event.target.parentElement.remove();
}
