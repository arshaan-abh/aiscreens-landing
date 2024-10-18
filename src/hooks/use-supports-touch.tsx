import { useState, useEffect } from "react";

declare global {
  interface Navigator {
    msMaxTouchPoints?: number;
  }
}

const useSupportsTouch = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchCapability = () => {
      return !!(
        "ontouchstart" in window ||
        navigator.maxTouchPoints ||
        navigator.msMaxTouchPoints
      );
    };
    setIsTouchDevice(checkTouchCapability());
  }, []);

  return isTouchDevice;
};

export default useSupportsTouch;
