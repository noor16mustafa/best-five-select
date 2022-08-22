const arrayOfplayer = [];

//click on select player button usng onclick function 
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

        console.log(arrayOfplayer.length);
    }

}