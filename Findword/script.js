const listOfQuestions= [{clue:"This city is famous for its Marina Beach.",ans:"Chennai"},
    {clue:"This former President of India was a renowned aerospace scientist.",ans:"AbdulKalam"},
    {clue:"A powerful predator with stripes.",ans:"BengalTiger"},
    {clue:"This city is famous for its distinct color and royal architecture.",ans:"Jaipur"},
    {clue:"She was the daughter of Jawaharlal Nehru.",ans:"Indira Gandhi"},
    {clue:"This state is in the northwest and is an agricultural hub.",ans:"Punjab"},
    {clue:"It is one of the Dravidian languages.",ans:"Kannada"},
    {clue:"This song was written by a Bengali poet.",ans:"BankimChandra"},
    {clue:"Located in the Himalayas,this state is famous for scenic beauty.",ans:"Uttarakhand"},
    {clue:"This river often causes floods during the monsoon season.",ans:"Damodar"},
    {clue:"He won it for his discovery of the scattering of light, named after him.",ans:" CVRaman"},
    {clue:"This city is home to Bollywood and the Bombay Stock Exchange.",ans:"Mumbai"},
    {clue:"It is celebrated with lamps, sweets, and fireworks.",ans:"Diwali"},
    {clue:"This South Indian state is known for its cultural heritage.",ans:"TamilNadu"},
    {clue:"These mountains are home to the highest peaks in the world.",ans:"Himalayas"},
    {clue:"This event was a key moment in the Indian independence movement.",ans:"DandiMarch"},
    {clue:"He collaborated with The Beatles and is globally renowned musician.",ans:"RaviShankar"},
    {clue:"This state lies in northern India and agricultural heartland.",ans:"UttarPradesh"}];



const tip=document.querySelector(".tip");
const words=document.querySelector(".word");
const guessCount=document.querySelector(".guessCount");
const letterType=document.querySelector("#letter");
const submit=document.querySelector("#submit");
const note=document.querySelector(".note");
const reset=document.querySelector(".reset");
let wrongcount=5;
document.addEventListener('DOMContentLoaded',()=>{
    const ind=Math.floor(Math.random()*listOfQuestions.length);
    tip.innerHTML=`"${listOfQuestions[ind].clue}"`;
    let wrd=listOfQuestions[ind].ans;
    for(let i=0;i<wrd.length;i++){
        let ele=document.createElement("div");
         words.appendChild(ele);
    }
    let wrdsForLetters=document.querySelectorAll(".word div");
    let count=Math.floor(wrd.length/3)+1;
    let storeLetter=[];
    while(storeLetter.length<count){
        let randomInd=Math.floor(Math.random()*wrd.length);
        if(!storeLetter.includes(randomInd)){
            wrdsForLetters[randomInd].innerHTML=wrd[randomInd];
            storeLetter.push(randomInd);
        }
    }
    let finish=false;
    submit.addEventListener('click',()=>{
        sub=true;
        if(!finish){
            wrd.toLowerCase();
           console.log(wrd);
         for(let i=0;i<wrd.length && sub==true;i++){
            sub=false;
            let gussedLetter=letterType.value;
            gussedLetter.toLowerCase();
            console.log(wrd.includes(gussedLetter));
            if(wrd.includes(gussedLetter)){
              let crtletterind=null;
              console.log(storeLetter);
              for(let j=0;j<wrd.length;j++){
                console.log("storedE",storeLetter.includes(j));
                if((!storeLetter.includes(j))&& wrd[j]==gussedLetter){
                    crtletterind=j;
                }
              }
               if(crtletterind===null){
                guessCount.innerHTML=`You have still ${--wrongcount} chances`;
                note.innerHTML="Wrong anwer, please try again";
                note.style.color="red";
               }
                
               else if(!storeLetter.includes(crtletterind)) {
                wrdsForLetters[crtletterind].innerHTML=wrd[crtletterind];
                storeLetter.push(crtletterind);
                note.innerHTML="Your guess is correct, try next letter";
                note.style.color="green";
                if(storeLetter.length==wrd.length){
                    note.innerHTML=`Congratulations, You guessed the word "${wrd}"`;
                    finish=true;
                }
               }
                
                else{
                    console.log(guessCount);
                    guessCount.innerHTML=`You have still ${--wrongcount} chances`;
                    note.innerHTML="Wrong anwer, please try again";
                    note.style.color="red";
                }          
            }
            else{
                console.log(guessCount);
                guessCount.innerHTML=`You have still ${--wrongcount} chances`;
                note.innerHTML="Wrong anwer, please try again";
                note.style.color="red";
            }
          }
        }
    })
})
reset.addEventListener('click',()=>{
        location.reload();
})

