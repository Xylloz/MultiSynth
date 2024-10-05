import Nexus from "nexusui";
import { useEffect, useRef } from "react";

const OscillatorUI = ({ options, textColor, fill, onChange }) => {
	const sliderRef = useRef(null);

	useEffect(() => {
		const slider = new Nexus.Slider(sliderRef.current, {
			size: [300, 25],
			mode: "absolute",
			min: 0,
			max: 10,
			step: 1,
			value: 0,
		});

		// Styling
		slider.colorize("fill", "#222222");
		slider.colorize("accent", fill);

		// Event Listeners
		slider.on("change", (value: number) => {
			console.log("Slider value changed: ", { value });
		});

		// Cleanup
		return () => {
			slider.destroy();
		};
	}, [fill]); // Only run on mount

	return (
		<div className="flex flex-col items-center flex-grow">
			{/* Header */}
			<h2 className={`text-xl mb-2 text-${textColor}`}>Oscillator</h2>
			{/* <div className="flex flex-row">
        <div className="flex flex-row" ref={radioRef}></div>
      </div> */}
			<div className="flex flex-row mb-2">
				<h3 className="text-white text-sm px-1">Sine</h3>
				<h3 className="text-white text-sm px-1">Square</h3>
				<h3 className="text-white text-sm px-1">Sawtooth</h3>
				<h3 className="text-white text-sm px-1">Triangle</h3>
				<h3 className="text-white text-sm px-1">Pulse</h3>
			</div>
			<div className="flex flex-col items-center">
				<h2 className={`text-lg p-1 text-${textColor}`}>Partial Count</h2>
				<div ref={sliderRef} />
			</div>
		</div>
	);
};

export default OscillatorUI;
