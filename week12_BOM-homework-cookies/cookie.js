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


const arrayQ1En = ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very Unsatisfied"]
const arrayQ1Ro = ["Foarte Mulțumit", "Satisfăcut", "Neutru", "Nemulțumit", "Foarte Nemulțumit"]

//container 1
function createRadioButtons(array, container){
    container.innerHTML = ''
    let questionHtml = document.createElement('p')
    if(selectEn == true){
        questionHtml.innerHTML = "How satisfied are you with our product: "
        container.appendChild(questionHtml)
    }else{
        questionHtml.innerHTML = "Cât de mulțumit sunteți de produsul nostru:" 
        container.appendChild(questionHtml)
    }
    let radioButtonsHtml = document.createElement('div');
    radioButtonsHtml.innerHTML = array.map((value) => `<div>
        <input type="radio" name="survey" value="${value}" id="${value}">
        <label for="${value}">${value}</label>
    </div>
    `).join(' ');
    container.appendChild(radioButtonsHtml)
}

//container 2
function createLanguageButtons(container){
    container.innerHTML = '';
    let questionHtml = document.createElement('p')
    // questionHtml.classList('paragraph') 
    if(selectEn == true){
        questionHtml.innerHTML = "What language do you speak? "
        container.appendChild(questionHtml)
    }else{
        questionHtml.innerHTML = "Ce limbă vorbiți? "
        container.appendChild(questionHtml)
    }
    let radioButtonsHtml = document.createElement('div');
    radioButtonsHtml.innerHTML = `
        <input type="radio" checked="${checkValues(true, questionHtml)}" name="language" value="en-US" id="us"/>
        <label for="us">US</label>
        <input type="radio" checked="${checkValues(false, questionHtml)}" name="language" value="ro-RO" id="ro"/>
        <label for="ro">RO</label>
    `;
    container.appendChild(radioButtonsHtml)
}