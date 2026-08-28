import * as Tone from "tone";

export default class MIDI {
    access?: MIDIAccess;
    private input?: MIDIInput;
    inited: boolean = false;

    async init(){
        if (!navigator.requestMIDIAccess) throw new Error("Your browser does not support MIDI! :(");
        this.access = await navigator.requestMIDIAccess();
        this.access.addEventListener("statechange", () => this.refreshInputs());
        this.refreshInputs();
        console.info("MIDI inited");
        this.inited = true;
    }

    private refreshInputs(){
        if (!this.access) return;
        this.access.inputs.forEach((inp) => {
            console.log("MIDI input: " + inp.name + " : " + inp.id);
        });
    }

    selectInput(id: string, playSound: Function, releaseSound: Function){
        if (!this.access) return;
        const inp = this.access.inputs.get(id);
        if (!inp) throw new Error("MIDI input not found with id " + id + ".");
        this.input = inp;
        this.input.onmidimessage = (e) => {
            const msg =  this.parse(e.data);
            console.log(msg);
            if (msg === undefined) return;
            if (msg[0] === 1)
                playSound(msg[1], msg[2]);
            if (msg[0] === 0)
                releaseSound(msg[1])
        }
    }
    ///0: released
    ///1: pressed
    parse(msg: Uint8Array<ArrayBuffer> | null) {
        if (msg === null || msg[0] === undefined || msg[1] === undefined || msg[2] === undefined) return;
        const type = msg[0] & 0xF0;
        const note = msg[1];
        const velocity = msg[2];
        if (type === 0x90 && velocity > 0)
            return [1, note, velocity];
        if (type === 0x80 || (type === 0x90 && velocity === 0))
            return [0, note];
        return [type, note, velocity];
    }
}