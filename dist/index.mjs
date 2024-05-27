// src/sound.ts
var sounds = {
  "clap": {
    "audience1": "https://opengameart.org/sites/default/files/audio_preview/applause.wav.mp3",
    "audience_long_deep": "https://opengameart.org/sites/default/files/audio_preview/applause-clapping-church-crowd-immersive-preview.ogg.mp3",
    "audience_firework": "https://opengameart.org/sites/default/files/applause_fireworks.mp3"
  }
};
var sound_default = sounds;

// src/sounds.ts
function playAudio(url) {
  let audio = new Audio();
  audio.src = url;
  audio.play();
}
function applause() {
  playAudio(sound_default.clap.audience1);
}
function applause_deep() {
  playAudio(sound_default.clap.audience_long_deep);
}
function applause_firework() {
  playAudio(sound_default.clap.audience_firework);
}
export {
  applause,
  applause_deep,
  applause_firework
};
