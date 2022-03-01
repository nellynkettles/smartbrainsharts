console.log("javascript is working!");

let today = new Date ();
let hour = today.getHours();
let time;
let timeContainer = document.getElementById('train');

if (hour >=20) {
  time = "you're here late..."
  // if the house is greater than 6pm, then set the message equal to "good evening :-)"
} else if (hour >=14) {
  time = "you're here..."
} else {
  time = "you're here early..."
}

document.getElementById("train").style.color = "lime";

timeContainer.innerHTML = time;

//

let message = document.getElementById("the-internet");
// declare a variable called message and set it equal to the element in the HTML document with the ID of "the-internet"
let count = 0;
// declare a variable and set it to 0
document.body.addEventListener("click", theInternetIs)
// make sure the whole entire body of the html document is listening for someone to click on it, when someone does click on it, call the function called "theInternetIs"

window.addEventListener("scroll", theInternetIs)
// make sure the whole entire window is also listening for someone to do something, in this case, scroll
function theInternetIs() {
	// declare a new function called theInternetIs
	count++
	console.log(count)
	// everytime this function is called, add 1 to the count variable
	if (message.innerHTML === "am i fucking crazy?") {
		// check if the message variable, declared above, has text inside it that says "the internet is in the ground", if it does do the following:
		message.innerHTML = "are you who you say you are?";
		//change the text to "the internet is in the clouds"
		message.classList.add("cloud-texture");
		//add a new class called "cloud-texture"
	} else if (count >=3) {
		// check if the count variable is larger than or equal to 3, if it is restart the counter and reset the default text
		message.innerHTML = "how do you live in the world?";
		count = 0;
		// also check if the message has the cloud texture class still attached to it, and remove it if it does
		if (message.classList.contains("cloud-texture")) {
			message.classList.remove("cloud-texture");
		}
	} else {
		// if neither of the above conditionals are true, then do the following:
		message.innerHTML = "can i speak with myself?";
		if (message.classList.contains("cloud-texture")) {
			message.classList.remove("cloud-texture");
		}
	}
}

document.getElementById("the-internet").style.color = "magenta";
