
// BOM Homework - History +1p

// When clicking a button, change the URL and display something new on the (same!) page. 
//Make sure the user is not actually redirected to a new page.


const previous = document.getElementById("previous")
const forward = document.getElementById("forward")

previous.addEventListener('click', () => {
    window.history.back()
})
forward.addEventListener('click', () => {
    windows.history.forward()
})

