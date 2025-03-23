import { useMediaQuery } from "react-responsive";

const device = {
  xxl: `(min-width: 1536px)`,
  xl: `(min-width: 1280px)`,
  lg: `(min-width: 1024px)`,
  md: `(min-width: 768px)`,
  sm: `(min-width: 640px)`,
  xs: `(min-width: 450px)`,
};

export function useResponsive() {
  // Setting all available resolutions for the custom hook
  const isXS = useMediaQuery({ query: device.xs });
  const isSM = useMediaQuery({ query: device.sm });
  const isMD = useMediaQuery({ query: device.md });
  const isLG = useMediaQuery({ query: device.lg });
  const isXL = useMediaQuery({ query: device.xl });
  const isXXL = useMediaQuery({ query: device.xxl });

  // Return all constants
  return {
    isXS,
    isSM,
    isMD,
    isLG,
    isXL,
    isXXL,
  };
}
