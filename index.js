// we have to store the counter everytime at some place in the script file
// listen for the clicks on the increment button
// incrementing the counter whenever the button is clicked
// change the count-el in the HTML to reflect the new count
//body of the function

let welcomeEl = document.getElementById("welcome-el")

let name = "Sai Sathvik"
let greetings = "Welcome Back "

welcomeEl.innerText = greetings + name
welcomeEl.innerText += "👏"

let countEl = document.getElementById("count-el") // pass in arguments -> chef is getElement by id then ingredients is count-el
let saveEl = document.getElementById("save-el")


let count = 0

function increment(){
    count += 1
    countEl.innerText = count
    // inner text is the text inside of the tag
    console.log(count) 
}

function save(){
    let previous = count + " - "
    saveEl.textContent += previous // += is important cause we need to have the previous elements records
    countEl.textContent = 0
    count = 0
}

// function refresh(){
//     count = 0;
//     countEl.innerText = 0;
// }
// THIS IS ONE OF THE METHOD THAT YOU CAN USE REFRESH BUTTON


// solving the spaces problem, when we give the " - " the space after dash is not working
// Google: Searching online
// Inner text alternative is mdn -> is nodetextContent (Node is a fancy way of saying html element) it represents the text contents and its descendents
// Innertext and textContent
