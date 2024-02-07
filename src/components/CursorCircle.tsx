"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const CursorCircle: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [interactingValue, setInteractingValue] = useState(false);
  const [interactableType, setInteractableType] = useState<string | null>(null);
  const [icon, setIcon] = useState(faPlay);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const interactable = (e.target as HTMLElement)?.closest(".interactable");
      const interacting = interactable !== null;
      setInteractingValue(interacting);
      if (interactable instanceof HTMLElement) {
        setInteractableType(interacting ? interactable.dataset.type || null : null);
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    if (interactingValue) {
      switch (interactableType) {
        case "link":
          setIcon(faArrowRight);
          break;
        default:
          setIcon(faPlay);
      }
    } else {
      setIcon({} as IconDefinition);
    }
  }, [interactingValue, interactableType]);

  useEffect(() => {
    const trailer = document.getElementById("trailer");
    gsap.to("#trailer", {
      x: position.x - (trailer?.offsetWidth || 0) / 2,
      y: position.y - (trailer?.offsetHeight || 0) / 2,
      ease: "power2.out",
      duration: 0.8,
      scale: interactingValue ? 4 : 1,
    });
  }, [position, interactingValue]);

  return (
    <div
      id="trailer"
      className="flex justify-center items-center"
    >
      {icon && 
        <FontAwesomeIcon
         id="trailer-icon" 
         icon={icon} 
         color="white"
        //  style={{ fontSize: "30%" }}
        className={`text-cursorIcon ${icon === faArrowRight ? 'rotate-icon': ''}`}
        />
      }
    </div>
  );
};

export default CursorCircle;
