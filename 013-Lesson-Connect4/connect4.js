
let isX = true;
const c4s = [...document.querySelectorAll(".c4")];
console.log(c4s);
const c4Headers = [...document.querySelectorAll(".c4-header")];
console.log(c4Headers);

function nextMove($e) {
    console.log({ date: new Date(), $ele: $e.srcElement });
    let columnSelected = $e.srcElement.dataset.column;
    const query = `.c4[data-column="${columnSelected}"]`;
    let columnSelection = [...document.querySelectorAll(query)];
    let slot = columnSelection.findLast(e => e.innerText != "X" && e.innerText != "O");
    let lastInd = columnSelection.findLastIndex(e => e.innerText != "X" && e.innerText != "O");

    console.log(lastInd);
    console.log(slot);
    if(isX){
        slot.innerText = "X";
        timedLoop(100, columnSelected, lastInd, isX);
    }else{
        slot.innerText = "O";
        timedLoop(100, columnSelected, lastInd, isX);
    }
    isX = !isX;
    
}

c4Headers.forEach((e, i, a) => {
    e.dataset.column = i;
    e.onclick = nextMove;
})

c4s.forEach((e, i, a) => {
    e.innerText = i;
    e.dataset.column = i % 7;
    e.dataset.index = i;
})

function sayHi(){
    console.log("hi");
}



const button = document.querySelector("button");

button.onclick = () =>{
    c4s.forEach((e, i) => {
        e.innerText = i;
        e.classList.remove("x");
        e.classList.remove("o");
    })
}


const c4one = [...document.querySelectorAll('.c4[data-column="0"]')]
const len = c4one.length;




function timedLoop(delay, column, lastindex, Xis) {
    console.log(lastindex);
    let sub = `.c4[data-column="${column}"]`;
    const c4col = [...document.querySelectorAll(sub)];

    let counter = 0; // Tracks the current iteration

    // Start the interval and save its unique ID
    const intervalId = setInterval(() => {

        // 1. Run your loop logic here
        console.log(`Iteration number: ${counter}`);

        if(Xis){
            if (counter == 0) {
            c4col[counter].classList.add("x");
        } else {
            c4col[counter - 1].classList.remove("x");
            c4col[counter - 1].classList.remove("o");
            c4col[counter].classList.add("x");
        }

        }else{
            if (counter == 0) {
            //c4s.innerHTML = "<div style='color = alice-blue'>" + c4s.innerText + "</div>";
            c4col[counter].classList.add("o");
        } else {
            c4col[counter - 1].classList.remove("o");
            c4col[counter - 1].classList.remove("x");
            c4col[counter].classList.add("o");
        }

        }
        
        counter++; // Increment the counter

        // 2. Check the exit condition
        if (counter >= lastindex +1) {
            clearInterval(intervalId); // Stop the loop
            console.log("Loop finished!");
        }

    }, delay);
}



// Example: Run 5 times, waiting 1 second (1000ms) between each run



/*()
onload = (event) => {
    
    document.querySelector("#reset").addEventListener('click', e => {
      for(let i = 0; i <= 4; i ++){
        console.log("Hi");
        setTimeout(2000);
      }
    })

    function spam(){
        for(let i = 0; i <= 4; i ++){
        console.log("Hi");
        setTimeout(2000);
      }
    }
}


function play(delay, column, lastindex, slot, text) {
    let sub = `.c4[data-column="${column}"]`;
    const c4col = [...document.querySelectorAll(sub)];

    let counter = 0; // Tracks the current iteration

    // Start the interval and save its unique ID
    const intervalId = setInterval(() => {

        // 1. Run your loop logic here
        

        counter++; // Increment the counter

        // 2. Check the exit condition
        if (counter >= lastindex) {
            clearInterval(intervalId); // Stop the loop
            console.log("Loop finished!");
        }

    }, delay);
}

function play(delay){
    let sub = `.c4[data-column="0"]`;
    const c4col = [...document.querySelectorAll(sub)];

    let counter = 0; // Tracks the current iteration

    // Start the interval and save its unique ID
    const intervalId = setInterval(() => {

        // 1. Run your loop logic here
        console.log("HI");

        counter++; // Increment the counter

        // 2. Check the exit condition
        if (counter >= 5) {
            clearInterval(intervalId); // Stop the loop
            console.log("Loop finished!");
        }

    }, delay);
}
    */