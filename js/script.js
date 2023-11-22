// Scrivi un programma che stampi in console i numeri da 1 a 100, 
// ma che per i multipli di 3 stampi “Fizz”, 
// al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const container = document.querySelector(".container");



// Aggiunge i quadrati al container
for (let i = 1; i <= 100; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = i;
    container.appendChild(square);
}
    // funziona per gestire il click sul bottonr multipli 
    function Multipli (){
        // Seleziona tutti gli elementi con la classe "square"
        const squares =document.querySelectorAll(".square");
            // cerca su ogni quadrato
            squares.forEach((square, i) =>  {
                // condizione di ricerca  
                if(((i +1) % 5 ===0) && (i +1) % 3 === 0){
                    // sovrascrivi con buzz 
                    square.append= "FizzBuzz"
                    square.style.backgroundColor = "red"; 
                }
            });
    }
    // Associa la funzione al clic del bottone
    document.getElementById("multipli").addEventListener("click", function(){
        Multipli();
    });




    // Funzione per gestire il clic sul bottone "multipli-tre"
    function treMultipli() {
        // Seleziona tutti gli elementi con la classe "square"
        const squares = document.querySelectorAll(".square");

        // cerca su ogni quadrato
        squares.forEach((square, i) => {
            // condizione di ricerca 
            if ((i + 1) % 3 === 0) {
                // Sovrascrive il contenuto con "Fizz"
                square.append = "Fizz";
                square.style.backgroundColor = "#0cd6a1"; 

            }
        });
    }

    // Associa la funzione al clic del bottone
    document.getElementById("multipli-tre").addEventListener("click", function() {
        treMultipli();
});
    // Funzione per gestire il click sul bottone "multipli-cinque"
    function cinqueMultipli (){
        // Seleziona tutti gli elementi con la classe "square"
        const squares =document.querySelectorAll(".square");
            // cerca su ogni quadrato
            squares.forEach((square, i) =>  {
                // condizione di ricerca  
                if((i +1) % 5 ===0){
                    // sovrascrivi con buzz 
                    square.append = "Buzz"
                    square.style.backgroundColor = "#ffd166"; 
                }
            });
    }
     // Associa la funzione al clic del bottone
     document.getElementById("multipli-cinque").addEventListener("click", function(){
        cinqueMultipli();
     });




