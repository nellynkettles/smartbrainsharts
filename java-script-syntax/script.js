let count = 0
let everyday = newBeginnings();
let dreams = document.getElementById("dreams");
document.body.addEventListener("keyup", myDream)
function myDream() {
  count++
  if (dreams.innerHTML === "a new tomorrow") {
    dreams.innerHTML = "create a better today";
    dreams.innerHTML = "imagine new realities";
    dreams.innerHTML = "level the playing field"
    dreams.innerHTML = "rest peacefully, radically"
  } else if (count >=5){
    dreams.innerHTML = "to help imagine what my future could be"
  }

}
