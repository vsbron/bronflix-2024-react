import { useMediaQuery } from "react-responsive";

const device = {
  xxl: `(max-width: 1599px)`,
  xl: `(max-width: 1279px)`,
  lg: `(max-width: 1023px)`,
  md: `(max-width: 767px)`,
  sm: `(max-width: 639px)`,
  xs: `(max-width: 449px)`,
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
