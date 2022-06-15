// Change language +2p

//     1.Set a cookie on a document / Set a value in browser storage (local or session)
//     2.Read all cookies (storage)
//     3.Add two radio buttons with two available languages (e.g., en-US, ro-RO)

// ○ The one whose value equals cookie’s value (storage value) should be “pre-selected”
// ○ When the user selects the other radio button, his 
//option should be preserved in the cookie (browser storage)

// You need to implement two applications, one using cookies and one using storage.
// Or you can implement the two functionalities in one app, but using two values: one stored in cookie,
// one stored in storage.

console.log(localStorage)
// 

let selectEn;
if(localStorage.length == 0){
    localStorage.setItem('lang', 'us')
}

let localMemory = localStorage.getItem('lang')
console.log(localStorage)
if(localMemory == 'us'){
    selectEn = true;
} else if(localMemory == 'ro'){
    selectEn = false;
} 

function createLanguageButtons(container){
    container.innerHTML = '';
    let questionHtml = document.createElement('p')
    if(selectEn == true){
        questionHtml.innerHTML = "What language do you speak? "
    }else{
        questionHtml.innerHTML = "Ce limbă vorbiți? "
    }
    
    container.appendChild(questionHtml)
    
    let radioButtonsHtml = document.createElement('div');
    radioButtonsHtml.innerHTML = `
    <input type="radio" name="language" value="en-US" id="us"/>
    <label for="us">US</label>
    <input type="radio" name="language" value="ro-RO" id="ro"/>
    <label for="ro">RO</label>
    `;
    container.appendChild(radioButtonsHtml)
    let usBtn  = document.getElementById('us')
    let roBtn = document.getElementById('ro')
    selectEn == true ? usBtn.checked = true : roBtn.checked = true;

}    
createLanguageButtons(container1)

document.getElementById('us').addEventListener('change', editMemory)
document.getElementById('ro').addEventListener('change', editMemory)

function editMemory(){
    // let cookieName = document.cookie;
    // document.cookie = string + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    if(document.getElementById('us').checked === true){
        localStorage.setItem('lang', 'us')

    } else {
        localStorage.setItem('lang', 'ro')
    }
    window.location.reload();
}

    
