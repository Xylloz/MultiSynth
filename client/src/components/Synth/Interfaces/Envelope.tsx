import Nexus from "nexusui";
import { useEffect, useRef } from "react";

const Envelope = ({ label, textColor, fill, onChange }) => {
	const envRef = useRef(null);
	const attackRef = useRef(null);
	const decayRef = useRef(null);
	const releaseRef = useRef(null);

	useEffect(() => {
		const envelope = new Nexus.Multislider(envRef.current, {
			size: [200, 100],
			numberOfSliders: 4,
			min: 0,
			max: 1,
			step: 0.05,
			candycane: 3,
			values: [0.05, 0.05, 1, 0.45],
			smoothing: 0,
			mode: "bar",
		});

		envelope.colorize("accent", "#222222");
		envelope.colorize("fill", fill);

		envelope.on("change", (v: number[]) => {
			console.log("Envelope changed: ", { v });
			onChange({ attack: v[0], decay: v[1], sustain: v[2], release: v[3] });
		});

		// Selection Boxes
		const attackCurve = new Nexus.Select(attackRef.current, {
			size: [80, 22],
			options: [
				"linear",
				"exponential",
				"sine",
				"cosine",
				"bounce",
				"ripple",
				"step",
			],
		});

		const decayCurve = new Nexus.Select(decayRef.current, {
			size: [80, 22],
			options: ["linear", "exponential"],
		});

		const releaseCurve = new Nexus.Select(releaseRef.current, {
			size: [80, 22],
			options: [
				"linear",
				"exponential",
				"sine",
				"cosine",
				"bounce",
				"ripple",
				"step",
			],
		});

		return () => {
			// Cleanup
			envelope.destroy();
			attackCurve.destroy();
			decayCurve.destroy();
			releaseCurve.destroy();
		};
	}, [fill, onChange]); // On Component Mount

	return (
		<div className="flex flex-col items-center">
			{/* Header */}
			<h2 className={`text-xl text-${textColor}`}>{`${label} Envelope`}</h2>
			<div className="flex flex-row mt-1.5">
				{/* Envelope Wrapper*/}
				<div className="flex flex-col">
					{/* ADSR Labels */}
					<div className="flex flex-row mb-2">
						<h3 className="text-white text-sm pr-1 pl-0.5">Attack</h3>
						<h3 className="text-white text-sm px-1">Decay</h3>
						<h3 className="text-white text-sm px-1">Sustain</h3>
						<h3 className="text-white text-sm pr-1">Release</h3>
					</div>
					{/* Envelope */}
					<div ref={envRef} />
				</div>
				{/* Curve Selector Wrapper */}
				<div className="flex flex-row">
					{/* Curve Selectors */}
					<div className="flex flex-col ml-4 mt-0 p-0">
						<h3 className="text-white text-sm">Attack Curve</h3>
						<div ref={attackRef} />
						<h3 className="text-white text-sm">Decay Curve</h3>
						<div ref={decayRef} />
						<h3 className="text-white text-sm">Release Curve</h3>
						<div ref={releaseRef} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Envelope;
