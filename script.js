/* Difference between query selector all and get elements by class name (article)
  https://unicorntears.dev/posts/queryselectorall-vs-getelementsbyclassname/ 
  */
const grid = document.getElementById('pad');

// Create Grid //
const createGrid = (val) => {
  let num = 0;
  // create divs to go into grid //
  while (num < val*val) {
    num += 1;
    const div = document.createElement('div');
    div.classList.add('div');
    grid.appendChild(div);
  };
  
  // Set grid dimensions //
  const newProp = (320/val) + 'px';
  grid.style.gridTemplate = `repeat(${val}, ${newProp}) / repeat(${val}, ${newProp})`;

  // Insert Divs into grid // 
  for(var i =0; i< document.getElementsByClassName('div').length; i++) {
    document.getElementsByClassName('div')[i].style.width = newProp;
    document.getElementsByClassName('div')[i].style.height = newProp;
  }
  
  // handle mouseenters on grid items and pen // 
  document.querySelectorAll('.div').forEach(element => {
    element.addEventListener('mouseenter', function() {handleMouseEnter(element)});
    element.addEventListener('click', function() {handleMouseClick(element)});
  });
}

// Change grid //
const input = document.getElementById('range');
input.addEventListener('input', function() {
  document.getElementById('range-val').innerText = input.value + ' X ' + input.value;
  
  // Remove previous grid dimensions //
  const gridItems = document.querySelectorAll('.div');
  for(var i =0; i<gridItems.length; i++) {
    const item = gridItems[i];
    item.parentNode.removeChild(item);
  }
  
  // Call create grid fx w/ new dimensions based on input value from range input //
  createGrid(input.value);
});

// Show grid fx //
let borders = 'on';
document.getElementById('showGrid').addEventListener('click', function() {
  const div = document.getElementsByClassName('div');
  if(borders === 'on') {
    for(var i=0; i<div.length; i++) {
      div[i].style.border = 'none';
    };
    borders = 'off';
  } else {
    for(var i=0; i<div.length; i++) {
      div[i].style.border = '1px solid';
    };
    borders = 'on';
  };
});

// Toggle pen // 
let pen = false;
const handleMouseClick = (div) => {
  !pen ? pen = true : pen = false;
  color === 'default' ? div.style.background = 'black' : div.style.background = 'red';
}

// Color change //
let color = 'default';
let num = 1;

const handleMouseEnter = (div) => {
  if(pen == true && color == 'default') {
    div.style.background = 'black';
  } else if (pen == true && color == 'rainbow') {
    const array = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    if(div.style.background === '') {
      switch(num) {
        case 0: 
          div.style.background = array[0];
          num += 1;
          break;
        case 1:
          div.style.background = array[1];
          num += 1;
          break;
        case 2:
          div.style.background = array[2];
          num += 1;
          break;
        case 3:
          div.style.background = array[3];
          num += 1;
          break;
        case 4:
          div.style.background = array[4];
          num += 1;
          break;
        case 5:
          div.style.background = array[5];
          num += 1;
          break;
        case 6:
          div.style.background = array[6];
          num = 0;
          break;
      }
    }
  }
}

// Rainbow Pen fx //
document.getElementById('rainbowPen').addEventListener('click', function() {
  color = 'rainbow';
});

// Black pen fx //
document.getElementById('blackPen').addEventListener('click', function() {
  color = 'default';
});

// Reset // 
document.getElementById('reset').addEventListener('click', function() {
  // Remove previous grid dimensions //
  const gridItems = document.querySelectorAll('.div');
  for(var i =0; i<gridItems.length; i++) {
    const item = gridItems[i];
    item.parentNode.removeChild(item);
  }
  
  input.value = 16;
  document.getElementById('range-val').innerText = input.value + ' X ' + input.value;
  createGrid(16);
});

// Default grid call // 
createGrid(16);

// display grid settings // 
document.getElementById('range-val').innerText = input.value + ' X ' + input.value;

  
