// children property of a parent container
// array delete method
// setAttribute, removeAttribute
// how name is removed from list - line 50, line 78

let addBtn = document.querySelector('#add-btn');
let inputField = document.querySelector('#name-input');
let namesBox = document.querySelector('#names-box');
let winnerBtn = document.querySelector('#winner-btn');
let winnerName = document.querySelector('#winner-name');
let removeBtn = document.querySelectorAll('.remove-btn');
let contentBox = document.querySelector("#content-box");


addBtn.addEventListener("click", addName);
winnerBtn.addEventListener("click", guessRandomName);

// ----- this is to be noted on how enter key clicks a button ------
document.addEventListener('keypress', enterKeyPress);
function enterKeyPress(event){
    if(event.key === 'Enter'){
        addBtn.click();
    }
}

function addName(){
    if(namesBox.children.length < 1){
        winnerName.setAttribute('class', 'hide pd-5');
    }

    if(inputField.value != ""){

        let newName = document.createElement('div');
        newName.setAttribute("class", "names-item pd-5 bdr-15");

        let nameEntered = inputField.value // name entered in input field
        
        let newNamePara = document.createElement('p');
        let newRemoveBtn = document.createElement('button');
    
        newNamePara.setAttribute('class', 'name');
        newRemoveBtn.setAttribute('class', 'remove-btn pd-5 bdr-15 btn');
        newRemoveBtn.setAttribute('type', 'button');
        newRemoveBtn.setAttribute('title', 'name-remove-button');
        // this onClick functionality is to be noted down
        // newRemoveBtn.setAttribute('onClick', "removeName(" + row + ")");
        newRemoveBtn.addEventListener("click", function(){
            this.parentElement.remove();
        });

        newNamePara.textContent = nameEntered;
        newRemoveBtn.innerHTML = "<i class='fa-solid fa-trash' style='color: #ffffff;'></i>";

        // add name and remove button to newName
        newName.appendChild(newNamePara);
        newName.appendChild(newRemoveBtn);
        
        // add newName to namesBox
        namesBox.appendChild(newName);
        inputField.value = ""; // empty the input field
        saveData();
    }
    else{
        alert("Name cannot be empty");
    }
}

function guessRandomName(){
        winnerName.textContent = "";
        winnerName.removeAttribute('class');

        if(namesBox.children.length > 0){

            let winnerIndex = Math.floor(Math.random()*namesBox.children.length);

            // find winner from name-item paragraph
            let winner = namesBox.children[winnerIndex].children[0].textContent;
            winnerName.textContent = "Winner is: " + winner;
            namesBox.children[winnerIndex].remove();    // remove winner from list
            saveData();
        }
        
        else{
            winnerName.setAttribute('class', 'hide pd-15');
            alert("Cannot find winner from empty list")
        }
}
// function removeName(index){
//     // children property gives child at given index
//     // child index starts at 0
//     let childToDelete = namesBox.children[index];
//     namesBox.removeChild(childToDelete);
// }

// function saveData(){
//     localStorage.setItem("guesserData", namesBox.innerHTML);
// }
// function loadData(){
//     namesBox.innerHTML = localStorage.getItem("guesserData");
// }
// loadData();