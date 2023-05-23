import { useEffect, useState } from "react";
import { BANNER_DATA } from "../../core/bannerData";
import { styled } from "styled-components";
import { PagenationDotIc, PagenationSelectedDotIc } from "../../assets";

export default function Banner() {
  const [bannerId, setBannerId] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      if (bannerId === 7) {
        setBannerId(1);
      } else {
        setBannerId(bannerId + 1);
      }
    }, 3000);
  }, [bannerId]);

  return (
    <BannerWrapper>
      <BannerImg src={BANNER_DATA.filter((banner) => banner.id === bannerId)[0]?.img} alt="배너 이미지" />
      {[1, 2, 3, 4, 5, 6, 7].map((activateDot) => (
        <>{activateDot === bannerId ? <PagenationSelectedDotIc /> : <PagenationDotIc />}</>
      ))}
    </BannerWrapper>
  );
}

const BannerWrapper = styled.section`
  margin-bottom: 6rem;
`;

const BannerImg = styled.img`
  width: 37.5rem;

  margin-left: -1.65rem;
`;
