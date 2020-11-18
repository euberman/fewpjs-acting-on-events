/*
  <div id="game">
    <div id="dodger" style="bottom: 0px; left: 180px;"></div>
  </div>
*/
const dodger = document.getElementById('dodger');

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  } else if (e.key === "ArrowTop") {
    moveDodgerUp();
  } else {
    moveDodgerDown();
  }
});

 function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 100);

    dodger.style.left = `${left - 1}px`;
 };
 function moveDodgerRight(){
    let rightNumbers = dodger.style.right.replace("px", "");
    let right = parseInt(rightNumbers, 100);

    dodger.style.right = `${right - 1}px`;
 };
 function moveDodgerTop(){
  let topNumbers = dodger.style.top.replace("px", "");
  let top = parseInt(topNumbers, 10);

  dodger.style.top = `${top - 1}px`;
};
function moveDodgerDown(){
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);

  dodger.style.bottom = `${bottom - 1}px`;
};