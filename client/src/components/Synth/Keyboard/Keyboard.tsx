import Notes from "@src/constants/Notes";
import socket from "@utils/socket";
import { useEffect, useState } from "react";
import Key from "./Key";

const Keyboard = ({ synth }) => {
	const [activeKeys, setActiveKeys] = useState([]);
	const [isPlaying, setIsPlaying] = useState(false);

	// Define socket listeners on mount
	useEffect(() => {
		const handleKeyDown = (user, key: string) => {
			console.log(`server ${user} has pressed ${key}`);
			console.log(`server setting ${key} as active`);
			if (!isPlaying) setIsPlaying(true);
			// Add key to activeKeys
			setActiveKeys((prevKeys) => [...prevKeys, key]);
		};

		const handleKeyUp = (user, key: string) => {
			console.log(`server ${user} has released ${key}`);
			console.log(`server releasing ${key}`);
			// Remove the released key from state
			setActiveKeys((prevKeys) => prevKeys.filter((k) => k !== key));

			// Release the note from the synth
			if (synth) {
				synth.triggerRelease(key);
			}
		};

		socket.on("keydown", handleKeyDown);
		socket.on("keyup", handleKeyUp);

		return () => {
			socket.off("keydown", handleKeyDown);
			socket.off("keyup", handleKeyUp);
		}; // Cleanup on dismount
	}, [synth, isPlaying]);

	// Play current active notes
	useEffect(() => {
		if (synth) {
			synth.triggerAttack(activeKeys);
		}
		// return () => {
		//   synth.releaseAll();
		// }
	}, [activeKeys, synth]);

	const handleKeyPress = (key: string) => {
		console.log(`user setting ${key} as active`);

		// Send event to other clients
		socket.emit("keydown", key);

		if (!isPlaying) setIsPlaying(true);

		// Add key to activeKeys
		setActiveKeys((prevKeys) => [...prevKeys, key]);
	};

	const handleKeyRelease = (key: string) => {
		console.log(`user releasing ${key}`);

		// Send event to other clients
		socket.emit("keyup", key);

		// Release key from synth
		if (isPlaying) {
			synth.triggerRelease(key);
		}

		// Remove the released key from state
		setActiveKeys((prevKeys) => prevKeys.filter((k) => k !== key));
	};

	return (
		<div className="flex flex-col items-center mb-12">
			<div className="flex flex-row flex-nowrap justify-center">
				{Notes.map((note: string) => (
					<Key
						key={note}
						note={note}
						isPlaying={isPlaying}
						isFlat={note.length > 2}
						onPress={handleKeyPress}
						onRelease={handleKeyRelease}
						synth={synth} // Pass the synth instance to the Key component
					/>
				))}
			</div>
		</div>
	);
};

export default Keyboard;
