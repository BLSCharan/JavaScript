const increaseBtn = document.getElementById("IncrementButton");
const decreaseBtn = document.getElementById("DecrementButton");
const resetBtn = document.getElementById("ResetButton");
const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function() {
    count++;
    countLabel.innerText = count;
}
decreaseBtn.onclick = function() {
    count--;
    countLabel.innerText = count;
}           
resetBtn.onclick = function() {
    count = 0;
    countLabel.innerText = count;
}