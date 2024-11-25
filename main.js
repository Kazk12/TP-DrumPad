// window.addEventListener("keydown", handleKeyDownAudio);

// function handleKeyDownAudio(event){
//     if(event.repeat){return}
//     let touche = event.keyCode
//     var audio = document.querySelector(`audio[data-key="${touche}"]`);
    
//         audio.play()
//     };
let time = Date.now()
// let currentMilliseconds = new Date().getTime();
console.log(currentMilliseconds - time);


let sons = [];
let record = false;
let play = false;


window.addEventListener("keydown", handleKeyDownAudio);
window.addEventListener("keyup", handleKeyUpAudio);
window.addEventListener("keydown", handleKeyDownRecord);
window.addEventListener("keydown", handleKeyDownPlaying);

function handleKeyDownAudio(event){
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(event.repeat){return}
    if(!key){
        return
    }
    if(event.keyCode != 82 && event.keyCode != 80){
        let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); 
        audio.play();
        key.classList.add("playing");  
    }    
    }
function handleKeyUpAudio(event){
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(event.keyCode != 82 && event.keyCode != 80){
        key.classList.remove("playing");  
    } 
}

function handleKeyDownRecord(event){
    
    if(event.keyCode == "82" && play == false){
        record = !record
        let key = document.querySelector(`.key[data-key="82"]`);
        key.classList.toggle("playing");
           
    } 
    if(event.keyCode != "82" && event.keyCode != "80" && record == true){
        sons.push(event.keyCode)
    }
     
    
    
}
function handleKeyDownPlaying(event){
    if(event.keyCode == "80" && record == false){
        play = !play
        let key = document.querySelector(`.key[data-key="80"]`);
        key.classList.toggle("playing");
        sons.forEach((son => {
            let test = document.querySelector(`audio[data-key="${son}"]`); 
            test.play()
        }))
        
        
    }

}


// console.log(sons);
    