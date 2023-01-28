

/*

    function that checks screen resolution.
    If resolution is more than 1920x1080, change inital img size etc.
    

*/

const imgContainer = document.querySelector("#container-image");
const passwordInput = document.querySelector("#user-password");
const passwordRepeat = document.querySelector("#user-password-valid");
const textPassNotMatch = document.querySelector("#p-user-password");

textPassNotMatch.style.display = "none";





function resizeWindow(){

    // When window is resized, 2 new variables with window height and length.
    // Simple check if window is fullscreened on my smalle screen or bigger screen.

    let wHeight = window.outerHeight;
    let wWidth = window.outerWidth;
    console.log(wHeight,wWidth)
    if(wHeight > 1150 && wWidth > 2000){
        imgContainer.style.width = "1000px";
    }
    else {
        imgContainer.style.width = "700px";
    }
}



function passwordValidation(event){

    /*
    When input password is focused, also focus the repeat password input.
    Check for password match, while passwords do not match, display <p> tag saying they do not match.

    Use keydown eventlistener on the password input to listen on every keystroke.
    Every keystroke runs code that checks if the passwords match.
    */

    textPassNotMatch.style.display = "inline";
    if(event.target.value.length === 0){
        textPassNotMatch.style.display = "none";
    }
    if (event.target.value.length >= 5) {
	    if(event.target.value === passwordInput.value){
	        console.log("yeah")
	        textPassNotMatch.style.display = "none";
	        passwordRepeat.classList.toggle("user-pass-match");
	        passwordInput.classList.toggle("user-pass-match");
	
	    }
}
    
}









window.addEventListener("resize", resizeWindow);
passwordRepeat.addEventListener("input", (event) => passwordValidation(event));