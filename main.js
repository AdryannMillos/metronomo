let isMetronomePlaying = false;
let bpm = 60;
let intervalId = null;

const audio = new Audio('metronome.mp3');

const playButton = document.getElementById('playButton');
const bpmInput = document.getElementById('bpmInput');

bpmInput.value = bpm;


playButton.addEventListener('click', () => {
    if (isMetronomePlaying) {
        isMetronomePlaying = false;
        playButton.innerText = 'Play';
        clearInterval(intervalId);
    } else {
        isMetronomePlaying = true;
        playButton.innerText = 'Pause';
        setMetronome({bpm});
    }
});

bpmInput.addEventListener('change', (event) => {
    bpm = event.target.value;
    if (isMetronomePlaying) {
        clearInterval(intervalId);
        setMetronome({bpm});
    }
});


function setMetronome({bpm}){
    const test = parseInt(bpm);
    const bpmInterval = 60000 / test;
    intervalId = 
    setInterval(() => {
        audio.play();
    }, bpmInterval);
}
