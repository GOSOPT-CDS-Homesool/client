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
      <DotWrapper>
        {[1, 2, 3, 4, 5, 6, 7].map((activateDot) => (
          <DotBox key={activateDot}>
            {activateDot === bannerId ? <PagenationSelectedDotIc /> : <PagenationDotIc />}
          </DotBox>
        ))}
      </DotWrapper>
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

const DotBox = styled.i`
  margin: 0 0.35rem;
`;

const DotWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-top: -2rem;
`;
