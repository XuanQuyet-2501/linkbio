document.addEventListener('DOMContentLoaded', function () {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds}`;
        const timeElement = document.getElementById('time');
        if (timeElement) {
            timeElement.textContent = timeString;
        } else {
            console.error('Element with ID "time" not found');
        }
    }

    setInterval(updateClock, 1000);
    updateClock();

    const mp3 = new Audio('./all/chill.mp3');
    mp3.loop = true;
    let isPlaying = false;

    const playimg = './all/playbtn.png';
    const pauseimg = './all/pausebtn.png';
    const musicimg = './all/music.png';

    const image = document.getElementById('imageduma');
    const playbtn = document.getElementById('play');
    image.addEventListener('mouseenter', function () {
        image.setAttribute('src', playimg);
    });

    image.addEventListener('mouseleave', function () {
        image.setAttribute('src', musicimg);
    });


    playbtn.addEventListener('click', function () {
        if (isPlaying) {
            mp3.pause();
            isPlaying = false;
            image.setAttribute('src', playimg);
            image.addEventListener('mouseenter', function () {
                image.setAttribute('src', playimg);
            });
        
            image.addEventListener('mouseleave', function () {
                image.setAttribute('src', musicimg);
            });
        
        } else {
            mp3.play();
            isPlaying = true;
            image.setAttribute('src', pauseimg);
            image.addEventListener('mouseenter', function () {
                image.setAttribute('src', pauseimg);
            });
        
            image.addEventListener('mouseleave', function () {
                image.setAttribute('src', musicimg);
            });        
        }
    });
});