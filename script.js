const bubbleContainer = document.querySelector('.bubble-container')
const createBubble = document.querySelector('.createBubble')
const bubbleCount = document.querySelector('.counter strong')
const clear = document.querySelector('.clear')
let counter = 0;

function randomHeight(){
    let containerHeight = bubbleContainer.offsetHeight;
    let heightMax = containerHeight - 100
    return heightMax; 
}
function randomWidth(){
    let containerWidth = bubbleContainer.offsetWidth;
    let widthMax = containerWidth - 100
    return widthMax; 
}

createBubble.addEventListener('click', () => {
    const bubbleEl = document.createElement('div')
    bubbleEl.draggable = true;
    bubbleEl.classList.add('bubble')
    bubbleEl.style.top = `${Math.floor(Math.random() * randomHeight())}px`
    bubbleEl.style.left = `${Math.floor(Math.random() * randomWidth())}px`
    bubbleEl.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    bubbleContainer.appendChild(bubbleEl)
    bubbleCount.innerText = ++counter;
})

document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('bubble')){
        e.target.classList.add('pop')
        
        setInterval(() => {
            e.target.remove()
        }, 1000);
        bubbleCount.innerText = --counter;    
    }
})


let elements = bubbleContainer.children
console.log(elements)

clear.addEventListener('click', () =>{
    while(bubbleContainer.firstChild){
        bubbleContainer.removeChild(bubbleContainer.firstChild)
        counter = 0;
        bubbleCount.innerText = 0;
    }
})