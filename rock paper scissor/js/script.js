const choices=['paper','rock','scissors'];

const buttons=document.querySelectorAll('.pick');
const scoreEL=document.getElementById('score');
const main=document.getElementById('main');
const selection=document.getElementById('selection');
const reset=document.getElementById('reset');
const user_select=document.getElementById('user_select');
const computer_select=document.getElementById('computer_select');
const winner=document.getElementById('win');

const openBtn=document.getElementById('open');
const closeBtn=document.getElementById('close');
const model=document.getElementById('model');

let userChoice=undefined;
let score=0;


buttons.forEach(button=>{
    button.addEventListener('click',()=> {
        userChoice=button.getAttribute('data-choice');
        
        checkWinner();

    });
});
function updatescore(value) {
    score+=value;
    scoreEL.innerText=score;

}


function pickRandomChoice() {
    return choices [Math.floor(Math.random() *choices.length)];

}
function checkWinner(){
    const computerChoice=pickRandomChoice();
    updateSelection(user_select,userChoice);
    updateSelection(computer_select,computerChoice);

    if(userChoice===computerChoice){
        //draw
        winner.innerText='draw'
    }
    else if((userChoice==='paper'&&computerChoice==='rock')||(userChoice==='rock'&& computerChoice==='scissors')||(userChoice==='scissors'&&computerChoice==='paper')
          

    ){
        updatescore(1);
        winner.innerText='win'
    }
    else{
        updatescore(-1);
        winner.innerText='lost'
    }
    main.style.display='none';
    selection.style.display='flex';
}
reset.addEventListener('click',() => {
  main.style.display='flex';
  selection.style.display='none'; 
});
openBtn.addEventListener('click',() => {
    modal.style.display='flex';
    
  });
  closeBtn.addEventListener('click',() => {
    modal.style.display='none';
     
  });
function updateSelection(selectionEl,choice){
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    const img=selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src=`./img/icon-${choice}.svg`;
    img.alt=choice;
}