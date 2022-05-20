// Convertire la es6
// Va trebuie sa rescrieti codul cu sintaxa de es6 de la tema din week6 si week5 +1p la fiecare tema

//functie care creeaza comentariul
function createComment(text){
    let itemHTML = document.createElement("li")
    itemHTML.innerHTML = text

    //email si poza
    let email = document.createElement("p")
    email.innerHTML = "florin.popescu@gmail.com"
    itemHTML.appendChild(email)
    
    let photo = document.createElement("img")
    photo.src = "image.jpg"
    itemHTML.appendChild(photo)

    //buton delete
    var buttonHTML = document.createElement("button")
    buttonHTML.data = "Va sterge";
    buttonHTML.innerHTML = "Delete";
    buttonHTML.setAttribute("class", "delete-buttons")
    itemHTML.appendChild(buttonHTML)
    buttonHTML.addEventListener('click', (event) => {
        itemHTML.parentElement.removeChild(itemHTML);
    })

    itemHTML.insertBefore(email, itemHTML.firstChild)
    itemHTML.insertBefore(photo, itemHTML.firstChild)

    return itemHTML
}

//1.displayComments 
//Afisam comentariile
var commentList=["first comment", "second comment"];

// function displayComments(){
var ulHTML = document.createElement("ul")

for(let commentValue of commentList){
    let itemHTML = createComment(commentValue);
    ulHTML.appendChild(itemHTML)
}

// for(let i = 0; i < commentList.length; i++){
//     let commentValue = commentList[i];
//     let itemHTML = createComment(commentValue);
//     ulHTML.appendChild(itemHTML)
// }

//Le punem in body
document.body.appendChild(ulHTML)

//2. Permitem adaugarea unui comentariu
var inputComment = document.getElementById("inputId");
var addButton = document.getElementById("addButton");

addButton.onclick = () => {
    console.log(inputComment.value)
    let itemNou= createComment(inputComment.value);
    ulHTML.appendChild(itemNou)
}

