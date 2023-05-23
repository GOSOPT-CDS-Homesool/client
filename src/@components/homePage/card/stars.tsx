import React from "react";
import { FiveStarIc, FourStarIc, OneStarIc, ThreeStarIc, TwoStarIc } from "../../../assets";

interface StarsProps {
  value: number;
}

function Stars(props: StarsProps) {
  const { value } = props;
  switch (value) {
    case 1:
      return <OneStarIc />;
      break;
    case 2:
      return <TwoStarIc />;
      break;
    case 3:
      return <ThreeStarIc />;
      break;
    case 4:
      return <FourStarIc />;
      break;
    default:
      return <FiveStarIc />;
      break;
  }
}

export default Stars;
