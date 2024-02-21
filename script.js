

// Getting the current width and height
function widthHeightResizer(){
    console.clear();    
    console.log("Width: " + window.innerWidth);
    console.log("Height: " + window.innerHeight);
}

widthHeightResizer();
window.addEventListener('resize',widthHeightResizer);

//#region Responsive
function getResponsiveAnimationObject(){
    var x = document.getElementById("ANIMATION");
    if(x.className === "image")
        x.className += " responsive";
    else
        x.className = "image";
}

getResponsiveAnimationObject();

window.addEventListener("resize", getResponsiveAnimationObject);

//#endregion

//#region Scrolls

function scrollToElement(elementSelector, instance = 0){
 const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance)
        elements[instance].scrollIntoView({behavior: 'smooth'});
    
}


const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

//#region Scroll Up

document.getElementById('link4').addEventListener('click', function(){
    // Obtains the position of the objective div
    var ToElement = document.getElementById('HOWIWORK');
    var positionElement_4 = ToElement.getBoundingClientRect().top;

    // Calculates the current position on the window
    var scrollY_4 = window.scrollY;

    window.scrollTo({
        top: positionElement_4 + scrollY_4,
        behavior: 'smooth'
    });
});


document.getElementById('link5').addEventListener('click', function(){
    // Obtains the position of the objective div
    var ToElement = document.getElementById('FEATURES');
    var positionElement_4 = ToElement.getBoundingClientRect().top;

    // Calculates the current position on the window
    var scrollY_4 = window.scrollY;

    window.scrollTo({
        top: positionElement_4 + scrollY_4,
        behavior: 'smooth'
    });
});


document.getElementById('link6').addEventListener('click', function(){
    // Obtains the position of the objective div
    var ToElement = document.getElementById('PRICING');
    var positionElement_4 = ToElement.getBoundingClientRect().top;

    // Calculates the current position on the window
    var scrollY_4 = window.scrollY;

    window.scrollTo({
        top: positionElement_4 + scrollY_4,
        behavior: 'smooth'
    });
});

//#endregion ScrollUp

//#endregion Scrolls

