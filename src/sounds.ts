import sounds from "./sound";



function playAudio(url:string){
    let audio = new Audio();
    audio.src=url;
    audio.play();
}


export function applause (){
    playAudio(sounds.clap.audience1);
}


export function applause_deep (){
    playAudio(sounds.clap.audience_long_deep);
}

export function applause_firework (){
    playAudio(sounds.clap.audience_firework);
}
