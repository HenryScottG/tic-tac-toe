
let redPlayer='X';
let bluePlayer='Y'
let aDraw=()=>`Game is a draw.`;
let youWon=()=>`Player ${playerOne} is the winner.`;
let whosTurn=()=>`Its ${currentPlayer} turn.`;
let gameStart = true;
let currentPlayer = "X";
const statusDisplay = document.querySelector('.gamePlay');
let myCells=document.querySelectorAll('.cell');


const getCell = (event) => {
if (currentPlayer===redPlayer){
changeBoxColorToRed(event);

    event.target.style.backgroundColor='red';
    currentPlayer=bluePlayer; 
    event.target.removeEventListener('click', getCell)
    } else {
    event.target.style.backgroundColor='blue';
    currentPlayer=redPlayer; 
    event.target.removeEventListener('click', getCell)

    };
}
function changeBoxColorToRed(event){

// winLogic();
// currentPlayer=!currentPlayer;
    event.target.removeEventListener('click', getCell);     
}
function changeBoxColorToBlue(event){
    
}

    myCells.forEach(cell=>{
        document.addEventListener('click', getCell);  
    })


    
function refresh(){
    window.parent.location=window.parent.location.href;
}
