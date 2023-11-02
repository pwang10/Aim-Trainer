// document.addEventListener('DOMContentLoaded', () => {
  // window.open("index.html", "_blank", "width=1000, height=1000");
// }, { once: true });
// window.open("game.html", "_blank", "width=1000, height=1000")
// setTimeout(window.open("index.html", "_blank", "width=1000, height=1000"), 1000)
window.open("index.html", "testName", "width=1000, height=1000")
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
    this.node.setAttribute('src', 'Assets/red target icon (1).png');
    
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
      score += 1000
    }
    
    target = new Target(board);
  }, speed);
  
};

//listen for easy/hard/insane button clicks, and update speed variable and styling of board based on selection
easy.addEventListener('click', () => {
  // clearInterval(howLong)
  clearInterval(intervalID);
  createAndRemoveTarget(3000);
  console.log('easy');
  board.style.backgroundImage = 'url("assets/aim trainer easy.jpg")'
})
medium.addEventListener('click', () => {
  // clearInterval(howLong)
  clearInterval(intervalID);
  createAndRemoveTarget(1500);
  console.log('medium')
  board.style.backgroundImage = 'url("assets/aim trainer medium.jpg")'
})
hard.addEventListener('click', () => {
  // clearInterval(howLong)
  clearInterval(intervalID);
  createAndRemoveTarget(900);
  console.log('hard')
  board.style.backgroundImage = 'url("assets/aim trainer hard.jpg")'
})
insane.addEventListener('click', () => {
  // clearInterval(howLong)
  clearInterval(intervalID);
  createAndRemoveTarget(500);
  console.log('insane')
  board.style.backgroundImage = 'url("assets/aim trainer insane.jpg")'
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


// let mouseX, mouseY
// document.addEventListener('mousemove', (e) =>{
  //     mouseX = e.clientX
  //     // console.log(mouseX)
  //     mouseY = e.clientY
  //     // console.log(mouseY)
  // })
  
  //add event listener for click => check if mouse is over an target, if so run a different function
  
  // document.addEventListener('click', () => {
    //   // console.log('hi')
    //   // console.log(mouseX);
    //   // console.log(mouseY);
    //   // console.log('target left', Number(target.node.style.left.replace('px', '')));
    //   // console.log('target right', Number(target.node.style.left.replace('px', '')) + 50);
    //   // console.log('target top', Number(target.node.style.top.replace('px', '')));
    //   // console.log('target bottom', Number(target.node.style.top.replace('px', '')) + 50);
    //     if (mouseX >= Number(target.node.style.left.replace('px', '')) && mouseX <= Number(target.node.style.left.replace('px', '')) + 50 && mouseY >= Number(target.node.style.top.replace('px', '')) && mouseY <= Number(target.node.style.top.replace('px', '')) + 50) {
      //       console.log('hi')
      //       delete target;
      //       target.node.remove();
      //       score += 1000;
      //       document.querySelector('#score').innerText = `Score: ${score}`
      //     }
      // })
      // let clickSound = new Audio(Assets/overwatch_headshot.mp3)
      setInterval(() => {
        document.querySelector('img').addEventListener('click', () => {
          console.log('hi')
          delete target;
          document.querySelector('audio').volume = 0.75
          document.querySelector('audio').play()
          target.node.remove();
          document.querySelector('#score').innerText = `Score: ${score}`
        })
      }, 1)