document.addEventListener("DOMContentLoaded", function(){

    const number = document.getElementById("counter")
    let paused = false

    let startCounter = setInterval(function(){
            number.innerText = parseInt(number.innerText) + 1
        }, 1000);
        
    function pauseCounter() {
        clearInterval(startCounter)
    }

    const minusButton = document.getElementById("minus")
    minusButton.addEventListener("click", function(e) {
        number.innerText = parseInt(number.innerText) - 1 
    })

    const plusButton = document.getElementById("plus")
    plusButton.addEventListener("click", function(e) {
        number.innerText = parseInt(number.innerText) + 1    
    })

    const like = document.getElementById("heart")
    const likeContainer = document.querySelector('.likes')
    
    like.addEventListener("click", function(e) {
        let numberLikes = document.querySelectorAll('.likeNumber')
        let likeArr = Array.from(numberLikes)
        let x = likeArr.find(ele => ele.dataset.counter === number.innerText.toString())
        
        if(x) {
            //console.dir(x)
            let currentLikes = parseInt(x.textContent.split(' ')[2])
            x.innerText = `${number.innerText} - ${currentLikes += 1} likes`
        } else {
            likeContainer.innerHTML += `<li class="likeNumber" data-counter="${number.innerText}">${number.innerText} - 1 likes</li>`
        }   
    })

    const pauseButton = document.getElementById('pause')
    document.addEventListener("click", function(e){
        const buttons = document.querySelectorAll('button')
     if (e.target.id === 'pause') {
        if (!paused) {
                pauseCounter();
                buttons.forEach(button=> {
                    if (button.id !== 'pause') {
                    button.disabled = true }
                })
                paused = true
                pauseButton.innerText = "resume"
        } else if (paused) {
            startCounter = setInterval(function(){
                number.innerText = parseInt(number.innerText) + 1
            }, 1000);
            buttons.forEach(button=> {
                if (button.id !== 'pause') {
                    button.disabled = false }
                })
                    paused = false
                    pauseButton.innerText = "pause"
        }
    }
    })
    
    document.addEventListener('submit', function(e) {
        e.preventDefault();
        const commentBox = document.getElementById('list')
        const oneComment = document.createElement('div')
        oneComment.textContent = e.target[0].value
        commentBox.appendChild(oneComment)        
    })

})