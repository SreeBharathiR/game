const game=document.querySelector(".game");
let para=document.querySelector("#para");
let reset=document.querySelector("#reset");
let b1=document.getElementsByClassName("box");
let play="X";
const winnerPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const btns=document.querySelectorAll(".box");
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(play==="X"){
             btn.innerHTML="X";
             para.innerText="Player O's turn";
             play="O";
        }
        else{
            btn.innerHTML="O";
            para.innerText="Player X's turn";
            play="X";
        }
        btn.disabled=true;
        checkWinner();
    });
});
const disableBtns=()=>{
    for(btn of btns){
        btn.disabled=true;
    }
}
const checkWinner=()=>{
    for(let pattern of winnerPatterns){
        let position1=btns[pattern[0]].innerText;
        let position2=btns[pattern[1]].innerText;
        let position3=btns[pattern[2]].innerText;
        if(position1!="" && position2!=""&& position3!=""){
            if(position1===position2 && position2===position3){
                para.innerText=position1 +" is a Winner";
                for(let i of pattern){
                    btns[i].classList.add("winner");
                }
                disableBtns();
            }
        }
    }
}
reset.addEventListener("click",()=>{
    for(let pattern of winnerPatterns){
        btns[pattern[0]].innerText="";
        btns[pattern[1]].innerText="";
        btns[pattern[2]].innerText="";
        btns[pattern[0]].disabled=false;
        btns[pattern[1]].disabled=false;
        btns[pattern[2]].disabled=false;
        for(let i of pattern){
            btns[i].classList.remove("winner");
        }
    }
})