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

console.log(document.cookie)
// 
let selectEn;
if(document.cookie.length == 0){
    document.cookie = 'us'
}

let cookie = document.cookie
if(cookie == 'us'){
    selectEn = true;
} else if(cookie == 'ro'){
    selectEn = false;
} else {
    selectEn = true;
    document.cookie = "us"
}
console.log(document.cookie)

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

    const usBtn  = document.getElementById('us')
    const roBtn = document.getElementById('ro')
    selectEn == true ? usBtn.checked = true : roBtn.checked = true;

}    
createLanguageButtons(container1)

document.getElementById('us').addEventListener('change', editMemory)
document.getElementById('ro').addEventListener('change', editMemory)

function editMemory(){
    // let cookieName = document.cookie;
    // document.cookie = string + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    if(document.getElementById('us').checked === true){
        document.cookie = "us"
    } else {
        document.cookie = "ro"
    }
    console.log(document.cookie)
    window.location.reload();
}

    


// function deleteCookie(cookieName){
//     document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
//     location.reload();
// }

// function getCookie(cookie){
//     if(cookie.length != 0){
//         console.log(cookie)
//     } else {
//         selectEn = true;
//     }
// }
// radioButtonsHtml.innerHTML = `
// <input type="radio" checked="${true}" name="language" value="en-US" id="us"/>
// <label for="us">US</label>
// <input type="radio" checked="${false}" name="language" value="ro-RO" id="ro"/>
// <label for="ro">RO</label>
// `;

// const container1Html = document.getElementById(container1)


// const arrayQ1En = ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very Unsatisfied"]
// const arrayQ1Ro = ["Foarte Mulțumit", "Satisfăcut", "Neutru", "Nemulțumit", "Foarte Nemulțumit"]

//container 1
// function createRadioButtons(array, container){
//     container.innerHTML = ''
//     let questionHtml = document.createElement('p')
//     if(selectEn == true){
    //         questionHtml.innerHTML = "How satisfied are you with our product: "
    //         container.appendChild(questionHtml)
//     }else{
    //         questionHtml.innerHTML = "Cât de mulțumit sunteți de produsul nostru:" 
//         container.appendChild(questionHtml)
//     }
//     let radioButtonsHtml = document.createElement('div');
//     radioButtonsHtml.innerHTML = array.map((value) => `<div>
//         <input type="radio" name="survey" value="${value}" id="${value}">
//         <label for="${value}">${value}</label>
//     </div>
//     `).join(' ');
//     container.appendChild(radioButtonsHtml)
// }