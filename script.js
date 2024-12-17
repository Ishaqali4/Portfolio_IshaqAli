
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");

    // Static text before "Designer", "Developer", or "Programmer"
    const staticText = "I'm a ";
    const words = ["UI UX Designer", "Web Developer" ];  // Array of words to alternate
    let currentWordIndex = 0;  // Keeps track of which word (Designer, Developer, etc.) to type
    let charIndex = 0;         // Keeps track of which character of the word is being typed
    const typingSpeed = 100;   // Typing speed (milliseconds)
    const erasingSpeed = 50;   // Erasing speed (milliseconds)
    const blinkSpeed = 500;    // Cursor blink speed (milliseconds)

    let isErasing = false;     // Flag to indicate whether we're in the erasing phase
    let typingComplete = false; // Flag to track if typing of the word is complete

    // Function to type and erase words
    function typeText() {
        const word = words[currentWordIndex];      // Get the current word (e.g., "Designer", "Developer")
        const fullText = staticText + word;         // Full sentence: "I'm a Designer" or "I'm a Developer"

        if (!isErasing) {
            // Typing phase
            if (charIndex < fullText.length) {
                if (charIndex < staticText.length) {
                    // Keep the static part "I'm a "
                    textElement.innerHTML = staticText;
                } else {
                    // Add the word (either "Designer", "Developer", or "Programmer")
                    const currentWord = fullText.slice(staticText.length, charIndex + 1);
                    const wordClass = getClassForWord(word);  // Get class based on current word
                    textElement.innerHTML = staticText + `<span class="${wordClass}">${currentWord}</span>`;
                }
                charIndex++;
                setTimeout(typeText, typingSpeed);  // Continue typing
            } else {
                // Once typing is complete, wait a moment before starting to erase
                typingComplete = true;
                setTimeout(() => {
                    isErasing = true;  // Start erasing
                    setTimeout(typeText, 1000);  // Wait before erasing
                }, 1000);
            }
        } else {
            // Erasing phase
            if (charIndex > staticText.length) {
                const currentHTML = textElement.innerHTML;
                textElement.innerHTML = currentHTML.slice(0, currentHTML.length - 1);
                charIndex--;
                setTimeout(typeText, erasingSpeed);  // Continue erasing
            } else {
                // Once erased, switch to the next word
                isErasing = false;
                typingComplete = false;
                currentWordIndex = (currentWordIndex + 1) % words.length; // Toggle between words
                setTimeout(typeText, 500);  // Delay before typing the next word
            }
        }
    }

    // Function to get class for the current word
    function getClassForWord(word) {
        switch (word) {
            case "Designer":
                return "designer";
            case "Developer":
                return "developer";
            case "Programmer":
                return "programmer";
            case "Development":
                return "Development";
            default:
                return "";
        }
    }

    // Function to animate the blinking cursor
    function blinkCursor() {
        setInterval(function () {
            cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
        }, blinkSpeed);
    }

    // Start typing and cursor blinking
    typeText();
    blinkCursor();
});














var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}









// const backgroundElement = document.querySelector('.EcoConnect');

// let currentImage = 0;
// const images = [
//   './assets/EcoConnectbg1.png', // Image 1
//   './assets/EcoConnectbg2.png', // Image 2
// ];

// let opacity = 1; // Opacity for the current image

// // Function to switch the background images with a fade effect
// function fadeBackground() {
//   // Switch the background image by updating the backgroundImage property
//   backgroundElement.style.backgroundImage = `url(${images[currentImage]})`;

//   // Animate the fade-out by reducing opacity
//   backgroundElement.style.opacity = 0;

//   // After the fade-out, switch the image and fade it in
//   setTimeout(() => {
//     currentImage = (currentImage + 1) % images.length; // Toggle between 0 and 1
//     backgroundElement.style.backgroundImage = `url(${images[currentImage]})`;
//     backgroundElement.style.opacity = 1; // Fade in the new image
//   }, 2000); // Wait for 2 seconds (time of the fade-out)

//   // Call fadeBackground again every 4 seconds (2 seconds fade-out, 2 seconds fade-in)
//   setTimeout(fadeBackground, 4000);
// }

// // Start the looping fade background
// fadeBackground();


// const backgroundElement = document.querySelector('.EcoConnect');

// // Store the current background image index
// let currentImage = 0;

// // Array of background image URLs
// const images = [
//   './assets/bg1.png', // First background image
//   './assets/bg2.png', // Second background image
// ];

// // Function to switch the background images with a fade effect
// function fadeBackground() {
//   // Set the new background image using CSS custom property
//   backgroundElement.style.setProperty('--background-image', `url(${images[currentImage]})`);

//   // Wait for the fade-out to finish, then change the image
//   setTimeout(() => {
//     // Update the current image index (toggle between 0 and 1)
//     currentImage = (currentImage + 1) % images.length;
//   }, 2000); // Wait for 2 seconds for the fade-out to complete

//   // Continue to change background every 4 seconds (2 seconds fade-out, 2 seconds fade-in)
//   setTimeout(fadeBackground, 4000);
// }

// // Start the background fade loop
// fadeBackground();





























// function sendMail(){
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };


    
//     const serviceID = "service_s291d5s"
//     const templateID = "template_oqm9v5u"
    
    
//     emailjs.send(serviceID, templateID, params).then((res) =>{
//     document.getElementById("name").value = ""; 
//     document.getElementById("email").value = "";
//     document.getElementById("message").value = "";
    
//     console.log(res);
//     alert("your message sent successfully")
    
//     })
    
//     .catch(err=>console.log(err))
// }