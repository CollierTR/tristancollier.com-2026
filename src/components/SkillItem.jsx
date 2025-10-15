import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function SkillItem({ arr, togglePlayMarquee }) {
  const [skillInteraction, toggleSkillInteraction] = useState(false);

  function handleHover() {
    togglePlayMarquee(false);
    toggleSkillInteraction(true);
  }

  function handleExit() {
    togglePlayMarquee(true);
    toggleSkillInteraction(false);
  }

  return (
    <div
      className={`flex justify-center place-items-center text-5xl lg:text-7xl lg:mx-12 size-28  ${arr.iconColor} text-primary-light`}
    >
      <FontAwesomeIcon
        icon={arr.icon}
        className="text-primary hover:text-primary-light"
        onMouseMove={() => handleHover()}
        onMouseLeave={() => handleExit()}
      />
      {skillInteraction && (
        <div className="text-lg lg:text-xl p-2 text-white absolute -bottom-0 lg:-bottom-1 flex justify-center place-items-center">
          <p className="border-2 text-nowrap border-primary py-1 px-6 rounded-full">
            {arr.title}
          </p>
        </div>
      )}
    </div>
  );
}

export default SkillItem;
