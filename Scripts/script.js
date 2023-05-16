let playermoves = []
let aimoves = []
let textpl = document.getElementById("pl-m")
let aitext = document.getElementById("ai-m")
let aimovesarr = ["Rock", "Paper", "Scissors"]
let alreadyClicked = false
let moveplayed = false
let playerwins = 0
let aiwins = 0
let draws = 0
const i = Math.floor(Math.random() * aimovesarr.length)
const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.close-btn');
const openBtn = document.querySelector('.open-btn');

generateAimove = (aimovesarr)=>{
    const i = Math.floor(Math.random()*aimovesarr.length)
    aimove = aimovesarr[i]
    aimoves.splice(i , 1)
    return aimove
}

clickedrck = () => {
    if (!alreadyClicked) {
        alreadyClicked = true
        move = "Rock"
        textpl.textContent += " " + move
        playermoves.push(move)
        aimove = generateAimove(aimovesarr)
        aimoves.push(aimove)    
        aitext.textContent += " " + aimove
        moveplayed = true
        PLmove1.removeEventListener('dblclick', clickedrck)
        showpoints()
        


    }
}


clickedpap = () => {
    if (!alreadyClicked) {
        alreadyClicked = true
        moveplayed = true
        move = "Paper"
        playermoves.push(move)
        textpl.textContent += " " + move
        aimove = generateAimove(aimovesarr)
        aimoves.push(aimove)    
        
        aitext.textContent += " " + aimove
        PLmove2.removeEventListener('dblclick', clickedpap)
        showpoints()
        

    }
}

clickedsci = () => {
    if (!alreadyClicked) {
        alreadyClicked = true
        moveplayed = true
        move = "Scissors"
        textpl.textContent += " " + move
        playermoves.push(move)
        aimove = generateAimove(aimovesarr)
        aimoves.push(aimove)    
        
        aitext.textContent += " " + aimove
        PLmove3.removeEventListener('dblclick', clickedsci)
        showpoints()
        
    }

}


// Converts the images into a button

let PLmove1 = document.getElementById('rock-img')
PLmove1.addEventListener('dblclick', clickedrck);

let PLmove2 = document.getElementById('paper-img')
PLmove2.addEventListener('dblclick', clickedpap);

let PLmove3 = document.getElementById('scissors-img')
PLmove3.addEventListener('dblclick', clickedsci);

// countdown timer used in bugged startgame button

timer = () => {
    let cntdwn = document.getElementById('rnd-call')
    let count = 3
    countdown = setInterval(() => {
        if (count === 3) {
            cntdwn.textContent = "ROCK..."
        }
        else if (count === 2) {
            cntdwn.textContent = "PAPER..."
        }
        else if (count === 1) {
            cntdwn.textContent = "SCISSORS..."
            
        }
        count--
        
        if (count < 0) {

            cntdwn.textContent = "SHOOT!!!"
            clearInterval(countdown)
        }
        
    }, 1000)
    
}

//Win-loss indicator
let nextRound = false   
showpoints = () => {
    if (moveplayed = true) {
       const pl = playermoves[0]
      const  ai = aimoves[0]
        // console.log(pl)
        // console.log(ai)
        aiwin()
        plwin()
        draw()
        
    }
}










// the start button is bugged fix or create a new logic for it


// let rcall;
// const startGame = document.getElementById('start-btn');
// startGame.addEventListener('click', () => {

//         if (!alreadyClicked) {
//                 alreadyClicked = true
//                 const body = document.getElementsByTagName('body')[1];
//                 const rcall = document.createElement('h3');
//                 rcall.setAttribute("id", "rnd-call")
//                 rcall.textContent = 'ROUND 1';
//                 startGame.insertAdjacentElement("afterend", rcall)
//                 timer()
//                 startGame.removeEventListener('click', arguments.callee)
//             }
        
//     })
// gamefunc =() =>{
//     if (!alreadyClicked) {
//         alreadyClicked = true
//         const body = document.getElementsByTagName('body')[1];
//         const rcall = document.createElement('h3');
//         rcall.setAttribute("id", "rnd-call")
//         rcall.textContent = 'ROUND 1';
//         startGame.insertAdjacentElement("afterend", rcall)
//         timer()
//         startGame.removeEventListener('click', gamefunc)
//         startGame.removeEventListener('dblclick', gamefunc)
//     }
// }






