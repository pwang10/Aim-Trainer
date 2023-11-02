
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const title = document.querySelector('title');
  const score = document.querySelector('#score')
  const board = document.querySelector('#board');
  const easy = document.querySelector('#easy');
  const medium = document.querySelector('#medium')
  const hard = document.querySelector('#hard')
  const insane = document.querySelector('#insane')
  });

title.innerHTML = 'Aim Trainer';
let score = 0
const clearScore = () => {
  score = 0
  document.querySelector('#score').innerText = `Score: ${score}`
}

class Target {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'target');
    this.node.setAttribute('src', 'icons/icon16.png');
    
    el.appendChild(this.node);
    const rndLeft = Math.floor(Math.random() * 12);
    const rndTop = Math.floor(Math.random() * 12);
    let leftPosition = rndLeft * 50;
    let topPosition = rndTop * 50;
    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
    
  }  
}
let target = new Target(board);

let intervalID
const createAndRemoveTarget = (speed) => {
  clearScore();
  intervalID = setInterval(() => {
    if (target) {
      delete target;
      target.node.remove();
    }
    target = new Target(board);
  }, speed);
  
};

//listen for easy/hard/insane button clicks, and update speed variable and styling of board based on selection
easy.addEventListener('click', () => {
  // clearInterval(howLong)
  clearInterval(intervalID);
  createAndRemoveTarget(3000);
  console.log('easy')
  board.style.color = 'green'
})
medium.addEventListener('click', () => {
  // clearInterval(howLong)
  clearInterval(intervalID);
  createAndRemoveTarget(1500);
  console.log('medium')
  board.style.color = 'blue'
})
hard.addEventListener('click', () => {
  // clearInterval(howLong)
  clearInterval(intervalID);
  createAndRemoveTarget(900);
  console.log('hard')
  board.style.color = 'red'
})
insane.addEventListener('click', () => {
  // clearInterval(howLong)
  clearInterval(intervalID);
  createAndRemoveTarget(500);
  console.log('insane')
  board.style.color = 'black'
})

howLongCanYouLast.addEventListener('click', () => {
  // clearInterval(howLong)
  clearInterval(intervalID);
  let speedHL = 3000
  createAndRemoveTarget(speedHL);
  setInterval(() => {
    clearInterval(intervalID);
    speedHL -= 500
    if (speedHL > 900) createAndRemoveTarget(speedHL);
  },3000);
  
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
  // console.log('hi')
  // console.log(mouseX);
  // console.log(mouseY);
  // console.log('target left', Number(target.node.style.left.replace('px', '')));
  // console.log('target right', Number(target.node.style.left.replace('px', '')) + 50);
  // console.log('target top', Number(target.node.style.top.replace('px', '')));
  // console.log('target bottom', Number(target.node.style.top.replace('px', '')) + 50);
    if (mouseX >= Number(target.node.style.left.replace('px', '')) && mouseX <= Number(target.node.style.left.replace('px', '')) + 50 && mouseY >= Number(target.node.style.top.replace('px', '')) && mouseY <= Number(target.node.style.top.replace('px', '')) + 50) {
      console.log('hi')
      delete target;
      target.node.remove();
      // target = new Target(board)
      //increment score
      score += 1000;
      document.querySelector('#score').innerText = `Score: ${score}`
    }
})

// target.node.addEventListener('click', () => {
//   console.log('hi')
//   delete target;
//   target.node.remove();
//   score += 1000
//   document.querySelector('#score').innerText = `Score: ${score}`
// })