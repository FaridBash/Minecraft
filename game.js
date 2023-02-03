



const gameBoard=document.getElementById('game-board')



const mapArr=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
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


function draw(gameb, cls,i,j){
    const div=document.createElement('div');
    div.classList.add(cls);
    div.style.gridRowStart=i+1;
    div.style.gridColumnStart=j+1;
    gameb.appendChild(div);
}

console.log(mapArr.length);

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