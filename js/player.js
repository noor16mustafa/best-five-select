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

//get input value by function calling
function getInputFiledById(inputFiledId) {
    const getCostFiledValue = document.getElementById(inputFiledId);
    const costFiledValueString = getCostFiledValue.value;
    const costFiledValue = parseFloat(costFiledValueString);

    //validation check
    if ((isNaN(costFiledValue)) || (typeof costFiledValue !== "number") || (costFiledValue < 0)) {
        alert('Please provide valid Number');
        return true;
    } else {
        return costFiledValue;
    }


}

//setText by function calling
function setAmountById(textId, newAmount) {
    const textValueById = document.getElementById(textId);
    textValueById.innerText = newAmount;

}
//calculation when click on calculate button
document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayerCost = getInputFiledById('player_cost');
    if (perPlayerCost == true) {
        return;
    }

    const playerExpenses = perPlayerCost * arrayOfplayer.length;

    setAmountById('expense-value', playerExpenses);

})

//calculation when click on total calculate button
document.getElementById('total-calculate-btn').addEventListener('click', function () {
    const managerCost = getInputFiledById('manager-cost');
    const coachCost = getInputFiledById('coach-cost');

    if ((managerCost == true) || (coachCost == true)) {
        return;
    }

    const getplayerCost = document.getElementById('expense-value');
    const getPlayerCostString = getplayerCost.innerText;
    const playerCost = parseFloat(getPlayerCostString);


    const totalExpenses = managerCost + coachCost + playerCost;

    setAmountById('total-expenses', totalExpenses);
})