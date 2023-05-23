import React from "react";
import { FiveStarIcon, FourStarIcon, OneStarIcon, ThreeStarIcon, TwoStarIcon } from "../../../assets";

interface StarsProps {
  value: number;
}

function Stars(props: StarsProps) {
  const { value } = props;
  switch (value) {
    case 1:
      return <OneStarIcon />;
      break;
    case 2:
      return <TwoStarIcon />;
      break;
    case 3:
      return <ThreeStarIcon />;
      break;
    case 4:
      return <FourStarIcon />;
      break;
    default:
      return <FiveStarIcon />;
      break;
  }
}

export default Stars;
