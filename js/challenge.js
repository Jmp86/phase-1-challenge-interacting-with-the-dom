const formSubmit = document.getElementById('comment-form');
const commentList = document.getElementById('list');
const pauseButton = document.getElementById('pause')
let counter = document.getElementById('counter');
const incrementButton = document.getElementById('plus')
const decrementButton = document.getElementById('minus')
const likeButton = document.getElementById('heart')
const likedList = document.querySelector('.likes')

function disable(element){ element.setAttribute("disabled",""); }
function enable(element){ element.removeAttribute("disabled"); }

let timer = setInterval( () => {
    counter.innerText = ++counter.innerText}, 1000)


const add = incrementButton.addEventListener('click', () => {
    ++counter.innerText;
})

const subtract = decrementButton.addEventListener('click', () => {
    --counter.innerText;
})

const likes = likeButton.addEventListener('click', () => {
    let buttonClicks = 0;
    buttonClicks += 1;
    const currentCount = counter.innerText;
    const numLiked = document.createElement('li');
    numLiked.textContent = `${currentCount} has been liked ${buttonClicks} times`;
    likedList.append(numLiked);
})

const pause = pauseButton.addEventListener('click', () => {
    clearInterval(timer);
  
    pauseButton.innerText = 'resume'
    
    if (pauseButton.innerText === 'resume') {
           
            
        }
})




formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const newComment = e.target.querySelector('#comment-input').value;
    const comments = document.createElement('div');
    comments.textContent = newComment;
    document.forms['comment-form'].reset() 
    commentList.append(comments)
})

  // disable(incrementButton); 
    // disable(decrementButton); 
    // disable(likeButton); 
    // disable(submitButton);