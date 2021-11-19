//Variables
let evenNumbers = [];
let tvShow = [];

//Loop Fron 1000 down to 0
for(let i = 1000; i >= 0; i--){
    evenNumbers[i] = i;
    if((i % 2) === 0){
        console.log(evenNumbers[i]);
    }        
}

//Loop Fron 0 down to 10000
for(let x = 0; x <= 10000; x++){
    console.log(x)
    if(x === 2500){
        window.alert("A quarter of the way there!");
    }else if(x === 5000){
        window.alert("Halfway there!");
    }else if(x === 10000){
        window.alert("The loop is done!");
    }
}

//Array of TV Shows Loop
tvShow = ["Baki", "Stranger Things", "Umbrella Academy", "The 100", "Money Heist"];
for(let t = 0; t < 5; t++){
    console.log(`My #${t+1} TV show is ${tvShow[t]}`); 
}