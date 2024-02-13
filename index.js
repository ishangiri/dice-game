

  function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const result = document.getElementById("result");
    
    const values = [];
    const images = [];
    var sum = 0;
    let counter = 0;
  

    for(let i = 0; i < numOfDice; i++){
         const value = Math.floor(Math.random() * 6) + 1;
         values.push(value);
         images.push(`<img src = "dice_images/${value}.png">`);
         counter ++;
    }

    for(let j = 0; j < values.length; j++){
        sum = sum + values[j];
    }

    diceResult.textContent = `TOTAL: ${sum}, rolled: ${counter} `;
    diceImages.innerHTML = images.join(''); 


    if(sum == 18){
          result.textContent = "YOU WIN!!!"
          window.alert("Congratulations!!!!!!!, You Win");
                        
        
    }
    
}


setTimeout (() => { window.alert("Hello, this is just a regular dice rolling game. Nothing serious.")}, 2000);





