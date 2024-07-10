import { useEffect, useState } from "react";
import { devices } from "../styles/settings/Breakpoints";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(devices.sm).matches,
  );

  useEffect(() => {
    window
      .matchMedia(devices.sm)
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);

  return [isMobile];
}
