const colorPicker = document.getElementById('colorPicker')
const canvaColor = document.getElementById('canvaColor')
const fontPicker = document.getElementById('fontSize')
const canvas = document.getElementById('myCanva')
const clearButton = document.getElementById('clearButton')
const saveButton = document.getElementById('saveButton')
const retrieveButton = document.getElementById('retrieveButton')

const ctx = canvas.getContext('2d')

colorPicker.addEventListener('change',(e) => {
  ctx.strokeStyle = e.target.value
  ctx.fillStyle = e.target.value
})

canvas.addEventListener('mousedown',(e) => {
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
})

canvas.addEventListener('mousemove',(e)=>{
  if(isDrawing){
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();

    lastX = event.offsetX
    lastY = event.offsetY
  }
})

