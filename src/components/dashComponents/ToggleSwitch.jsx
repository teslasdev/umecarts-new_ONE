import { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <p>{isToggled ? "On" : "Off"}</p>
    </div>
  );
};

export default ToggleSwitch;
