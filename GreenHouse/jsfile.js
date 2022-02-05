//  //////HOVER EFFECT////// //

const animate = document.querySelector("section"); //  CONTAINER FOR THE H1
const header = document.querySelector("section .content-page h1"); // FIRST H1.
const section = document.querySelector("section .content-page"); //  SECTION ONE CONTAINER..
const borderset = document.querySelector("section .introtext p"); // THE P IN THE INTROTEXT CLASS.
const section_2 = document.querySelector("section .response"); // SECTION TWO CONTAINER.
const borderset_2 = document.querySelector("section .response .text p"); // P IN THE RESPONSE CLASS.
const menuButton = document.querySelector(".header header nav .menu"); //THE MENU ICON .
const navBar = document.querySelector("header nav ul"); // RESPONSIVE NAV BAR //
const image_1 = document.querySelector("section .introtext img"); // ANIMA SECTION ONE //
const image_2 = document.querySelector("section .response .text img"); // ANIMA SECTION TWO //
const firstName = document.getElementById("firstname"); // FIRST INPUT ELEMENT //
const lastName = document.getElementById("lastname"); // SECOND INPUT ELEMENT //
const submit = document.getElementById("send"); // SUBMIT BUTTON //
const contact = document.querySelector(".contact h1"); // CONTACT NAME DISPLAY //

// //////RESPONSIVE PROPERTY//////// .//

let winSize = window.outerWidth;

if (winSize <= "1100") {
  header.style.opacity = "100%";
  animate.addEventListener("mouseleave", removeOpacity);
  menuButton.addEventListener("click", popUp);
  navBar.style.top = "-100%";

  // //////////RESPONSIVE NAVIGATION////// //
  function popUp() {
    if (navBar.style.top == "-100%") {
      //console.log("nav bar down"); // SIMPLE LOG //
      navBar.style.top = "0%";
    } else if (navBar.style.top == "0%") {
      navBar.style.top = "-100%";
      //console.log("nav bar up"); // SIMPLE LOG //
    }
  }

  // //////MODIFY THE SECTION ANIMATION//// //
  function removeOpacity() {
    header.style.opacity = "100%";
  }

  // ////CAPTURE THE FULL NAME///// //

  submit.addEventListener("click", readName);

  function readName(e) {
    e.preventDefault();

    let first = firstName.value;
    let last = lastName.value;

    if (first == "" || last == "") {
     	  contact.innerText = "Please fillout the information";
	  e.target.value = "please fillout the form!";
	  e.target.style.background = "red";
    } else {
      contact.innerText = `Thank You for your interest ${first}  ${last} .`;
      e.target.value = "Sent";
      e.target.style.background = "green";
      e.target.style.border = "none";
      
    }
/*
	// ///////LOGGING NAME////// //
	console.log(typeof first, last);
	console.log(firstName.value);
	console.log(lastName.value);
	console.log(e.target.value);
  */
  }
}

// ///////HOVER EFFECT CODE///////  //
else {
  animate.addEventListener("mouseenter", transition);
  section_2.addEventListener("mouseenter", moveItem);

  function transition() {
    header.style.opacity = "100%";
    header.style.transition = "opacity 1.3s ease-in";
    image_1.style.left = "0%";
    borderset.style.opacity = "100%";
    //console.log("hovering over the element.."); // CONSOLE LOGGING
  }

  function moveItem() {
    image_2.style.right = "0%";
    borderset_2.style.opacity = "100%";
  }

  //  ////////HEADER FADE CODE//////// //
  animate.addEventListener("mouseleave", fadeout);

  function fadeout() {
    header.style.opacity = "0%";
    header.style.transition = "opacity .5s ease-in .1s";
    //console.log("leaving out of the element.."); // CONSOLE LOGGING
  }

    // //////////CAPTURE THE FULL NAME////////// //

	submit.addEventListener("click", readName);

	function readName(e) {
	  e.preventDefault();
  
	  let first = firstName.value;
	  let last = lastName.value;
  
	  if (first == "" || last == "") {
		contact.innerText = "Please fillout the information";
		e.target.style.background = "red";
    		e.target.value = "please fillout the form!";
	  } else {
		contact.innerText = `Thank You for your interest ${first}  ${last} .`;
		e.target.value = "Sent";
 		e.target.style.background = "green";
		e.target.style.border = "none";
		console.log("Message sent");
	  }
	}
  			// console.log(winSize); // LOGGING THE WINDOW SIZE //
}
