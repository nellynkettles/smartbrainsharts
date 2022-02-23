console.log("javascript is working!");

// look at console tab of inspector to test java!
// you can use let, var or const for declarations
// you can set variables to true/false, 1 or 0, other *booleans*
// you can make HTML tings happen here!
let  today = new Date();
	let hour = today.getHours();
	let message;
	let messageContainer = document.getElementById("message");

	if (hour >=18) {
		message = "good evening :-)"
    // if the house is greater than 6pm, then set the message equal to "good evening :-)"
	} else if (hour >=12) {
		message = "good afternooon"
	} else {
		message = "good morn!"
	}

	messageContainer.innerHTML = message;

// "let" - key term. it's a VARIABLE

let count = 0
// make a new variable, call it count, set it to 0
let javatest = document.getElementById("the-internet");
// make a new variable, call it message, set it to an element on my page with the id "the-internet"
document.body.addEventListener("click", theInternetIs)
// there are a lot of "addEventListener" elements, check out W3Schools. this says when someone clicks on the body, call this function "theInternetIs". functions are like recipes seperated from the rest of the code. you can write hella function and call them from different event listeners
function theInternetIs() {
  // every time someone clicks on the page, this function gets called. for this specifically: every click adds +1
	count++
	if (javatest.innerHTML === "the internet is in the ground") {
		javatest.innerHTML = "the internet is in the clouds";
		javatest.classList.add("cloud-texture");
	} else if (count >=3) {
		javatest.innerHTML = "click this page to find out where the internet is...";
	} else {
		javatest.innerHTML = "the internet is in the ground";
		if (javatest.classList.contains("cloud-texture")) {
			javatest.classList.remove("cloud-texture");
		}
	}
}

// so when we look at websites with JAVA, we're only looking at what they want us to see?
