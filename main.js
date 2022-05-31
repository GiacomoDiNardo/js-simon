const numbersDisplay = document.getElementById("random-numbers");
const timerDisplay = document.getElementById("timer");

//creo un array per i numeri casuali
const randomNumbersContainer = [];

//creo un array per i numeri inseriti dall'utente
const userNumbers = [];
const rightNumbers = [];
//genero 5 numeri casuali e li inserisco nell'array
do{
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    //esegui push del numero solo se non è già presente
    if (!randomNumbersContainer.includes(randomNumber)) {
        randomNumbersContainer.push(randomNumber);
    }
} while (randomNumbersContainer.length < 5);

console.log(randomNumbersContainer);

//inserisco i numeri in html
numbersDisplay.innerText = randomNumbersContainer.join(" - ");

//creo timer di 30 secondi

let timer;
let minuts = 0;
let seconds = 10;
timer = setInterval(function () {
    
    seconds --;
    
    console.log("timer " + seconds);
    
    if (seconds === 0) {
        //fermo il timer
        clearInterval(timer);
        //i numeri spariscono allo scadere del timer
        numbersDisplay.classList.add("d-none");

        //chiedo all'utente di inserire i numeri memorizzati
        for (let i = 0; i < 5; i++) {
            userNumbers.push(parseInt(prompt("inserisci un numero memorizzato")));
        }
        console.log(userNumbers);
    }

    

    timerDisplay.innerHTML = 
    fixStringLength(minuts.toString(), 2, "0") +
    ":" +
    fixStringLength(seconds.toString(), 2, "0");

   
}, 1000);


function fixStringLength(text, length, placeholderChar) {
    let result = text;
  
    while (result.length < length) {
      result = placeholderChar + result;
    }
  
    return result;
}