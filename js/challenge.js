document.addEventListener("DOMContentLoaded", function(){

    const number = document.getElementById("counter")
    let counterInt = parseInt(number.innerText)

    setInterval(function(){
        number.innerText = counterInt += 1
    }, 1000);
        
    const minusButton = document.getElementById("minus")
    const plusButton = document.getElementById("plus")

    minusButton.addEventListener("click", function(e) {
        //if (e.target.id === "minus") {
            counterInt -= 1
      //  }
    })

    plusButton.addEventListener("click", function(e) {
        counterInt += 1
    })
})