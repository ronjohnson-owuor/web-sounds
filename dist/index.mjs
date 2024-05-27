// src/sound.ts
var sounds = {
  audience1: "https://opengameart.org/sites/default/files/audio_preview/applause.wav.mp3",
  audience_long_deep: "https://opengameart.org/sites/default/files/audio_preview/applause-clapping-church-crowd-immersive-preview.ogg.mp3",
  audience_firework: "https://opengameart.org/sites/default/files/applause_fireworks.mp3",
  car_passing: "https://opengameart.org/sites/default/files/audio_preview/car1.wav.mp3",
  car_hoot: "https://opengameart.org/sites/default/files/audio_preview/car2.wav.mp3",
  car_engine_rave: "https://opengameart.org/sites/default/files/audio_preview/car_acceleration.ogg.mp3",
  car_fixing: "https://opengameart.org/sites/default/files/scifiprev.mp3",
  default: "https://opengameart.org/sites/default/files/audio_preview/applause.wav.mp3",
  foot_walk: "https://opengameart.org/sites/default/files/montageAudio-20120408%40143711.mp3",
  snow_walk: "https://opengameart.org/sites/default/files/audio_preview/SnowWalk.ogg.mp3",
  shovel_dig: "https://opengameart.org/sites/default/files/audio_preview/shovel.ogg.mp3",
  dig_underground: "https://opengameart.org/sites/default/files/dig_underground_1.mp3",
  rocket_flyby: "https://opengameart.org/sites/default/files/audio_preview/rocket.wav.mp3",
  sex_sounds: "https://www.soundsnap.com/play?t=e&p=files/audio/33/238266-MF_Sex.mp3"
};
var sound_default = sounds;

// src/sounds.ts
function playAudio(url, time) {
  let duration = 7 * 1e3;
  let audio = new Audio();
  audio.src = url;
  audio.onloadedmetadata = () => {
    duration = Math.min(audio.duration, 5) * 1e3;
  };
  audio.play();
  audio.onplay = () => {
    console.log("audio is playing");
    setTimeout(() => {
      audio.pause();
      console.log("maximum reaction time is reached");
    }, duration);
  };
}
function play_reaction(sound_name, time) {
  const soundUrl = sound_default[sound_name] || sound_default.default;
  playAudio(soundUrl, time ? time : 7);
}
export {
  play_reaction
};
