const discs=document.querySelectorAll(".disc");
const len=discs.length;
const cols=document.querySelectorAll(".col");
const rods=document.querySelectorAll(".rod");
const r3=document.querySelector("#r3");
const last=document.querySelector("#r1").lastChild;
const game=document.querySelector(".game");
const d1=document.getElementById("d1");
const d2=document.getElementById("d2");
const d3=document.getElementById("d3");
const r1=document.getElementById("r1");
let discSelect=null;
let currParent=null;
let c=0;
let stopf=false;
const reset=document.querySelector("#reset");
discs.forEach(ds =>{
    ds.addEventListener("dragstart",(e)=>{
        if(stopf!=true){
            document.getElementById("para").innerText="Don't Giveup";
        }
        discSelect=ds;
        currParent=discSelect.parentNode;
        e.dataTransfer.setData("text", ds.id);
        console.log("currenr",currParent);
    });
});
cols.forEach(col=>{
    col.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    let rod=null;
        col.addEventListener("drop",(e)=>{
            console.log(stopf);
      if(stopf!=true){
            rod=col.querySelector(".rod");
            const lastDisc=rod.querySelector(".disc:first-child");
            if(discSelect){
                let isLast=currParent.querySelector(".disc:first-child");
                if(discSelect===isLast){
                    if((!lastDisc || discSelect.clientWidth<lastDisc.clientWidth)){
                        rod.prepend(discSelect);
                        if(rod===r3){
                            c++;
                        }
                        if(currParent===r3){
                            c--;
        
                        }
                     discSelect = null;
                     currParent = null;
                     if(rod===r3 && c===3){
                        document.getElementById("para").innerText="Congratulations, Game Completed Successfully!";
                        stopf=true;
                        console.log("Completed");
                     }
                    }
                    }
            }
        }
            
     })
})
reset.addEventListener("click",()=>{
    r1.append(d1);
    r1.append(d2);
    r1.append(d3);
    document.getElementById("para").innerText="All the best";
    c = 0;
    stopf = false;
})

