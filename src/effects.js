import * as Tone from "tone";
export { reverb, delay, chorus, phaser, stereowidener, distortion, bitcrusher, tremolo, vibrato };
const reverb = new Tone.Reverb({
    decay: 5,
    wet: 0.3
});
const delay = new Tone.FeedbackDelay({
    delayTime: "8n",
    feedback: 0.5,
    wet: 0.3
});
const chorus = new Tone.Chorus({
    frequency: 4,
    depth: 2,
    wet: 0.3
});
const phaser = new Tone.Phaser({
    frequency: 80,
    octaves: 3,
    baseFrequency: 1000
});
const stereowidener = new Tone.StereoWidener(0); //0: mid, 1: side
const distortion = new Tone.Distortion(0.8);
const bitcrusher = new Tone.BitCrusher(4);
const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start();
const vibrato = new Tone.Vibrato(4, 0.5);
//# sourceMappingURL=effects.js.map