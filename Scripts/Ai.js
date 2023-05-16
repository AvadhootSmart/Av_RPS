// ROUND 1


// Add a reset button (working)

draw = () => {
    const pl = playermoves[0]
    const ai = aimoves[0]
    // console.log(pl)
    // console.log(ai)

    if (pl === ai) {
        console.log("1-1")
        draws++
        updatedraws(draws)
        resultPl = document.getElementById('scpl-1')
        resultAi = document.getElementById('scai-1')
        resultPl.style.backgroundColor = "Grey"
        resultAi.style.backgroundColor = "Grey"

    }
}

// playerwins = 0
plwin = () => {
    // pl = playermoves[0]
    // ai = aimoves[0]
    const pl = playermoves[0]
    const ai = aimoves[0]

    if ((pl === "Rock" || "Paper" || "Scissors") && (ai === "Scissors" || "Rock" || "Paper")) {

        if (pl === "Rock" && ai === "Scissors") {
            console.log("1-0")
            playerwins++
            updatewins(playerwins)
            resultPl = document.getElementById('scpl-1')
            resultAi = document.getElementById('scai-1')
            // console.log(resultWin)
            resultPl.style.backgroundColor = "Green"
            resultAi.style.backgroundColor = "Red"


        }
        else if (pl === "Paper" && ai === "Rock") {
            console.log("1-0")
            playerwins++
            updatewins(playerwins)
            resultPl = document.getElementById('scpl-1')
            resultAi = document.getElementById('scai-1')
            // console.log(resultWin)
            resultPl.style.backgroundColor = "Green"
            resultAi.style.backgroundColor = "Red"

        }
        else if (pl === "Scissors" && ai === "Paper") {
            console.log("1-0")
            playerwins++
            updatewins(playerwins)
            resultPl = document.getElementById('scpl-1')
            resultAi = document.getElementById('scai-1')
            // console.log(resultWin)
            resultPl.style.backgroundColor = "Green"
            resultAi.style.backgroundColor = "Red"
        }
    }
}

aiwin = () => {
    // pl = playermoves[0]
    // ai = aimoves[0]
    const pl = playermoves[0]
    const ai = aimoves[0]

    if ((pl === "Rock" || "Paper" || "Scissors") && (ai === "Scissors" || "Rock" || "Paper")) {

        if (pl === "Scissors" && ai === "Rock") {
            console.log("0-1")
            aiwins++
            updatelosses(aiwins)
            resultPl = document.getElementById('scpl-1')
            resultAi = document.getElementById('scai-1')
            // console.log(resultWin)

            resultPl.style.backgroundColor = "Red"
            resultAi.style.backgroundColor = "Green"

        }
        else if (pl === "Rock" && ai === "Paper") {
            console.log("0-1")
            aiwins++
            updatelosses(aiwins)
            resultPl = document.getElementById('scpl-1')
            resultAi = document.getElementById('scai-1')
            // console.log(resultWin)
            resultPl.style.backgroundColor = "Red"
            resultAi.style.backgroundColor = "Green"

        }
        else if (pl === "Paper" && ai === "Scissors") {
            console.log("0-1")
            aiwins++
            updatelosses(aiwins)
            resultPl = document.getElementById('scpl-1')
            resultAi = document.getElementById('scai-1')
            // console.log(resultWin)
            resultPl.style.backgroundColor = "Red"
            resultAi.style.backgroundColor = "Green"

        }
    }

}
updatewins = () => {

    winsEle = document.getElementById("W")
    winsEle.innerHTML = `Wins: ${playerwins}`
}
updatelosses = () => {

    lossEle = document.getElementById("L")
    lossEle.innerHTML = `Losses: ${aiwins}`
}
updatedraws = () => {
    drawEle = document.getElementById("D")
    drawEle.innerHTML = `Draws: ${draws}`
}


// let nextRound = false
Next = () => {
    nextRound = true
    textpl.textContent = "Player:"
    aitext.textContent = "AI:"
    moveplayed = false
    alreadyClicked = false
    aimove = generateAimove(aimovesarr)
    aimoves.push(aimove)
    PLmove1.addEventListener('dblclick', clickedrck)
    PLmove2.addEventListener('dblclick', clickedpap)
    PLmove3.addEventListener('dblclick', clickedsci)
    playermoves.splice(0, playermoves.length)
    aimoves.splice(0, aimoves.length)
    resultPl.style.backgroundColor = "black"
    resultAi.style.backgroundColor = "black"


}

Reset = ()=>{
    w = document.getElementById('W')
    l = document.getElementById('L')
    dr = document.getElementById('D')
    w.innerHTML = `Win:`
    l.innerHTML = `Loss:`
    dr.innerHTML = `Draws:`
    playerwins = 0
    aiwins = 0
    draws = 0
}



function openPopup() {
  popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

























