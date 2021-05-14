function getNextImage (img){
    var images = {
        'Best_Waifu_Cosplay_1.png' : 'Best_Waifu_Cosplay_2.png',
        'Best_Waifu_Cosplay_2.png' : 'Best_Waifu_Cosplay_3.png',
        'Best_Waifu_Cosplay_3.png' : 'Best_Waifu_Cosplay_4.png',
        'Best_Waifu_Cosplay_4.png' : 'Best_Waifu_Cosplay_5.png',
        'Best_Waifu_Cosplay_5.png' : 'Best_Waifu_Cosplay_1.png',
    }
    return images[img];
}

function changeLogo (){
    const changingLogo = document.getElementById('changing-logo');
    currentLogo = changingLogo.src.split('\\').pop().split('/').pop();
    console.log(currentLogo);
    nextLogo = getNextImage(currentLogo);
    console.log(nextLogo);
    changingLogo.src = './files/images/icons/' + nextLogo;
}

const changingLogo = document.getElementById('changing-logo');
changingLogo.addEventListener("click", changeLogo)