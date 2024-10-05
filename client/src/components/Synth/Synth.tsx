import { useEffect, useState } from "react";
import createSynth from "@utils/tone";
import Keyboard from "./Keyboard/Keyboard";
import EffectsPanel from "./Panels/EffectsPanel";
import ModulationPanel from "./Panels/ModulationPanel";
import SidePanel from "./Panels/SidePanel/SidePanel";
import SynthPanel from "./Panels/SynthPanel";

import VolumeMeter from "./Interfaces/VolumeMeter";

const Synth = ({ nickname }) => {
	const initialOptions = {
		volume: 0.5,
		detune: 0,
		modulationIndex: 10,
		harmonicity: 0,
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
			type: "triangle",
			partialCount: 3,
		},
	};

	const [options, setOptions] = useState(initialOptions);
	const [synth, setSynth] = useState(createSynth(initialOptions));

	// Run when options are changed
	useEffect(() => {
		console.log("Options changed: ", options);
		synth.set(options);
		console.log("Synth: ", synth);
	}, [options, synth]);

	const handleChange = (option, value) => {
		setOptions((prevOptions) => ({
			...prevOptions,
			[option]: value,
		}));
	};

	const exportOptions = async () => {
		try {
			const response = await fetch("/api/paste", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(options),
			});
			const { url } = await response.json();
			navigator.clipboard.writeText(url);
		} catch (err) {
			console.warn("Exporting synth options failed");
			console.warn(err);
		}
	};

	return (
		<div className=" flex flex-row flex-shrink bg-background h-max w-full">
			<VolumeMeter synth={synth} />
			<SidePanel
				synth={synth}
				nickname={nickname}
				exportHandler={exportOptions}
			/>
			{/* Center Component */}
			<div className="flex flex-col mr-16">
				<div className="flex flex-row flex-grow">
					<SynthPanel options={options} handleChange={handleChange} />
					<ModulationPanel options={options} handleChange={handleChange} />
					<EffectsPanel options={options} handleChange={handleChange} />
				</div>
				<Keyboard synth={synth} />
			</div>
			{/* Right Volume */}
			<div className="transform scale-x-[-1]">
				<VolumeMeter synth={synth} />
			</div>
		</div>
	);
};

export default Synth;
