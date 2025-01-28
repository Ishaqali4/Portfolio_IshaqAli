
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");

    const staticText = "I'm a ";
    const words = ["UI UX Designer", "Web Developer" ];  
    let currentWordIndex = 0; 
    let charIndex = 0;        
    const typingSpeed = 100;  
    const erasingSpeed = 50;  
    const blinkSpeed = 500; 

    let isErasing = false;  
    let typingComplete = false; 

    function typeText() {
        const word = words[currentWordIndex];     
        const fullText = staticText + word;        

        if (!isErasing) {
            if (charIndex < fullText.length) {
                if (charIndex < staticText.length) {
                   
                    textElement.innerHTML = staticText;
                } else {
                    const currentWord = fullText.slice(staticText.length, charIndex + 1);
                    const wordClass = getClassForWord(word); 
                    textElement.innerHTML = staticText + `<span class="${wordClass}">${currentWord}</span>`;
                }
                charIndex++;
                setTimeout(typeText, typingSpeed); 
            } else {
                typingComplete = true;
                setTimeout(() => {
                    isErasing = true; 
                    setTimeout(typeText, 1000); 
                }, 1000);
            }
        } else {
            if (charIndex > staticText.length) {
                const currentHTML = textElement.innerHTML;
                textElement.innerHTML = currentHTML.slice(0, currentHTML.length - 1);
                charIndex--;
                setTimeout(typeText, erasingSpeed); 
            } else {
                isErasing = false;
                typingComplete = false;
                currentWordIndex = (currentWordIndex + 1) % words.length; 
                setTimeout(typeText, 500);
            }
        }
    }

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

    function blinkCursor() {
        setInterval(function () {
            cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
        }, blinkSpeed);
    }

    typeText();
    blinkCursor();
});














var theToggle = document.getElementById('toggle');


function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
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



var spanText = function(text) {
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.length; i++) {
      if (string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
      else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spaned;
  };
  
  var headline = document.getElementById("animatedHeading");
  spanText(headline);
  
  let animations = document.querySelectorAll('#animatedHeading');
  
  animations.forEach(animation => {
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
      letter.style.animationDelay = (i * 0.1) + 's';
    });
  });
  
  window.addEventListener('load', () => {
    document.querySelector('.nameContainer').classList.add('animateOnLoad');
  });

  // Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Variables for tracking mouse position and smoothing
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Listen for mouse movement
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth the cursor's movement with a small delay
function moveCursor() {
  const distX = mouseX - cursorX;
  const distY = mouseY - cursorY;

  // Apply some smoothing to the cursor movement
  cursorX += distX / 10;
  cursorY += distY / 10;

  // Set cursor position
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  // Request the next animation frame for smooth movement
  requestAnimationFrame(moveCursor);
}

// Start the cursor movement
moveCursor();



  

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