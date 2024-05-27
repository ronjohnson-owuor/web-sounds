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
  applause: () => applause,
  applause_deep: () => applause_deep,
  applause_firework: () => applause_firework
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  applause,
  applause_deep,
  applause_firework
});
