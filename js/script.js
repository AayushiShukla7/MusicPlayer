let closePlayer = document.querySelector('#close-player');
let musicPlayer = document.querySelector('.music-player');
let boxContainer = document.querySelector('.container .box-container');

closePlayer.onclick = () =>{
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    boxContainer.classList.toggle('active');
}

let boxes = document.querySelectorAll('.container .box-container .box');

boxes.forEach(box => {
    box.onclick = () => {
        let src = box.getAttribute('data-src');
        let text = box.querySelector('.content h3').innerText;

        closePlayer.classList.add('fa-times');
        musicPlayer.classList.add('active');
        boxContainer.classList.add('active');

        musicPlayer.querySelector('h3').innerText = text;
        musicPlayer.querySelector('audio').src = src;
        musicPlayer.querySelector('audio').play();
    }
});

//Toggle between dark and light themes
var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")) {
        icon.src = "/icons/sun.png";
    }
    else {
        icon.src = "/icons/moon.png";
    }
}


