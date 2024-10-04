import React from "react";
import OscillatorUI from "../Interfaces/OscillatorUI";
import Envelope from "../Interfaces/Envelope";
import DialBox from "../Interfaces/DialBox";

const ModulationPanel = ({ options, handleChange }) => {
  return (
    <div className="flex flex-col items-center ml-12">
      <h1 className="text-pink mt-4 mb-4 text-2xl">Modulation</h1>
      <div className="flex flex-col gap-4">
        <OscillatorUI
          options={options}
          textColor="pink"
          fill={"#22FA75"}
          onChange={(value) => handleChange("oscillator", value)}
        />
        <Envelope
          label={"Modulation"}
          textColor="pink"
          fill={"#22FA75"}
          onChange={(value) => handleChange("envelope", value)}
        />
        <div className="flex flex-row justify-between">
          <DialBox
            label={"Mod Index"}
            fill={"#22FA75"}
            min={0}
            max={100}
            step={1}
            value={10}
            onChange={(value) => handleChange("modulationIndex", value)}
          />
          <DialBox
            label={"Mod Freq"}
            fill={"#22FA75"}
            min={0}
            max={20}
            step={0.1}
            value={0.4}
            onChange={(value) => handleChange("modulationFrequency", value)}
          />
          <DialBox
            label={"Harmonicity"}
            fill={"#22FA75"}
            min={0}
            max={20}
            step={0.1}
            value={options.harmonicity}
            onChange={(value) => handleChange("harmonicity", value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ModulationPanel;
