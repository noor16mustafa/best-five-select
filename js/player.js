// declare an array for storing the player name
const arrayOfplayer = [];

//function for showing the selceted player list 
function displayList(selectedPlayer) {

    const olList = document.getElementById('selseted-players');
    olList.innerHTML = "";
    //adding player in the select list using for loop
    for (let i = 0; i < selectedPlayer.length; i++) {
        const playerName = arrayOfplayer[i];

        const li = document.createElement("li");
        li.textContent = (i + 1 + '.  ') + playerName;
        olList.appendChild(li);
    }
}

//click on select player button using onclick function 
function playerSelect(selectBtn) {
    if (arrayOfplayer.length >= 5) {
        alert("Sorry !! You can't select more then 5 player ");
        return;
    } else {
        selectBtn.disabled = true;
        selectBtn.style.background = "rgba(255,0,0,0.6)";

        //get the player name from that selseted player
        const playerName = selectBtn.parentNode.parentNode.children[0].innerText;

        arrayOfplayer.push(playerName);

        displayList(arrayOfplayer);
    }

}
//***************************Calculation part********************* */

//setText by function calling
function setAmountById(textId, newAmount) {
    const textValueById = document.getElementById(textId);
    textValueById.innerText = newAmount;

}
//calculation when click on calculate button
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCostFiled = document.getElementById('player_cost');
    const perPlayerCostString = perPlayerCostFiled.value;
    const perPlayerCost = parseFloat(perPlayerCostString);

    const totalExpenses = perPlayerCost * arrayOfplayer.length;

    setAmountById('expense-value', totalExpenses);

})

document.getElementById('total-calculate-btn').addEventListener('click', function () {

})