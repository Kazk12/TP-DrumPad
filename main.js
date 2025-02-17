let time = Date.now();
let sons = [];
let delay = [];
let intervals = [];
let record = false;
let play = false;

window.addEventListener("keydown", handleKeyDownAudio);
window.addEventListener("keyup", handleKeyDownAudio);
window.addEventListener("keydown", handleKeyDownRecord);
window.addEventListener("keydown", handleKeyDownPlaying);

function handleKeyDownAudio(event) {
  let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (event.repeat) {
    return;
  }
  if (!key) {
    return;
  }
  if (event.keyCode != 82 && event.keyCode != 80) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.play();
    key.classList.toggle("playing");
  }
}
function handleKeyDownRecord(event) {
  if (event.keyCode == "82") {
    record = !record;
    let key = document.querySelector(`.key[data-key="82"]`);
    key.classList.toggle("playing");
    if (record) {
      sons = [];
      intervals = [];
      delay = [];
    }
  }
  if (event.keyCode != "82" && event.keyCode != "80" && record == true) {
    sons.push(event.keyCode);
    intervals.push(Date.now());
    let PremierTemps = intervals[0];
    let interval = intervals[intervals.length - 1] - PremierTemps;
  console.log(interval);
    delay.push(interval);
    console.log(delay)
  }
}
function handleKeyDownPlaying(event) {
  if (event.keyCode == "80") {
    play = !play;
    let key = document.querySelector(`.key[data-key="80"]`);
    key.classList.add("playing");
    sons.forEach((son, index) => {
      let DrumPad = document.querySelector(`audio[data-key="${son}"]`);    
      setTimeout(() => {       
          document.querySelector(`.key[data-key="${son}"]`).classList.add("playing");
          DrumPad.play();
        }, delay[index]); 
        setTimeout(() => {        
            document.querySelector(`.key[data-key="${son}"]`).classList.remove("playing");     
        }, delay[index] + 200);  
    });
    setTimeout(() => {
    key.classList.remove("playing");
    }, delay[delay.length - 1])
    
  }
}
