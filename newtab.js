document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const board = document.querySelector('#board');
    //const easy = document.querySelector('#easy')
    //const hard = document.querySelector('#hard')
    //const insane = document.querySelector('#insane')
});

//listen for easy/hard/insane button clicks, and update speed variable and styling of board based on selection

//global speed variable that we can change based on level selected: controls how fast apples spawn

class Apple {
    constructor(el) {
      this.node = document.createElement('img');
      this.node.setAttribute('id', 'apple');
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

//maybe setTimeout(new Apple(board), speed)
let apple = new Apple(board);

//define a function
  //delete apple
  //create apple

setInterval(() => {
  
}, 250)

let mouseX, mouseY
document.addEventListener('mousemove', (e) =>{
    mouseX = e.clientX
    // console.log(mouseX)
    mouseY = e.clientY
    // console.log(mouseY)
})

//add event listener for click => check if mouse is over an apple, if so run a different function
document.addEventListener('click', () => {


    if (mouseX >= Number(apple.node.style.left.replace('px', '')) && mouseX <= Number(apple.node.style.left.replace('px', '')) + 50 && mouseY >= Number(apple.node.style.top.replace('px', '')) && mouseY <= Number(apple.node.style.top.replace('px', '')) + 50) {
      // console.log('hi')
      delete apple;
      apple.node.remove();
      // apple = new Apple(board)

      //increment score
    }
})