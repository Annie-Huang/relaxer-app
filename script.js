const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;    // 3s
const holdTime = totalTime / 5;             // 1.5s

breatheAnimation();

function breatheAnimation() {
    text.innerHTML = 'Breath In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerHTML = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime)

    }, breatheTime);
}

setInterval(breatheAnimation, totalTime);
