const counter = document.getElementById('counter');
const incrementButton = document.getElementById('plus');
const decrementButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const likesList = document.querySelector('.likes');
const submitButton = document.getElementById('submit');
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('list');
const commentInput = document.getElementById('comment-input')
const pauseButton = document.getElementById('pause');

let intervalTimer = setInterval(incrementTimer, 1000)

incrementButton.addEventListener("click", incrementTimer)

function incrementTimer(){
    counter.innerText = ++counter.innerText
}

decrementButton.addEventListener('click', () => {
    counter.innerText = --counter.innerText;
})

heartButton.addEventListener('click', likeNum) 

function likeNum(){
    const foundLi = document.querySelector(`li[data-num = "${counter.innerText}"]`)
    if (!foundLi) {
        const li = document.createElement('li');
        li.dataset.num = counter.innerText;
        li.innerHTML = `${counter.innerText} has been liked <span>1</span> times`;
        likesList.append(li);
    } else {
        foundLi.children[0].innerText = ++foundLi.children[0].innerText;
    }
}

pauseButton.addEventListener('click', (e) => {
    if (e.target.innerText === 'pause') {
        clearInterval(intervalTimer);
        e.target.innerText = 'resume'
        incrementButton.disabled = true; 
        decrementButton.disabled = true;
        heartButton.disabled = true; 
        submitButton.disabled = true;
 }  else {
        intervalTimer = setInterval(incrementTimer, 1000)
        e.target.innerText = 'pause';
        incrementButton.disabled = false;
        decrementButton.disabled = false;
        heartButton.disabled = false;
        submitButton.disabled = false;
        
} 
})


commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pTag = document.createElement('p')
    pTag.innerText = commentInput.value
    commentList.appendChild(pTag)
    e.target.reset()
})