let array=[];
//to create new array when page gets loaded for the first time
createNewArray();


//swap fn
function swap(ele1, ele2){
    const style1 = window.getComputedStyle(ele1);
    const style2 = window.getComputedStyle(ele2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    ele1.style.height = transform2;
    ele2.style.height = transform1;
}

let delay = 260; //260 ms

//delay function
function delayFunc(milisec){
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
let newDelay = document.querySelector('#speed_input');
// Event listener to update speed
newDelay.addEventListener('input', function(){
    delay = 320 - parseInt(newDelay.value);
});


function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}


//following part for creating new bars when slider is used
let arraySize = document.querySelector('#new_arr_size');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
});

const newArray = document.querySelector(".newArray"); //new array button


//enable buttons after sorting
function enableSorting(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
}

//disable buttons when one sort starts
function disableSorting(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
}

//disable size slider while sorting happens
let tyty=0;
function arraysizeToggle(tyty){
    if(tyty==1)
    document.querySelector("#new_arr_size").disabled = false;
    else
    document.querySelector("#new_arr_size").disabled = true;
}


//function to create bars
function createNewArray(barNo=100){
    deleteChild();  //deleting older bars if any
    array = [];  //empty array
    for (let i = 0; i < barNo; i++) {
        array.push(Math.floor(Math.random() * 240) + 1);
    }
    //console.log(array);
    const bars = document.querySelector("#bars");
    for (let i = 0; i < barNo; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        //Adds one or more class names to an element
        bar.classList.add('bar');
        bar.classList.add('flex-item');  //col added here
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
newArray.addEventListener("click", function(){
    createNewArray(arraySize.value);
});

