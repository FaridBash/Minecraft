



const gameBoard=document.getElementById('game-board')



const mapArr=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,7,7,7,7,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,5,0,0,5,5,5,0,0,0,0],
    [2,2,0,0,0,0,0,0,5,0,0,0,0,4,0,5,0,0,5,5,5,0,0,0,0],
    [3,3,2,2,0,0,0,5,5,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0],
    [3,3,3,3,6,0,5,5,5,0,0,0,0,4,0,0,0,0,0,4,5,5,0,0,0],
    [3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,6],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,6],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];

let axeBool=false;
let pickAxeBool=false;
let shovelBool=false;




//==========Inventory Counter========================
let counter=0;
let countStone=document.getElementById('amount-stone');
let countGround=document.getElementById('amount-ground');
let countWood=document.getElementById('amount-wood');
function countItems(e1, e2){
    counter=Number(e2.innerText);
    
    if(e1.getAttribute('class')==='stone'){
        countStone.innerText=(counter+1);
    }
    if(e1.getAttribute('class')==='wood'){
        countWood.innerText=(counter+1);
    }
    if(e1.getAttribute('class')==='ground'){
        countGround.innerText=(counter+1);
    }
    counter=0;
}

// gameBoard.style.cursor='url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png"), auto;'
let numberOfItemsInInvertory;
function inventoryTakeOut(e2){
    let item;
    numberOfItemsInInvertory=Number(e2.innerText);
    if(e1.getAttribute('class')==='stone'){
        countStone.innerText=(numberOfItemsInInvertory-1);
        item=document.getElementsByClassName('stone');
        
    }
    if(e1.getAttribute('class')==='wood'){
        countWood.innerText=(numberOfItemsInInvertory-1);
        item=document.getElementsByClassName('wood');
    }
    if(e1.getAttribute('class')==='ground'){
        countGround.innerText=(numberOfItemsInInvertory-1);
        item=document.getElementsByClassName('ground');
    }
    numberOfItemsInInvertory=Number(e2.innerText);
    return item;
}
//==========Inventory Counter FINISHED===============

const myTools=document.getElementsByClassName('tool');


//==========CHOOSING TOOL========================
function getTool(tool){

    for (let i = 0; i < myTools.length; i++) {
        const element = myTools[i];
        element.setAttribute('choosen',false);
        element.style.border='0px solid transparent';
    }
    
    tool.setAttribute('choosen',true);
    axeBool=document.getElementById('axe').getAttribute('choosen');
    pickAxeBool=document.getElementById('pick-axe').getAttribute('choosen');
    shovelBool=document.getElementById('shovel').getAttribute('choosen');
    tool.style.border='2px solid orange';    
    return tool;
}


//==========CHOOSING TOOL FINISHED========================


function getDiv(){
    const drawDiv=document.createElement('div');
    return drawDiv;
}

function draw(gameb, cls,i,j){

    const drawDiv=getDiv();
    drawDiv.classList.add(cls);
    drawDiv.style.gridRowStart=i+1;
    drawDiv.style.gridColumnStart=j+1;
    drawDiv.setAttribute(cls,true);
    gameb.appendChild(drawDiv);
    drawDiv.setAttribute('id',`${(i+1)}${(j+1)}`);
}


// console.log(mapArr.length);
//==========DRAWING MAP====================================
function drawMap(){

    for (let i = 0; i < mapArr.length; i++) {
        for (let j = 0; j < mapArr[i].length; j++) {
            const element = mapArr[i][j];
            // if(element==0){
                //     // draw(gameb, cls,i,j);
                //     draw(gameBoard, 'ground',i,j);
                // }
                if(element==1){
                    // draw(gameb, cls,i,j);
                    draw(gameBoard, 'sun',i,j);
                }
                if(element==2){
                    // draw(gameb, cls,i,j);
                    draw(gameBoard, 'ground-grass',i,j);
                }
                if(element==3){
                    // draw(gameb, cls,i,j);
                    draw(gameBoard, 'ground',i,j);
                }
                if(element==4){
                    // draw(gameb, cls,i,j);
                    draw(gameBoard, 'wood',i,j);
                }
                if(element==5){
                    // draw(gameb, cls,i,j);
                    draw(gameBoard, 'green',i,j);
                }
                if(element==6){
                    // draw(gameb, cls,i,j);
                    draw(gameBoard, 'stone',i,j);
                }
                if(element==7){
                    // draw(gameb, cls,i,j);
                    draw(gameBoard, 'cloud',i,j);
                }
        }   
    }
}


drawMap();
//==========DRAWING MAP FINISHED==========================


// Listening to clicks on the screen
window.addEventListener('click', e=>{

    const clickedDiv=e.target;
    
    if(e.target.getAttribute('id')==='axe' || e.target.getAttribute('id')==='pick-axe'||
    e.target.getAttribute('id')==='shovel'){
       const myTool= getTool(document.getElementById(e.target.getAttribute('id')));
       
    }
    
    console.log(clickedDiv.getAttribute('class'));
    console.log(shovelBool);
    if (shovelBool==='true' && clickedDiv.getAttribute('class')==='ground'){
        countItems(clickedDiv,countGround);
        clickedDiv.classList.remove('ground');
    }
    if (axeBool==='true' && clickedDiv.getAttribute('class')==='wood'){
        countItems(clickedDiv,countWood);
        clickedDiv.classList.remove('wood');
    }
    if (pickAxeBool==='true' && clickedDiv.getAttribute('class')==='stone'){
        countItems(clickedDiv,countStone);
        clickedDiv.classList.remove('stone');
    }
});


