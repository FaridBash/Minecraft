
const wel=document.getElementById('maincraft');
const insBtn=document.getElementById('ins-btn');
const instSection=document.getElementById('inst-section');
insBtn.addEventListener('click', e=>{
    instSection.style.display='flex';
});
const backBtn=document.getElementById('back');
backBtn.addEventListener('click',e=>{
    instSection.style.display='none';
});
const welcomeArr=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [2,0,0,0,2,0,2,2,2,0,2,0,0,0,2,2,2,0,2,2,2,0,2,2,2,2,2,0,2,2,2,0,0,2,2,2,0,2,2,2],
    [1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1],
    [1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1],
    [1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1],
    [1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    
    
    
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
        let j=0;

        function myLoop(){
            const element = welcomeArr[i][j];
            setTimeout(() => {
                if(j<welcomeArr[i].length){
                    if(element===1){
                        draw(wel,'ground',i,j);
                        console.log("j in "+j);
                        console.log("arri "+welcomeArr[i].length);
                    }
                    if(element===2){
                        draw(wel,'ground-grass',i,j);
                    }
                    j++;
                    myLoop();
                }
            }, 70);
            
        }
        console.log(j);
        myLoop();

    }
}


drawMap();
