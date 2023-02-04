



const gameBoard=document.getElementById('game-board')



const mapArr=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,7,7,7,7,7,0,0,0,5,5,5,5,5,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,7,7,7,7,0,0,0,5,5,5,5,5,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,5,5,5,0,0,0,0],
    [2,2,0,0,0,0,0,0,5,5,0,0,0,4,0,0,0,0,5,5,5,0,0,0,0],
    [3,3,2,2,0,0,0,5,5,5,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0],
    [3,3,3,3,6,0,5,5,5,5,0,0,0,4,0,0,0,0,0,4,5,5,0,0,0],
    [3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,6],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,6],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];

let axeBool=false;
let pickAxeBool=false;
let shovelBool=false;

let woodInvBool=false;
let groundInvBool=false;
let stoneInvBool=false;


let useTools=false;
let useInv=false;

function stopTakingFromInv(){
    woodInvBool=false;
    groundInvBool=false;
    stoneInvBool=false;
}

function resetTools(){
    axeBool=false;
    pickAxeBool=false;
    shovelBool=false;

}





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
// gameBoard.classList.add('stone-cur');
// gameBoard.style.cursor='url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png"), auto;'

//===================REMOVE ITEM FROM INVENTORY==========

function takeMarkerInv(){
    const invBox=document.getElementsByClassName('img-inventory');
    for (let i = 0; i < invBox.length; i++) {
        const element = invBox[i];
        element.setAttribute('choosen',false);
        element.parentElement.style.border='2px solid transparent';
    }
}


function myFunction(box){
    removeCur();
    resetTools();
    takeMarkerTool();
    takeMarkerInv();

    box.setAttribute('choosen',true);
    groundInvBool=document.getElementById('inv-g').getAttribute('choosen');
    stoneInvBool=document.getElementById('inv-s').getAttribute('choosen');
    woodInvBool=document.getElementById('inv-w').getAttribute('choosen');
    box.parentElement.style.border='2px solid orange'; 
    
    if(groundInvBool==='true'){
        
        gameBoard.classList.add('ground-cur');
        
    } 
    if(stoneInvBool==='true'){
        
        gameBoard.classList.add('stone-cur');
    } 
    if(woodInvBool==='true'){
        
        gameBoard.classList.add('wood-cur');
    } 

    
    return box;
}

function invMinus(e){
    let counter=Number(e.innerText);
    console.log("main counter: "+counter);
    console.log("inv num: "+e.getAttribute('id'));
    if(e.getAttribute('id')==='amount-stone'){
        countStone.innerText=Number(counter-1);
        item='ground';
        console.log("stone counter: "+counter);
        
        gameBoard.classList.add('stone-cur');
    }
    if(e.getAttribute('id')==='amount-wood'){
        countWood.innerText=Number(counter-1);
        item='wood';
        gameBoard.classList.add('wood-cur');
        console.log("wood counter: "+counter);
    }
    if(e.getAttribute('id')==='amount-ground'){
        countGround.innerText=Number(counter-1);
        item='ground';
        gameBoard.classList.add('ground-cur');
        console.log("ground counter: "+counter);
    }


}

// function inventoryTakeOut(e2){
//     // myFunction(e2);
//     resetTools();
//     let item='';
//     let counter=Number(e2.innerText);
    
//     console.log("inv num: "+e2.getAttribute('id'));
//     if(e2.getAttribute('id')==='amount-stone'){
//         countStone.innerText=Number(counter-1);
//         item='ground';
        
//         gameBoard.classList.add('stone-cur');
//     }
//     if(e2.getAttribute('id')==='amount-wood'){
//         countWood.innerText=Number(counter-1);
//         item='wood';
//         gameBoard.classList.add('wood-cur');
//     }
//     if(e2.getAttribute('id')==='amount-ground'){
//         countGround.innerText=Number(counter-1);
//         item='ground';
//         gameBoard.classList.add('ground-cur');
//     }
    
//     return item;
// }

//===================REMOVE ITEM FROM INVENTORY FINISH===

//==========Inventory Counter FINISHED===============

//==========CHOOSING TOOL========================

function takeMarkerTool(){
    const myTools=document.getElementsByClassName('tool');
    for (let i = 0; i < myTools.length; i++) {
        const element = myTools[i];
        element.setAttribute('choosen',false);
        element.style.border='0px solid transparent';
    }
}

function getTool(tool){
    removeCur();
    stopTakingFromInv();
    takeMarkerTool();
    takeMarkerInv();
    
    tool.setAttribute('choosen',true);
    axeBool=document.getElementById('axe').getAttribute('choosen');
    pickAxeBool=document.getElementById('pick-axe').getAttribute('choosen');
    shovelBool=document.getElementById('shovel').getAttribute('choosen');
    tool.style.border='2px solid orange'; 
    
    if(axeBool==='true'){
        removeCur();
        gameBoard.classList.add('axe-cur');
    } 
    if(pickAxeBool==='true'){
        removeCur();
        gameBoard.classList.add('pickaxe-cur');
    } 
    if(shovelBool==='true'){
        removeCur();
        gameBoard.classList.add('shovel-cur');
    } 
    return tool;
}
//==========CHOOSING TOOL FINISHED========================

//remove curosrs
function removeCur(){
    gameBoard.classList.remove('axe-cur');
    gameBoard.classList.remove('pickaxe-cur');
    gameBoard.classList.remove('shovel-cur');
    gameBoard.classList.remove('ground-cur');
    gameBoard.classList.remove('stone-cur');
    gameBoard.classList.remove('wood-cur');
}
//=================================================

function drawFromInventory(e){

}



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
    drawDiv.setAttribute('i',i+1);
    drawDiv.setAttribute('j',j+1);
    
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
let chosenClass;
window.addEventListener('click', e=>{
    const clickedDiv=e.target;

    if(clickedDiv.classList.value===''){
        console.log("choseeeeeeen: "+chosenClass);
        clickedDiv.classList.add(chosenClass);
        
    }

    if(e.target.getAttribute('id')==='axe' || e.target.getAttribute('id')==='pick-axe'||
    e.target.getAttribute('id')==='shovel'){
       const myTool= getTool(document.getElementById(e.target.getAttribute('id')));
       
    }

    if(e.target.getAttribute('id')==='inv-g' || e.target.getAttribute('id')==='inv-w'||
    e.target.getAttribute('id')==='inv-s'){
        if(e.target.getAttribute('id')==='inv-g') chosenClass='ground';
        if(e.target.getAttribute('id')==='inv-s') chosenClass='stone';
        if(e.target.getAttribute('id')==='inv-w') chosenClass='wood';
        console.log("chosen class"+chosenClass);
        myFunction(clickedDiv);
        invMinus(clickedDiv);
    }
    
   
    if (shovelBool==='true' && clickedDiv.getAttribute('class')==='ground'){
        countItems(clickedDiv,countGround);
        clickedDiv.classList.remove(...clickedDiv.classList);
    }
    if (axeBool==='true' && clickedDiv.getAttribute('class')==='wood'){
        countItems(clickedDiv,countWood);
        clickedDiv.classList.remove(...clickedDiv.classList);
    }
    if (pickAxeBool==='true' && clickedDiv.getAttribute('class')==='stone'){
        countItems(clickedDiv,countStone);
        clickedDiv.classList.remove(...clickedDiv.classList);
    }

   


});


