import * as Tone from "tone";

// const optionsDefault = {
//   volume,
//   detune,
//   modulationIndex,
//   harmonicity,
//   envelope: {
//     attack: 0,
//     decay: 0,
//     sustain: 1,
//     release: 0.6,
//     attackCurve: "linear",
//     decayCurve: "linear",
//     releaseCurve: "linear",
//   },
// };

const createSynth = (options) => {
	const { volume, detune, modulationIndex, harmonicity, envelope, oscillator } =
		options;

	const synth = new Tone.PolySynth(Tone.FMSynth).toDestination();

	// const oscillator = {
	//   type: "triangle",
	//   partialCount: 3,
	//   partials: [0.75, 0.50, 0.25],
	// };

	synth.set({
		volume,
		detune,
		modulationIndex,
		harmonicity,
		oscillator,
		envelope,
	});

	return synth;
};

export default createSynth;
