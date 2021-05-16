/*
 * getNextImage takes the current image and returns tthe next image in the sequence
 * @param {string}      img      The file name of the image to check
 * @return {string}              Returns the file name of the next image in the sequence
 */
function getNextImage (img){
    //object literal that picks an image file name given an imag file name
    var images = {
        'Best_Waifu_Cosplay_1.png' : 'Best_Waifu_Cosplay_2.png',
        'Best_Waifu_Cosplay_2.png' : 'Best_Waifu_Cosplay_3.png',
        'Best_Waifu_Cosplay_3.png' : 'Best_Waifu_Cosplay_4.png',
        'Best_Waifu_Cosplay_4.png' : 'Best_Waifu_Cosplay_5.png',
        'Best_Waifu_Cosplay_5.png' : 'Best_Waifu_Cosplay_1.png',
    }
    //returns the file name of the next image given a file name
    return images[img];
}
/*
 * changeLogo finds the changing logo by ID, pulls the file name of the current image, and changes the source to the next in the sequence 
 * @param {none}               No Parameters Provided 
 * @return {none}              No Parameters Returned
 */
function changeLogo (){
    //saves the changing logo to a variable
    const changingLogo = document.getElementById('changing-logo');
    //gets the file name of the current source of the logo
    currentLogo = changingLogo.src.split('\\').pop().split('/').pop();
    //uses the getNextImage function with the current source file name
    nextLogo = getNextImage(currentLogo);
    //changes the image source of the logo to file path with new file name
    changingLogo.src = './files/images/icons/' + nextLogo;
}

//adds an event listener to change the logo when it is clicked
const changingLogo = document.getElementById('changing-logo');
changingLogo.addEventListener("click", changeLogo)