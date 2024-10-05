import Nexus from "nexusui";
import { useEffect, useRef } from "react";

const Oscilloscope = ({ synth, exportHandler }) => {
	const oscRef = useRef(null);
	const spectroRef = useRef(null);

	useEffect(() => {
		// Instantiate
		const osc = new Nexus.Oscilloscope(oscRef.current, {
			size: [240, 100],
		});

		const spectrogram = new Nexus.Spectrogram(spectroRef.current, {
			size: [240, 100],
		});

		// Styling
		osc.colorize("fill", "#222222");
		osc.colorize("accent", "#FA22A7");

		spectrogram.colorize("fill", "#222222");
		spectrogram.colorize("accent", "#FA22A7");

		// Connect to synth node
		if (synth) {
			osc.connect(synth);
			spectrogram.connect(synth);
		}

		return () => {
			osc.destroy();
			spectrogram.destroy();
		};
	}, []); // On Mount

	return (
		<div className="flex flex-col ml-1.5 mt-4">
			<div className="flex flex-row flex-grow items-center">
				<button className="text-pinker bg-foreground text-sm mr-2">
					Import
				</button>
				<button
					className="text-pinker bg-foreground text-sm ml-2"
					onClick={exportHandler}
				>
					Export
				</button>
			</div>
			{/* Nexus Oscilloscope */}
			<h2 className="text-white text-xl">Oscilloscope</h2>
			<div className="mt-1.5" ref={oscRef} />
			<h2 className="text-white text-xl mt-1">Spectrogram</h2>
			<div className="mt-1.5 mb-4" ref={spectroRef} />
		</div>
	);
};

export default Oscilloscope;
