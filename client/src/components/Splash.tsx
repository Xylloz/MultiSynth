import { useState } from "react";

const Splash = ({ onEnterPage }) => {
	const [userInput, setUserInput] = useState("");

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		if (userInput) {
			onEnterPage(userInput);
		}
	};
	return (
		<div className="flex flex-col justify-center items-center h-screen bg-background">
			<div className="p-8 rounded-lg">
				<h1 className="text-2x1 text-white mb-4">Welcome to MultiSynth!</h1>
				<form className="flex flex-col items-center" onSubmit={handleSubmit}>
					<input
						className="text-gray-600 p-2"
						type="text"
						value={userInput}
						onChange={(e) => setUserInput(e.target.value)}
						placeholder="Username"
					/>
					<button
						type="submit"
						className="bg-blue-599 text-white px-4 py-2 rounded"
					>
						Enter Lounge
					</button>
				</form>
			</div>
		</div>
	);
};

export default Splash;
