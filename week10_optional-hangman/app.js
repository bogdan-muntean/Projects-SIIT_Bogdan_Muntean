// (Optional) Homework HangMan +4p
// Tasks:

//     O lista de cuvinte din care extragem un cuvant random
//     Un mod de a introduce litere
//     Sa verificam daca literea introdusa face parte din cuvant
//     Sa afisam cate o liniuta pentru fiecare litera din cuvantul ales
//     Daca literea apare in cuvant atunci punem in locul liniutei cu litera
//     Daca gasim o literea, le afisam pe toate de acelasi tip
//     Un number de vieti, daca ajunge la zero este game over

// Folosirea stilului OOP, indicati:

//     Facem o clasa HangMan iar pe contextul clasei tinem lista de cuvinte
//     Facem o metoda pentru afisarea de liniute. Daca avem cuvantul "javascript", pe ecran afisam _ _ _ _ _ _ _ _ _ _ ( 10 linuite)
//     O metoda unde obtinem ce a introdus utilizatorul

//     Incercati sa spargi codul in cat mai multe functii/metode


let game1
const puzzleHtml = document.querySelector('#puzzle');
const remainingHtml = document.querySelector('#guesses');

window.addEventListener('keypress', (e) => {
    console.log(e)
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render()
})

const render = () => {
    puzzleHtml.innerHTML = ''
    remainingHtml.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleHtml.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = 'javascript'
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()