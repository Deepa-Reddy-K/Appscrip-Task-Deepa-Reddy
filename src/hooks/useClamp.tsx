import { useCallback } from "react";
import useMediaQuery from "./useMediaQuery";

const useClamp = () => {
  const isPhone = useMediaQuery("sm", "down");
  const isDesktop = useMediaQuery("lg", "up");
  const isTablet = !isPhone && !isDesktop;

  const clamp = useCallback(
    (
      smallValue: any,
      mediumValue: any = smallValue,
      largeValue: any = mediumValue
    ): any => {
      if (isPhone) {
        return smallValue;
      }
      if (isTablet) {
        return mediumValue;
      }
      return largeValue;
    },
    [isPhone, isDesktop, isTablet]
  );

  return clamp;
};

export default useClamp;
