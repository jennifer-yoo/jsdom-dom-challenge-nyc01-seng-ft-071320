document.addEventListener("DOMContentLoaded", function(){

    const number = document.getElementById("counter")
    let counterInt = parseInt(number.innerText)

    setInterval(function(){
        number.innerText = counterInt += 1
    }, 1000);
        
    const minusButton = document.getElementById("minus")
    const plusButton = document.getElementById("plus")

    minusButton.addEventListener("click", function(e) {
            counterInt -= 1
    })

    plusButton.addEventListener("click", function(e) {
        counterInt += 1
    })

    const like = document.getElementById("heart")
    const likeContainer = document.querySelector('.likes')
    
    like.addEventListener("click", function(e) {
        
        let numberLikes = document.querySelectorAll('.likeNumber')
        let likeArr = Array.from(numberLikes)
        
        let x = likeArr.find(ele => ele.dataset.counter === counterInt.toString())
        
        if(x) {
            console.dir(x)
            
            let currentLikes = parseInt(x.textContent.split(' ')[2])
            
            x.innerText = `${counterInt} - ${currentLikes += 1} likes`
        } else {
            likeContainer.innerHTML += `<li class="likeNumber" data-counter="${counterInt}">${counterInt} - 1 likes</li>`
            
        }
        
    })
    
})