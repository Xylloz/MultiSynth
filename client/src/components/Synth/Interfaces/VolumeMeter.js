import React, { useEffect, useRef } from "react";
import Nexus from "nexusui";

const VolumeMeter = ({ synth }) => {
  const meterRef = useRef(null);

  useEffect(() => {
    // Instantiate
    const meter = new Nexus.Meter(meterRef.current, {
      size: [60, 750],
    });
    // Styling
    meter.colorize("fill", "#222222");
    meter.colorize("accent", "#FA22A7");

    // Connect to synth node
    if (synth) {
      meter.connect(synth);
    }

    // Cleanup on dismount
    return () => {
      meter.destroy();
    };
  }, []);
  return (
    <div className="flex-none m-0 p-0">
      <div ref={meterRef}></div>
    </div>
  );
};

export default VolumeMeter;
