import * as Tone from "tone"; //npm install tone

const synth = new Tone.Synth().toDestination();
let sounds: string[] = [];

document.addEventListener("keydown", async (e) => {
    switch (e.key) {
        case "a":
            if (!sounds.includes("C4"))
                sounds.push("C4");
            await Tone.start();
            synth.triggerAttackRelease("C4", "8n");
            break;
        default:
            return;
    }
});

document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "a":
            sounds.splice(sounds.indexOf("C4"), 1);
        default:
            return;
    }
});

console.log("script.js loaded!");