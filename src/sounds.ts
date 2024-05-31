import sounds from "./sound";



function playAudio(url:string,time:number){
    // highest duration a video can play is 5seconds
    let duration = time * 1000;
    let audio = new Audio();
    audio.src=url;
    audio.onloadedmetadata = () =>{
        // determine which duration is shorter the audios duration or the 5seconds
        if(time == -1){
            // play the whole video without posing
            duration = (audio.duration) * 1000;
        }else{
            duration = Math.min(audio.duration,time) * 1000;  
        }
        
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


    export function play_reaction(sound_name:string,time?:number){
        // time to be given in seconds
        //play the whole audio if time = -1;
        let  soundUrl = sounds[sound_name as keyof typeof sounds] || sounds.default;
        playAudio(soundUrl,time?time:7);
    }

    export function play_custom(custom_url:string,time?:number){
        // user can add his own custom url so that he can play his own audio
        playAudio(custom_url,time?time:7);
    }
