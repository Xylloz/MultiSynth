import React from "react";
import Synth from "./Synth/Synth";

const Main = ({ nickname }) => {
	return (
		<div className="bg-backerground h-screen w-screen">
			<Synth nickname={nickname} />
		</div>
	);
};

export default Main;
