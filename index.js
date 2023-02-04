
const wel=document.getElementById('maincraft');
const welcomeArr=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    
];



function getDiv(){
    const drawDiv=document.createElement('div');
    return drawDiv;
}

function draw(gameb, cls,i,j){

    const drawDiv=getDiv();
    drawDiv.classList.add(cls);
    drawDiv.style.gridRowStart=i+1;
    drawDiv.style.gridColumnStart=j+1;
    // drawDiv.setAttribute(cls,true);
    gameb.appendChild(drawDiv);
    // setInterval(, 1000);
    
}

// console.log(welcomeArr.length);

// console.log(welcomeArr.length);
//==========DRAWING MAP====================================
function drawMap(){

    for (let i = 0; i < welcomeArr.length; i++) {
        for (let j = 0; j < welcomeArr[i].length; j++) {
            const element = welcomeArr[i][j];
                    if(element===1){
                    // draw(gameb, cls,i,j);
                    draw(wel,'ground',i,j);
                    
                }
                
        }   
    }
}


drawMap();