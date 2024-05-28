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
  default: "https://opengameart.org/sites/default/files/audio_preview/applause.wav.mp3",
  foot_walk: "https://opengameart.org/sites/default/files/montageAudio-20120408%40143711.mp3",
  snow_walk: "https://opengameart.org/sites/default/files/audio_preview/SnowWalk.ogg.mp3",
  shovel_dig: "https://opengameart.org/sites/default/files/audio_preview/shovel.ogg.mp3",
  dig_underground: "https://opengameart.org/sites/default/files/dig_underground_1.mp3",
  rocket_flyby: "https://opengameart.org/sites/default/files/audio_preview/rocket.wav.mp3",
  gun_cork: "https://cdn.freesound.org/previews/737/737577_15579660-lq.mp3",
  space_launch: "https://cdn.freesound.org/previews/737/737578_71257-lq.mp3",
  foot_walk2: "https://cdn.freesound.org/previews/157/157031_2835342-lq.mp3",
  hospital_walk: "https://cdn.freesound.org/previews/58/58742_321967-lq.mp3",
  walking_on_wood: "https://cdn.freesound.org/previews/394/394923_3232146-lq.mp3",
  gravel_walk: "https://cdn.freesound.org/previews/43/43781_29541-lq.mp3",
  baby_cry: "https://cdn.freesound.org/previews/386/386923_7227448-lq.mp3",
  deep_baby_cry: "https://cdn.freesound.org/previews/667/667199_14585550-lq.mp3",
  crying_new_born: "https://cdn.freesound.org/previews/211/211527_2451161-lq.mp3",
  man_groan: "https://cdn.freesound.org/previews/133/133788_1688566-lq.mp3",
  ghost_cry: "https://cdn.freesound.org/previews/392/392605_5937039-lq.mp3",
  bird_cry: "https://cdn.freesound.org/previews/731/731772_12846320-lq.mp3",
  baby_cry_long: "https://cdn.freesound.org/previews/58/58741_321967-lq.mp3",
  evil_laugh: "https://cdn.freesound.org/previews/366/366174_875457-lq.mp3",
  evil_laugh_loud: "https://cdn.freesound.org/previews/239/239580_2698284-lq.mp3",
  witch_laugh: "https://cdn.freesound.org/previews/557/557529_10098211-lq.mp3",
  audience_laugh: "https://cdn.freesound.org/previews/171/171114_2140699-lq.mp3"
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
