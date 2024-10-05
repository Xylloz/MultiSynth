import React, { useState } from "react";
import * as Tone from "tone";
import Main from "./components/Main";
import Splash from "./components/Splash";

const App = () => {
	const [nickname, setNickname] = useState("");

	const handleEnterPage = async (nickname: string) => {
		await Tone.start();
		setNickname(nickname);
	};

	return (
		<>
			{nickname ? (
				<Main nickname={nickname} />
			) : (
				<Splash onEnterPage={handleEnterPage} />
			)}
		</>
	);
};

export default App;
