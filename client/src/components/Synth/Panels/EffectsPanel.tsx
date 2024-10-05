import DialBox from "../Interfaces/DialBox";

const EffectsPanel = ({ options, handleChange }) => {
	return (
		<div className="flex flex-col items-center ml-8">
			<h1 className="text-noob mt-4 mb-4 text-2xl">Effects</h1>
			<div className="flex flex-col gap-4 items-center">
				<div>
					<h2 className="text-noob text-xl mb-2 text-center">Auto Filter</h2>
					<div className="flex flex-row">
						<DialBox
							label={"Depth"}
							fill={"#FAE122"}
							min={0}
							max={1}
							step={0.05}
							value={1}
							onChange={(value) => handleChange("modulationIndex", value)}
						/>
						<DialBox
							label={"Frequency"}
							fill={"#FAE122"}
							min={10}
							max={1000}
							step={50}
							value={10}
							onChange={(value) => handleChange("frequency", value)}
						/>
						<DialBox
							label={"Octaves"}
							fill={"#FAE122"}
							min={-10}
							max={10}
							step={0.1}
							value={2.6}
							onChange={(value) => handleChange("octaves", value)}
						/>
					</div>
				</div>
				<div>
					<h2 className="text-noob text-xl mb-2 text-center">Reverb</h2>
					<DialBox
						label={"Decay"}
						fill={"#FAE122"}
						min={0.1}
						max={30}
						step={0.1}
						value={1}
						onChange={(value) => handleChange("decay", value)}
					/>
				</div>
				<div>
					<h2 className="text-noob text-xl mb-2 text-center">Vibrato</h2>
					<div className="flex flex-row flex-grow">
						<DialBox
							label={"Frequency"}
							fill={"#FAE122"}
							min={0}
							max={2000}
							step={1}
							value={9}
							onChange={(value) => handleChange("frequency", value)}
						/>
						<DialBox
							label={"Depth"}
							fill={"#FAE122"}
							min={0}
							max={1}
							step={0.1}
							value={0.75}
							onChange={(value) => handleChange("depth", value)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default EffectsPanel;
