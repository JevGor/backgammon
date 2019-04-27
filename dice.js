
function rollDice (){
    var dice1 = document.getElementById('dice1')
    var dice2 = document.getElementById('dice2')
    var status = document.getElementById('status')
    var d1 = Math.floor(6*Math.random())+1
    var d2 = Math.floor(6*Math.random())+1
    dice1.innerHTML = d1
    dice2.innerHTML = d2
    status.innerHTML = `You rolled ${d1} and ${d2}`
    if (d1 === d2){
        status.innerHTML = `Doubles! Go 4 times ${d1}`
    }
}
