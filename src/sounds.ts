import sounds from "./sound";



function playAudio(url:string,time:number){
    // highest duration a video can play is 5seconds
    let duration = 5 * 1000;
    let audio = new Audio();
    audio.src=url;
    audio.onloadedmetadata = () =>{
        // determine which duration is shorter the audios duration or the 5seconds
        duration = Math.min(audio.duration,5) * 1000;
    }
    audio.play();
    // pause after the time is reached or the video is over
    audio.onplay = () => {
        console.log("audio is playing")
        setTimeout(() => {
            audio.pause();
            console.log("maximum reaction time is reached")
        },duration);
    }
}


export function applause (time?:number){
    // time to be given in seconds
    playAudio(sounds.clap.audience1,time?time:5);
}


export function applause_deep (time?:number){
    playAudio(sounds.clap.audience_long_deep,time?time:5);
}

export function applause_firework (time?:number){
    playAudio(sounds.clap.audience_firework,time?time:5);
}
