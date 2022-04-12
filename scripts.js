let equalCards = [];
let moves = 0;
let cardsQty = parseInt(prompt("Com quantas cartas deseja jogar?"));
let cardsInGame = [];
const gifsTurnCards = [`<img src="/projeto4-parrotsCardGame/imgs/bobrossparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/explodyparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/fiestaparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/metalparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/revertitparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/tripletsparrot.gif">`,
`<img src="/projeto4-parrotsCardGame/imgs/unicornparrot.gif"></img>`]

function startGame(){
    while(cardsQty % 2 ==! 0 || cardsQty < 4 || cardsQty >14 || isNaN(cardsQty)){
        cardsQty = parseInt(prompt("Com quantas cartas deseja jogar?"));
    }
    gifsTurnCards.sort(comparador);
    
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
}
function turnCard(card) {
    if(card.classList.contains("selected-end") === false){
        if(card.classList.contains("selected") === false){
            moves += 1;
        }
        card.classList.add("selected");
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
                setTimeout(function () {alert(`Você ganhou em ${moves} jogadas!`);
                let reboot = prompt("Deseja reiniciar? (sim/não)")
                if(reboot === "sim"){
                    window.location.reload(true)
                }},1100);
            }
        }
    }  
}
function comparador() { 
	return Math.random() - 0.5; 
}
startGame();