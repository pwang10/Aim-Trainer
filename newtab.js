const title = document.createElement('div');
title.innerHTML = 'Aim Trainer';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');
  const easy = document.querySelector('#easy');
  const medium = document.querySelector('#medium')
  const hard = document.querySelector('#hard')
  const insane = document.querySelector('#insane')
  const howLongCanYouLast = document.querySelector('#howLongCanYouLast')
});

class Target {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'target');
    this.node.setAttribute('src', 'icons/icon16.png');
    
    el.appendChild(this.node);
    const rndLeft = Math.floor(Math.random() * 12) + 0;
    const rndTop = Math.floor(Math.random() * 12) + 0;
    let leftPosition = rndLeft * 50;
    let topPosition = rndTop * 50;
    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
    
  }  
}
let target = new Target(board);
let difficulty

// setInterval(() => {
//   if (target) {
//     delete target;
//     target.node.remove();
//   }
//   target = new Target(board);
// }, speed)

const createAndRemoveTarget = (speed) => {
  setInterval(() => {
    if (target) {
      delete target;
      target.node.remove();
    }
    target = new Target(board);
  }, speed);
};

const howLong = (speed) => {
  setInterval(() => {
    if (target) {
      delete target;
      target.node.remove();
    }
    target = new Target(board);
  }, speed);
  setInterval((speed) => {
    while (speed > 200) {
      speed = speed - 500;
    }
  }, 10000);
};

//listen for easy/hard/insane button clicks, and update speed variable and styling of board based on selection
easy.addEventListener('click', () => {
  clearInterval(howLong)
  clearInterval(createAndRemoveTarget);
  createAndRemoveTarget(2000);
  console.log('easy')
  board.style.color = 'green'
})
medium.addEventListener('click', () => {
  clearInterval(howLong)
  clearInterval(createAndRemoveTarget);
  createAndRemoveTarget(1000);
  console.log('medium')
  board.style.color = 'blue'
})
hard.addEventListener('click', () => {
  clearInterval(howLong)
  clearInterval(createAndRemoveTarget);
  createAndRemoveTarget(500);
  console.log('hard')
  board.style.color = 'red'
})
insane.addEventListener('click', () => {
  clearInterval(howLong)
  clearInterval(createAndRemoveTarget);
  createAndRemoveTarget(200);
  console.log('insane')
  board.style.color = 'black'
})

howLongCanYouLast.addEventListener('click', () => {
  clearInterval(howLong)
  clearInterval(createAndRemoveTarget);
  howLong(2000)
});

//global speed variable that we can change based on level selected: controls how fast targets spawn


//maybe setTimeout(new Target(board), speed)
//define a function

  //delete target
  //create target


let mouseX, mouseY
document.addEventListener('mousemove', (e) =>{
    mouseX = e.clientX
    // console.log(mouseX)
    mouseY = e.clientY
    // console.log(mouseY)
})

//add event listener for click => check if mouse is over an target, if so run a different function
document.addEventListener('click', () => {


    if (mouseX >= Number(target.node.style.left.replace('px', '')) && mouseX <= Number(target.node.style.left.replace('px', '')) + 50 && mouseY >= Number(target.node.style.top.replace('px', '')) && mouseY <= Number(target.node.style.top.replace('px', '')) + 50) {
      // console.log('hi')
      delete target;
      target.node.remove();
      // target = new Target(board)
      console.log('+1')
      //increment score
    }
})