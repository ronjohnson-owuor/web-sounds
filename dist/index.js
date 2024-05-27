"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  play_reaction: () => play_reaction
});
module.exports = __toCommonJS(src_exports);

// src/sound.ts
var sounds = {
  audience1: "https://opengameart.org/sites/default/files/audio_preview/applause.wav.mp3",
  audience_long_deep: "https://opengameart.org/sites/default/files/audio_preview/applause-clapping-church-crowd-immersive-preview.ogg.mp3",
  audience_firework: "https://opengameart.org/sites/default/files/applause_fireworks.mp3",
  car_passing: "https://opengameart.org/sites/default/files/audio_preview/car1.wav.mp3",
  car_hoot: "https://opengameart.org/sites/default/files/audio_preview/car2.wav.mp3",
  car_engine_rave: "https://opengameart.org/sites/default/files/audio_preview/car_acceleration.ogg.mp3",
  car_fixing: "https://opengameart.org/sites/default/files/scifiprev.mp3",
  default: "https://opengameart.org/sites/default/files/audio_preview/applause.wav.mp3"
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  play_reaction
});
