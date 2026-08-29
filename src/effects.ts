import * as Tone from "tone";
export {reverb, delay, chorus, phaser, stereowidener, distortion, bitcrusher, tremolo, vibrato};

const reverb: Tone.Reverb = new Tone.Reverb({
    decay: 5,
    wet: 0.3
});
const delay: Tone.FeedbackDelay = new Tone.FeedbackDelay({
    delayTime: "8n",
    feedback: 0.5,
    wet: 0.3
});
const chorus: Tone.Chorus = new Tone.Chorus({
    frequency: 4,
    depth: 2,
    wet: 0.3
});
const phaser: Tone.Phaser = new Tone.Phaser({
    frequency: 80,
    octaves: 3,
    baseFrequency: 1000
});
const stereowidener = new Tone.StereoWidener(0);//0: mid, 1: side
const distortion: Tone.Distortion = new Tone.Distortion(0.8);
const bitcrusher: Tone.BitCrusher = new Tone.BitCrusher(4);
const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start();
const vibrato = new Tone.Vibrato(4, 0.5);