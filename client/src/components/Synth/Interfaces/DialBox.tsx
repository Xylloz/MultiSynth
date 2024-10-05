import Nexus from "nexusui";
import React, { useEffect, useRef } from "react";

const DialBox = ({ label, fill, min, max, step, value, onChange }) => {
	const dialRef = useRef(null);
	const numRef = useRef(null);

	useEffect(() => {
		const dial = new Nexus.Dial(dialRef.current, {
			size: [60, 60],
			interaction: "radial",
			min: min,
			max: max,
			step: step,
			value: value,
		});

		dial.colorize("accent", "text-lightblue");
		dial.colorize("fill", fill);

		const number = new Nexus.Number(numRef.current, {
			size: [50, 25],
			min: min,
			max: max,
			step: step,
			value: value,
		});

		number.link(dial);

		dial.on("change", (v) => {
			console.log("dial changed: ", v);
			onChange(v);
		});

		return () => {
			// Cleanup
			dial.destroy();
			number.destroy();
		};
	}, []); // On mount

	return (
		<div className="flex flex-col items-center mx-2">
			<h3 className="text-white text-center text-sm">{label}</h3>
			<div ref={dialRef} />
			<div ref={numRef} />
		</div>
	);
};

export default DialBox;
