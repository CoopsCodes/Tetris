const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

//* setting the size and colour of backdrop
context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

//* tetris block 
const matrix = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 1]
];
matrix.forEach((row, y) => {
  row.forEach((value, x) =>{
    if(value !== 0) {
      context.fillStyle = 'red';
      context.fillRect(x, y, 1, 1);
    }
  });
});