let textBlock = document.querySelector('.advice');
let titleBlock = document.querySelector('.title');
let circle = document.querySelector('.circle');
let cardBlock = document.querySelector('.card');
circle.addEventListener('click', main);

function main() {
    removeEverything()
    changeQuote()
    changeDice()
} 
main();


function removeEverything() {
    let dice = circle.querySelector('div');
    if(dice) circle.removeChild(dice);
    textBlock.innerText = "";
    titleBlock.innerHTML = "";
    cardBlock.style.display = 'none';
}
function changeDice() {
    let nthDice = Math.floor(Math.random() * 6 + 1)
    let nthDiceTemplate = document.getElementById(`temp-${nthDice}`);
    const nthDiceDiv = nthDiceTemplate.content.cloneNode(true);
    circle.appendChild(nthDiceDiv);
}


async function changeQuote() {
    let res = await fetch("https://api.adviceslip.com/advice");
    let response = await res.json();
    textBlock.innerText = response.slip.advice
    titleBlock.innerText =  `Advice # ${response.slip.id}`
    cardBlock.style.display = 'flex';
}

 