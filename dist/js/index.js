let checkerArray = [];
let checkerArrayEdgeEast = [7,15, 23, 31, 39, 47, 55, 63];
let checkerArrayEdgeWest = [0, 8, 16, 24, 32, 40, 48, 56];
let checkerArrayEdgeSouth = [56, 57, 58, 59, 60, 61, 62, 63];
let checkerArrayEdgeNorth = [0,1,2,3,4,5,6,7];
let checkerArrayEdgeNorthWest = [0,1,2,3,4,5,6,7,8,16,24,32,40,48,56];
let checkerArrayEdgeNorthEast = [0,1,2,3,4,5,6,7,15,23,31,39,47,55, 63];
let checkerArrayEdgeSouthEast = [7, 15,23,31,39,47,55,56,57,58,59,60,61,62,63];
let checkerArrayEdgeSouthWest = [0, 8,16,24,32,40,48,56,57,58,59,60,61,62,63];

let turn = "black";
let opposingChecker = "white";
let yourChecker = "black";
let clickedSpace = 0;
let validMove = 0;
let scoreBlack = 0;
let scoreWhite = 0;
let potentialMovesArray = [];


for (let i = 0; i < 64; i++) {
    checkerArray.push([i,"none"])
};

const validCheckerPlace = () => {
  if (checkerArray[clickedSpace] === undefined) {
    return false;
  }
  if (checkerArray[clickedSpace][1] === "none") {
  return true;
  } else {
    return false;
  }
};

const countScore = () => {
  scoreBlack = 0;
  scoreWhite = 0;
  for (let i = 0; i < checkerArray.length; i++) {
    if (checkerArray[i][1] === "black") {
      scoreBlack = scoreBlack + 1;
    } else if (checkerArray[i][1] === "white") {
      scoreWhite = scoreWhite + 1;
  }
};
document.querySelector('#blackScore').textContent = scoreBlack;
document.querySelector('#whiteScore').textContent = scoreWhite;
};

const east = () => {
  let i = 1;
  let index = 0;
  let checkerChangeArray = [];
  let pushValue = 0;

  if (checkerArray[clickedSpace + i] === undefined){
    return;
  } else if(checkerArrayEdgeEast.includes(checkerArray[clickedSpace][0]) === true) {
    return;
  }


  if (checkerArray[clickedSpace + i][1] === opposingChecker) {
    while (checkerArray[clickedSpace + i][1] === opposingChecker) {
      pushValue = checkerArray[clickedSpace + i][0];
      checkerChangeArray.push(pushValue);
      if (checkerArrayEdgeEast.includes(checkerArray[clickedSpace + i][0]) === true) {
        return;
      }

      i++;
      if (checkerArray[clickedSpace + i] === undefined) {
        break;}

    }
  } else {
    return;
  } 
  if (checkerArray[clickedSpace + i] === undefined){
    return;
  }

  if (checkerArray[clickedSpace + i][1] === yourChecker) {
    checkerArray[clickedSpace][1] = yourChecker;
    for (j = 0; j < checkerChangeArray.length; j++) {
        index = checkerChangeArray[j];
        checkerArray[index][1] = yourChecker;
    }
    validMove = 1;
  } 
};

const west = () => {
  let i = -1;
  let index = 0;
  let checkerChangeArray = [];
  let pushValue = 0;

  if (checkerArray[clickedSpace + i] === undefined){
    return;
  } else if(checkerArrayEdgeWest.includes(checkerArray[clickedSpace][0]) === true) {
    return;
  }


  if (checkerArray[clickedSpace + i][1] === opposingChecker) {
    while (checkerArray[clickedSpace + i][1] === opposingChecker) {
      pushValue = checkerArray[clickedSpace + i][0];
      checkerChangeArray.push(pushValue);
      if (checkerArrayEdgeWest.includes(checkerArray[clickedSpace + i][0]) === true) {
        return;
      }
      i--;
      if (checkerArray[clickedSpace + i] === undefined){
        break;
      }
    }
  } else { return;} 
    
  if (checkerArray[clickedSpace + i] === undefined){
      return;
    }
  if (checkerArray[clickedSpace + i][1] === yourChecker) {
    checkerArray[clickedSpace][1] = yourChecker;
    for (j = 0; j < checkerChangeArray.length; j++) {
        index = checkerChangeArray[j];
        checkerArray[index][1] = yourChecker;
    }
    validMove = 1;
  }
};

const north = () => {
  let i = -8;
  let index = 0;
  let checkerChangeArray = [];
  let pushValue = 0;

if (checkerArray[clickedSpace + i] === undefined){
    return;
} else if(checkerArrayEdgeNorth.includes(checkerArray[clickedSpace][0]) === true) {
  return;
}

  if (checkerArray[clickedSpace + i][1] === opposingChecker) {
    while (checkerArray[clickedSpace + i][1] === opposingChecker) {
      pushValue = checkerArray[clickedSpace + i][0];
      checkerChangeArray.push(pushValue);
      if (checkerArrayEdgeNorth.includes(checkerArray[clickedSpace + i][0]) === true) {
        return;
      }
      i = i - 8;
      if (checkerArray[clickedSpace + i] === undefined){
        break;
      }
    }
  } else {
    return;}

  if (checkerArray[clickedSpace + i] === undefined){
    return;
  }
 
  if (checkerArray[clickedSpace + i][1] === yourChecker) {
    checkerArray[clickedSpace][1] = yourChecker;
    for (j = 0; j < checkerChangeArray.length; j++) {
        index = checkerChangeArray[j];
        checkerArray[index][1] = yourChecker;
    }
    validMove = 1;
  }
};

const south = () => {
  let i = 8;
  let index = 0;
  let checkerChangeArray = [];
  let pushValue = 0;

  if (checkerArray[clickedSpace + i] === undefined){
    return;
  } else if(checkerArrayEdgeSouth.includes(checkerArray[clickedSpace][0]) === true) {
    return;
  }

  if (checkerArray[clickedSpace + i][1] === opposingChecker) {
    while (checkerArray[clickedSpace + i][1] === opposingChecker) {
      pushValue = checkerArray[clickedSpace + i][0];
      checkerChangeArray.push(pushValue);
      if (checkerArrayEdgeSouth.includes(checkerArray[clickedSpace + i][0]) === true) {
        return;
      }
      i = i + 8;
      if (checkerArray[clickedSpace + i] === undefined) {
        break;
      }
    }
  } else {
    return;}
        
  if (checkerArray[clickedSpace + i] === undefined){
    return;
  }
  
  if (checkerArray[clickedSpace + i][1] === yourChecker) {
    checkerArray[clickedSpace][1] = yourChecker;
    for (j = 0; j < checkerChangeArray.length; j++) {
        index = checkerChangeArray[j];
        checkerArray[index][1] = yourChecker;
    }
    validMove = 1;
  }
};

const northEast = () => {
  let i = -7;
  let index = 0;
  let checkerChangeArray = [];
  let pushValue = 0;

  if (checkerArray[clickedSpace + i] === undefined){
    return;
  } else if(checkerArrayEdgeNorthEast.includes(checkerArray[clickedSpace][0]) === true) {
    return;
  }


  if (checkerArray[clickedSpace + i][1] === opposingChecker) {
    while (checkerArray[clickedSpace + i][1] === opposingChecker) {
      pushValue = checkerArray[clickedSpace + i][0];
      checkerChangeArray.push(pushValue);
      if (checkerArrayEdgeNorthEast.includes(checkerArray[clickedSpace + i][0]) === true) {
        return;
      }
      i = i - 7;
      if (checkerArray[clickedSpace + i] === undefined) {
        break;
      }
    }
  } else {
    return;}
        
  if (checkerArray[clickedSpace + i] === undefined){
    return;
  }
 

  if (checkerArray[clickedSpace + i][1] === yourChecker) {
    checkerArray[clickedSpace][1] = yourChecker;
    for (j = 0; j < checkerChangeArray.length; j++) {
        index = checkerChangeArray[j];
        checkerArray[index][1] = yourChecker;
    }
    validMove = 1;
  }
};

const southWest = () => {
  let i = 7;
  let index = 0;
  let checkerChangeArray = [];
  let pushValue = 0;

  if (checkerArray[clickedSpace + i] === undefined){
    return;
  } else if(checkerArrayEdgeSouthWest.includes(checkerArray[clickedSpace][0]) === true) {
    return;
  }


  if (checkerArray[clickedSpace + i][1] === opposingChecker) {
    while (checkerArray[clickedSpace + i][1] === opposingChecker) {
      pushValue = checkerArray[clickedSpace + i][0];
      checkerChangeArray.push(pushValue);
      if (checkerArrayEdgeSouthWest.includes(checkerArray[clickedSpace + i][0]) === true) {
        return;
      }
      i = i + 7;
      if (checkerArray[clickedSpace + i] === undefined) {
        break;
      }
    }
  } else {
    return;}
        
  if (checkerArray[clickedSpace + i] === undefined){
    return;
  }
 
  if (checkerArray[clickedSpace + i][1] === yourChecker) {
    checkerArray[clickedSpace][1] = yourChecker;
    for (j = 0; j < checkerChangeArray.length; j++) {
        index = checkerChangeArray[j];
        checkerArray[index][1] = yourChecker;
    }
    validMove = 1;
  }
};

const northWest = () => {
  let i = -9;
  let index = 0;
  let checkerChangeArray = [];
  let pushValue = 0;

  if (checkerArray[clickedSpace + i] === undefined){
    return; 
  } else if(checkerArrayEdgeNorthWest.includes(checkerArray[clickedSpace][0]) === true) {
    return;
  }


  if (checkerArray[clickedSpace + i][1] === opposingChecker) {
    while (checkerArray[clickedSpace + i][1] === opposingChecker) {
      pushValue = checkerArray[clickedSpace + i][0];
      checkerChangeArray.push(pushValue);
      if (checkerArrayEdgeNorthWest.includes(checkerArray[clickedSpace + i][0]) === true) {
        return;
      }
      i = i - 9;
      if (checkerArray[clickedSpace + i] === undefined) {
        break;
      }
    }
  } else {
    return;}
        
  if (checkerArray[clickedSpace + i] === undefined){
    return;
  }
    
  if (checkerArray[clickedSpace + i][1] === yourChecker) {
    checkerArray[clickedSpace][1] = yourChecker;
    for (j = 0; j < checkerChangeArray.length; j++) {
        index = checkerChangeArray[j];
        checkerArray[index][1] = yourChecker;
    }
    validMove = 1;
  }
};

const southEast = () => {
  let i = 9;
  let index = 0;
  let checkerChangeArray = [];
  let pushValue = 0;

  if (checkerArray[clickedSpace + i] === undefined){
    return;
  } else if(checkerArrayEdgeSouthEast.includes(checkerArray[clickedSpace][0]) === true) {
    return;
  }


  if (checkerArray[clickedSpace + i][1] === opposingChecker) {
    while (checkerArray[clickedSpace + i][1] === opposingChecker) {
      pushValue = checkerArray[clickedSpace + i][0];
      checkerChangeArray.push(pushValue);
      if (checkerArrayEdgeSouthEast.includes(checkerArray[clickedSpace + i][0]) === true) {
        return;
      }
      i = i + 9;
      if (checkerArray[clickedSpace + i] === undefined) {
        break;
      }
    }
  } else {
    return;}
        
  if (checkerArray[clickedSpace + i] === undefined){
    return;
  }
  
  if (checkerArray[clickedSpace + i][1] === yourChecker) {
    checkerArray[clickedSpace][1] = yourChecker;
    for (j = 0; j < checkerChangeArray.length; j++) {
        index = checkerChangeArray[j];
        checkerArray[index][1] = yourChecker;
    }
    validMove = 1;
  }
};


const colorCheckersVisual = () => {
  let idChecked = 0;
  for (let i = 0; i < checkerArray.length; i++) {
    if (checkerArray[i][1] === "black") {
      idChecked = String('#a' + String(i));
      document.querySelector(idChecked).classList.remove("none");
      document.querySelector(idChecked).classList.remove("white");
      document.querySelector(idChecked).classList.add("black");
    } else if (checkerArray[i][1] === "white") {
      idChecked = String('#a' + String(i));
      document.querySelector(idChecked).classList.remove("none");
      document.querySelector(idChecked).classList.remove("black");
      document.querySelector(idChecked).classList.add("white");
    } else if (checkerArray[i][1] === "none") {
      idChecked = String('#a' + String(i));
      document.querySelector(idChecked).classList.remove("white");
      document.querySelector(idChecked).classList.remove("black");
      document.querySelector(idChecked).classList.add("none");
    }
  }

};

const switchTurns = () => {
  if (turn === "black") {
    opposingChecker = "black";
    yourChecker = "white";
    turn = "white";
  } else if (turn === "white") {
    opposingChecker = "white";
    yourChecker = "black";
    turn = "black";
  };
  validMove = 0;
};

const turnMessage = () => {
  if (turn === "black") {
    document.querySelector('#turnMsg').textContent = "Black's turn";
  } else if (turn === "white") {
    document.querySelector('#turnMsg').textContent = "White's turn";
  }
};

const checkValidMoves = () => {
  potentialMovesArray = [];
  for (let i = 0; i < checkerArray.length; i++) {
    if (checkerArray[i][1] === "none") {
      potentialMovesArray.push(checkerArray[i][0]);
    }
  }
};

const checkEast = () => {

loop1:
 for (let j = 0; j < potentialMovesArray.length; j++){
    clickedSpace = potentialMovesArray[j];
    let i = 1;
    let idChecked = 0;
  

    if (checkerArray[clickedSpace + i] === undefined){
      continue loop1;
    } else if(checkerArrayEdgeEast.includes(checkerArray[clickedSpace][0]) === true) {
      continue loop1;
    }
  
  
    if (checkerArray[clickedSpace + i][1] === opposingChecker) {
      while (checkerArray[clickedSpace + i][1] === opposingChecker) {
        if (checkerArrayEdgeEast.includes(checkerArray[clickedSpace + i][0]) === true) {
          continue loop1;
        }
        if (checkerArray[clickedSpace + i + i] === undefined) {
          continue loop1;
        }
        i++;
        if (checkerArray[clickedSpace + i] === undefined) {
          continue loop1;}
      }
      if (checkerArray[clickedSpace + i] === undefined) {
        continue loop1;}
      if (checkerArray[clickedSpace + i][1] === yourChecker) {
        idChecked = String('#a' + String(clickedSpace));
        document.querySelector(idChecked).classList.add("orange");
        continue loop1;
       }  
    } 
  }
};

const checkWest = () => {

loop1:
 for (let j = 0; j < potentialMovesArray.length; j++){
    clickedSpace = potentialMovesArray[j];
    let i = -1;
    let idChecked = 0;
  

    if (checkerArray[clickedSpace + i] === undefined){
      continue loop1;
    } else if(checkerArrayEdgeWest.includes(checkerArray[clickedSpace][0]) === true) {
      continue loop1;
    }

    if (checkerArray[clickedSpace + i][1] === opposingChecker) {
      while (checkerArray[clickedSpace + i][1] === opposingChecker) {
        if (checkerArrayEdgeWest.includes(checkerArray[clickedSpace + i][0]) === true) {
          continue loop1;
        }
        if (checkerArray[clickedSpace + i + i] === undefined) {
          continue loop1;
        }
        
        i--;
        if (checkerArray[clickedSpace + i] === undefined) {
          continue loop1;}
      }
      if (checkerArray[clickedSpace + i][1] === yourChecker) {
        idChecked = String('#a' + String(clickedSpace));
        document.querySelector(idChecked).classList.add("orange");
        continue loop1;
      }   
    } 
  }
};

const checkNorth = () => {

loop1:
 for (let j = 0; j < potentialMovesArray.length; j++){
    clickedSpace = potentialMovesArray[j];
    let i = -8;
    let idChecked = 0;
  

    if (checkerArray[clickedSpace + i] === undefined){
      continue loop1;
    } else if(checkerArrayEdgeNorth.includes(checkerArray[clickedSpace][0]) === true) {
      continue loop1;
    }
    if (checkerArray[clickedSpace + i][1] === opposingChecker) {
      while (checkerArray[clickedSpace + i][1] === opposingChecker) {
        if (checkerArrayEdgeNorth.includes(checkerArray[clickedSpace + i][0]) === true) {
          continue loop1;
        }
        if (checkerArray[clickedSpace + i + i] === undefined) {
          continue loop1;
        }

        i = i - 8;
        if (checkerArray[clickedSpace + i] === undefined) {
          continue loop1;}
      }
      if (checkerArray[clickedSpace + i][1] === yourChecker) {
        idChecked = String('#a' + String(clickedSpace));
        document.querySelector(idChecked).classList.add("orange");
        continue loop1;
       }  
    } 
  }
};

const checkSouth = () => {

loop1:
 for (let j = 0; j < potentialMovesArray.length; j++){
    clickedSpace = potentialMovesArray[j];
    let i = 8;
    let idChecked = 0;

    if (checkerArray[clickedSpace + i] === undefined){
      continue loop1;
    } else if(checkerArrayEdgeSouth.includes(checkerArray[clickedSpace][0]) === true) {
      continue loop1;
    }
    if (checkerArray[clickedSpace + i][1] === opposingChecker) {
      while (checkerArray[clickedSpace + i][1] === opposingChecker) {
        if (checkerArrayEdgeSouth.includes(checkerArray[clickedSpace + i][0]) === true) {
          continue loop1;
        }
        if (checkerArray[clickedSpace + i + i] === undefined) {
          continue loop1;
        }
        i = i + 8;
        if (checkerArray[clickedSpace + i] === undefined) {
          continue loop1;}
      }
      if (checkerArray[clickedSpace + i][1] === yourChecker) {
        idChecked = String('#a' + String(clickedSpace));
        document.querySelector(idChecked).classList.add("orange");
        continue loop1;
       }  
    } 
  }
};

const checkNorthEast = () => {

loop1:
 for (let j = 0; j < potentialMovesArray.length; j++){
    clickedSpace = potentialMovesArray[j];
    let i = -7;
    let idChecked = 0;

    if (checkerArray[clickedSpace + i] === undefined){
      continue loop1;
    } else if(checkerArrayEdgeNorthEast.includes(checkerArray[clickedSpace][0]) === true) {
      continue loop1;
    }
    if (checkerArray[clickedSpace + i][1] === opposingChecker) {
      while (checkerArray[clickedSpace + i][1] === opposingChecker) {
        if (checkerArrayEdgeNorthEast.includes(checkerArray[clickedSpace + i][0]) === true) {
          continue loop1;
        }
        if (checkerArray[clickedSpace + i + i] === undefined) {
          continue loop1;
        }
       
        i = i - 7;
        if (checkerArray[clickedSpace + i] === undefined) {
          continue loop1;}
      }
      if (checkerArray[clickedSpace + i][1] === yourChecker) {
        idChecked = String('#a' + String(clickedSpace));
        document.querySelector(idChecked).classList.add("orange");
        continue loop1;
       }  
    } 
  }
};

const checkSouthWest = () => {

loop1:
 for (let j = 0; j < potentialMovesArray.length; j++){
    clickedSpace = potentialMovesArray[j];
    let i = 7;
    let idChecked = 0;

    if (checkerArray[clickedSpace + i] === undefined){
      continue loop1;
    } else if(checkerArrayEdgeSouthWest.includes(checkerArray[clickedSpace][0]) === true) {
      continue loop1;
    }
    if (checkerArray[clickedSpace + i][1] === opposingChecker) {
      while (checkerArray[clickedSpace + i][1] === opposingChecker) {
        if (checkerArrayEdgeSouthWest.includes(checkerArray[clickedSpace + i][0]) === true) {
          continue loop1;
        }
        if (checkerArray[clickedSpace + i + i] === undefined) {
          continue loop1;
        }
        i = i + 7;
        if (checkerArray[clickedSpace + i] === undefined) {
          continue loop1;}
      }
      if (checkerArray[clickedSpace + i] === undefined) {
        continue loop1;}
      if (checkerArray[clickedSpace + i][1] === yourChecker) {
        idChecked = String('#a' + String(clickedSpace));
        document.querySelector(idChecked).classList.add("orange");
        continue loop1;
       }  
    } 
  }
};

const checkNorthWest = () => {

loop1:
 for (let j = 0; j < potentialMovesArray.length; j++){
    clickedSpace = potentialMovesArray[j];
    let i = -9;
    let idChecked = 0;

    if (checkerArray[clickedSpace + i] === undefined){
      continue loop1;
    } else if(checkerArrayEdgeNorthWest.includes(checkerArray[clickedSpace][0]) === true) {
      continue loop1;
    }
    if (checkerArray[clickedSpace + i][1] === opposingChecker) {
      while (checkerArray[clickedSpace + i][1] === opposingChecker) {
        if (checkerArrayEdgeNorthWest.includes(checkerArray[clickedSpace + i][0]) === true) {
          continue loop1;
        }
        if (checkerArray[clickedSpace + i + i] === undefined) {
          continue loop1;
        }
        
        i = i - 9;
        if (checkerArray[clickedSpace + i] === undefined) {
          continue loop1;}
      }
      if (checkerArray[clickedSpace + i] === undefined) {
        continue loop1;}
      if (checkerArray[clickedSpace + i][1] === yourChecker) {
        idChecked = String('#a' + String(clickedSpace));
        document.querySelector(idChecked).classList.add("orange");
        continue loop1;
       }  
    } 
  }
};

const checkSouthEast = () => {

loop1:
 for (let j = 0; j < potentialMovesArray.length; j++){
    clickedSpace = potentialMovesArray[j];
    let i = 9;
    let idChecked = 0;
  

    if (checkerArray[clickedSpace + i] === undefined){
      continue loop1;
    } else if(checkerArrayEdgeSouthEast.includes(checkerArray[clickedSpace][0]) === true) {
      continue loop1;
    }
    if (checkerArray[clickedSpace + i][1] === opposingChecker) {
      while (checkerArray[clickedSpace + i][1] === opposingChecker) {
        if (checkerArrayEdgeSouthEast.includes(checkerArray[clickedSpace + i][0]) === true) {
          continue loop1;
        }
        if (checkerArray[clickedSpace + i + i] === undefined) {
          continue loop1;
        }
        i = i + 9;
        if (checkerArray[clickedSpace + i] === undefined) {
          continue loop1;}
      }
      if (checkerArray[clickedSpace + i][1] === yourChecker) {
        idChecked = String('#a' + String(clickedSpace));
        document.querySelector(idChecked).classList.add("orange");
        continue loop1;
       }  
    } 
  }
};

const orangeClassRemover = () => {
  for (let i = 0; i < 64; i++) {
    let orangeRemover = i;
    idChecked = String('#a' + String(orangeRemover));
        document.querySelector(idChecked).classList.remove("orange");       
};
};

const setupGame = () => {
  orangeClassRemover();
  for (let i = 0; i < checkerArray.length; i++) {
    checkerArray[i][1] = "none";
  }
  checkerArray[27][1] = "white";
  checkerArray[36][1] = "white";
  checkerArray[28][1] = "black";
  checkerArray[35][1] = "black";
  turn = "black";
  opposingChecker = "white";
  yourChecker = "black";
  validMove = 0;
  scoreBlack = 0;
  scoreWhite = 0;
  checkValidMoves();
  checkEast();
  checkWest();
  checkNorth();
  checkSouth();
  checkNorthEast();
  checkSouthWest();
  checkNorthWest();
  checkSouthEast();

};









document.addEventListener('DOMContentLoaded', () => {

setupGame();
colorCheckersVisual();
turnMessage();
countScore();
checkValidMoves();
checkEast();
checkWest();
checkNorth();
checkSouth();
checkNorthEast();
checkSouthWest();
checkNorthWest();
checkSouthEast();



grid.addEventListener('click', (event) => {
    const idClicked = event.target.id.replace('a','');
    clickedSpace = Number(idClicked);
    validCheckerPlace();
    if (validCheckerPlace() === true) {
    east();
    west();
    north();
    south();
    northEast();
    northWest();
    southEast();
    southWest();
    colorCheckersVisual();
    }
    if (validMove === 1) {
      countScore();
      switchTurns();
      turnMessage();
      orangeClassRemover();
      checkValidMoves();
      checkEast();
      checkWest();
      checkNorth();
      checkSouth();
      checkNorthEast();
      checkSouthWest();
      checkNorthWest();
      checkSouthEast();
    }
  

});

startGame.addEventListener('click', () => {
  setupGame();
  colorCheckersVisual();
  turnMessage();
  countScore();


});

});
