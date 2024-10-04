import OscillatorUI from "../Interfaces/OscillatorUI";
import Envelope from "../Interfaces/Envelope";
import DialBox from "../Interfaces/DialBox";

const SynthPanel = ({ options, handleChange }) => {
  const envelopeOptions = {
    attack: 0,
    decay: 0.5,
    sustain: 1,
    release: 0.6,
    attackCurve: "linear",
    decayCurve: "linear",
    releaseCurve: "linear",
  };
  return (
    <div className="flex flex-col items-center ml-4">
      <h1 className="text-lightblue mt-4 mb-4 text-center text-2xl">Synth</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <DialBox
            label={"Volume"}
            fill={"#22A7FA"}
            min={0}
            max={1}
            step={0.05}
            value={options.volume}
            onChange={(value) => handleChange("volume", value)}
          />
          <DialBox
            label={"Detune"}
            fill={"#22A7FA"}
            min={-1000}
            max={1000}
            step={50}
            value={options.detune}
            onChange={(value) => handleChange("detune", value)}
          />
          <DialBox
            label={"Mod Index"}
            fill={"#22A7FA"}
            min={0}
            max={100}
            step={1}
            value={10}
            onChange={(value) => handleChange("modulationIndex", value)}
          />
          <DialBox
            label={"Harmonicity"}
            fill={"#22A7FA"}
            min={0}
            max={20}
            step={0.1}
            value={options.harmonicity}
            onChange={(value) => handleChange("harmonicity", value)}
          />
        </div>
        <Envelope
          label={"Amplitude"}
          textColor="lightblue"
          fill={"#22A7FA"}
          onChange={(value) => handleChange("envelope", value)}
        />
        <OscillatorUI
          options={options}
          textColor={"lightblue"}
          fill={"#22A7FA"}
          onChange={(value) => handleChange("oscillator", value)}
        />
      </div>
    </div>
  );
};

export default SynthPanel;
