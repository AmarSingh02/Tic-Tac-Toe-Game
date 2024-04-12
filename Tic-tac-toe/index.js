let currentPlayer="X";
const gameWinner=document.getElementById("gameWinner");
let arr=Array(9).fill(null);

function playerWinner(){
        if (
          (arr[0]!== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
          (arr[3]!== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
          (arr[6]!== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
          (arr[0]!== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
          (arr[1]!== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
          (arr[2]!== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
          (arr[0]!== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
          (arr[2]!== null && arr[2] == arr[4] && arr[4] == arr[6])
        ) {
         gameWinner.innerHTML= (`Winner is ${currentPlayer}`);
          return;
        }

        if(!arr.some((e)=> e === null)){
            gameWinner.innerHTML= (`Opps Match is Draw. Try agin?`);
        }
  
}
const attempts=0;
function handleClick(ele){
const id=Number(ele.id);
if(arr[id]!=null) return;
attempts++;
arr[id]=currentPlayer;
ele.innerText=currentPlayer;
        if(attempts>=4){
            playerWinner();    
        }

currentPlayer = currentPlayer === "X" ? "O" : "X";


}

// const resetButton = document.getElementById("resetButton");
// resetButton.addEventListener('click', handleReset)
function handleReset() {
    window.location.reload(); // Reloads the current page
  }
  
