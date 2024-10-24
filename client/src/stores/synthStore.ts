import createSynth from "@src/utils/tone";
import type { FMSynth, FMSynthOptions, PolySynth } from "tone";
import { create } from "zustand";

interface SynthStore {
	synth: PolySynth<FMSynth>;
	options: FMSynthOptions;
    changeOptions: () => void;
}

export const synthStore = create<SynthStore>()((set) => ({
	synth: createSynth(),
    options: {
        modulationIndex: 2,
        harmonicity: 2,
        modulation: 1,
        modulationEnvelope:
{
			attack: 0,
			decay: 0.5,
			sustain: 1,
			release: 0.6,
			attackCurve: "linear",
			decayCurve: "linear",
			releaseCurve: "linear",
		},
    },
    changeOptions: (return)
}));

	const initialOptions: FMSynthOptions = {
		volume: 0.5,
		detune: 0,
		harmonicity: 0,
		modulationIndex: 10,
		envelope: {
			attack: 0,
			decay: 0.5,
			sustain: 1,
			release: 0.6,
			attackCurve: "linear",
			decayCurve: "linear",
			releaseCurve: "linear",
		},
		oscillator: {
			type: "sine1",
			phase: 0,
			volume: 0,
			mute: false,
			onstop: () => null,
		},
	};


