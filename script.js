let boxes = document.querySelectorAll(".box");
let resetgame = document.querySelector("#resetBtn");
let newgame = document.querySelector("#newBtn");
let winnertxt = document.querySelector("#winner");

turnO = true;
let winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];



const showWinner = (winner) =>{
  winnertxt.innerHTML =  `winner is ${winner}`;
}

const checkWinner = () => {
  for(pattern of winPatterns){
    let  value1 = boxes[pattern[0]].innerHTML;        
    let  value2 = boxes[pattern[1]].innerHTML;        
    let  value3 = boxes[pattern[2]].innerHTML;    
    if(value1 != "" && value2 != "" && value3 != ""){
      if(value1===value2 && value2===value3){
        for(box of boxes){
        box.disabled = true;
        }
        showWinner(value1);
        for(let i=0;i<3;i++){
          boxes[pattern[i]].style.backgroundColor = "#3c4948ff";
        }

      }
    }
  }
}
let count = 0;
boxes.forEach((box)=>{
  box.addEventListener("click",() => {
    if(turnO) {
      box.innerHTML = "o";
      turnO = false;
    }
    else{
      box.innerHTML = "x";
      turnO = true;
    }

    box.disabled = true;
    count++;
    checkWinner();
    if(count==9 && winnertxt.innerHTML=="" ){
      winnertxt.innerHTML =  `DRAW`;
    }

  })
})


resetgame.addEventListener("click",()=>{
  turnO = true;
  for(box of boxes){
    box.disabled = false;
    box.innerHTML = "";
    winnertxt.innerHTML = "";
    box.style.backgroundColor = "#121212"
  }
})
newgame.addEventListener("click",()=>{
  turnO = true;
  for(box of boxes){
    box.disabled = false;
    box.innerHTML = "";
    winnertxt.innerHTML = "";
    box.style.backgroundColor = "#121212"
  }
})
