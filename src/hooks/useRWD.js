import { useEffect, useState } from "react";

const useRWD = () => {
  const [device, setDevice] = useState("mobile");

  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    handleRWD();
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  const handleRWD = () => {
    if (window.innerWidth > 720) {
      setDevice("tablet");
      return;
    }
    if (window.innerWidth > 1024) {
      setDevice("desktop");
      return;
    }
    setDevice("mobile");
    return;
  };

  return device;
};
export default useRWD;
