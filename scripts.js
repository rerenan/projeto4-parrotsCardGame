let equalCards = [];
let moves = 0;
let cardsQty = Number(prompt("Com quantas cartas deseja jogar?"));
console.log(cardsQty % 2 ==! 0 )
while(cardsQty % 2 ==! 0 || cardsQty < 4 || cardsQty >14 ){
    cardsQty = Number(prompt("Com quantas cartas deseja jogar?"));
}
const gifsTurnCards = [`<img src="/projeto4-parrotsCardGame/imgs/bobrossparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/explodyparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/fiestaparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/metalparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/revertitparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/tripletsparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/unicornparrot.gif"></img>`]
gifsTurnCards.sort(comparador);
let cardsInGame = [];
for(i=0; i<cardsQty/2; i++){
cardsInGame.push(gifsTurnCards[i],gifsTurnCards[i]);
}
cardsInGame.sort(comparador);

for(i=0; i<cardsQty; i++){
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML += `
    <div class="card" onclick="turnCard(this)">
        <div class="front-face face"> 
            <img src="/projeto4-parrotsCardGame/imgs/front.png"> </div>
        <div class="back-face face">
            ${cardsInGame[i]}
        </div>
    </div>`
}

function turnCard(card) {
    card.classList.add("selected");
    moves += 1;
    let selectedCards = document.querySelectorAll(".selected");
    if (selectedCards.length > 1){
        if(selectedCards[0].querySelector(".back-face").innerHTML === selectedCards[1].querySelector(".back-face").innerHTML){
            equalCards.push(selectedCards[0], selectedCards[1]);
            selectedCards[0].classList.remove("selected");
            selectedCards[1].classList.remove("selected");
        } else {

            setTimeout(function() {selectedCards[0].classList.remove("selected");
            selectedCards[1].classList.remove("selected");},1000);
        }
        for(let i = 0; i < equalCards.length; i++){
            equalCards[i].classList.add("selected-end")
        }
        if(equalCards.length === cardsQty){
            setTimeout(function () {alert(`Você ganhou em ${moves} jogadas!`);},1100);
        }
    }
    console.log(equalCards);
}
function comparador() { 
	return Math.random() - 0.5; 
}