### [솝트 합동세미나 웹 1조 클라이언트] 
# 🥂홈술닷컴🥂
> `Re-design` 프로젝트에 관한 소개입니다!

<div align="center">

<h2> 다양한 술을 안전하고 편하게 받아보실 수 있는 주류 플랫폼입니다! </h2>

<img src=""  alt="서비스대표-이미지" />

</div>

<h2> (서비스)의 핵심 기능 </h2>

<h3> 1️⃣ 캐러셀 </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong>`Drag`를 이용한 캐러셀과 자동 Skip 캐러셀 두 가지 종류가 있어요!</strong> <br/>
    ✨ tag를 조건(품절여부, 좋아요, 추천, 신상품 등)에 따라 다르게 렌더링 했어요!<br/> ✨ 자동 배너는 `3초`에 한 번씩 넘어가도록 했어요! </div>


<h3> 2️⃣ 조건부 렌더링 </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong>모든 페이지 마다 조건에 따라 다르게 렌더링해요!</strong> 
 <br/>✨ [detailPage] 제품 상세페이지에서는 클릭, 품절여부에 따라 다른 구매버튼이 나와요! <br/> ✨ [orderPayment] 주문/결제 페이지에서는 배송 문구를 고를 수 있고 리스트를 클릭에 따라 바뀌도록 했어요! </div>

<h3> 3️⃣ 데이터 연결 </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong>제품, 유저 `{id}` 값에 따라 제품 상세, 마이페이지 , 주문 결제 페이지가 모두 같은 `id`값을 가져야해요!</strong><br/> ✨ {id} 값을 페이지 이동하면서 navigate {state}로 넘기거나, props로 받아서 이동했어요! </div>


<h2> 💛Client💛 </h2>

<table align="center">
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/seojisoosoo">
              <img src="https://avatars.githubusercontent.com/u/76681519?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b> seojisoosoo </b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/eastlaw80">
               <img src="[![image](https://github.com/GOSOPT-CDS-Homesool/client/assets/108226647/f83cd3f9-0104-4d47-ade9-8ac3cfe0a9bf)](https://avatars.githubusercontent.com/u/98143826?v=4)
" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>  </b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/Dangpy">
              <img src="https://avatars.githubusercontent.com/u/108226647?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>Dangpy</b>
            </a>
        </td>
    </tr>
    <tr align="center">
        <td>
            😊서지수😊 <br/>
      </td>
       <td>
            😎이동헌😎 <br/>
      </td>
       <td>
            🤩장명지🤩 <br/>
      </td>
    </tr>
  	<tr align="center">
        <td>
            초기세팅, 마이페이지, 상품문의, 공통Header, 공통Footer, 서버연결 <br/>
      </td>
       <td>
            메인페이지, 상세페이지(리뷰, 좋아요 기능), 서버연결 <br/>
      </td>
       <td>
            주문결제페이지, 상세페이지(바로구매, 상품상세, 제품상세정보, 기본정보), 서버연결 <br/>
      </td>
    </tr>
</table>

<h2> 🛠 기술스택 </h2>

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white">



<h2> 💡 주요 라이브러리 </h2>
- React-Slick

<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
[컨벤션 바로보기](https://www.notion.so/seojisoosoo/16622eb8ff794922a349db1ce2509801)


<br/>

<h2> 📁 폴더 구조 </h2>

```
📦src
 ┣ 📂@components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜GrayGap.tsx
 ┃ ┃ ┣ 📜arrowFooter.tsx
 ┃ ┃ ┣ 📜commonFooter.tsx
 ┃ ┃ ┣ 📜header.tsx
 ┃ ┃ ┣ 📜listBox.tsx
 ┃ ┃ ┣ 📜pageFooter.tsx
 ┃ ┃ ┣ 📜title.tsx
 ┃ ┃ ┗ 📜top.tsx
 ┃ ┣ 📂detailPage
 ┃ ┃ ┣ 📂basicInfo
 ┃ ┃ ┃ ┗ 📜productBasicInfo.tsx
 ┃ ┃ ┣ 📂detailProduct
 ┃ ┃ ┃ ┣ 📜choiceDelivery.tsx
 ┃ ┃ ┃ ┣ 📜detailOrderInfo.tsx
 ┃ ┃ ┃ ┣ 📜failBuyButton.tsx
 ┃ ┃ ┃ ┣ 📜likeButton.tsx
 ┃ ┃ ┃ ┣ 📜orderChoice.tsx
 ┃ ┃ ┃ ┣ 📜orderContents.tsx
 ┃ ┃ ┃ ┗ 📜successBuyButton.tsx
 ┃ ┃ ┣ 📂productDetailInfo
 ┃ ┃ ┃ ┗ 📜productInfo.tsx
 ┃ ┃ ┣ 📂productReview
 ┃ ┃ ┃ ┣ 📜productReiviewList.tsx
 ┃ ┃ ┃ ┗ 📜productReview.tsx
 ┃ ┃ ┣ 📜detailAsk.tsx
 ┃ ┃ ┗ 📜detailAskBox.tsx
 ┃ ┣ 📂homePage
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┣ 📜like.tsx
 ┃ ┃ ┃ ┣ 📜price.tsx
 ┃ ┃ ┃ ┣ 📜soldOut.tsx
 ┃ ┃ ┃ ┣ 📜stars.tsx
 ┃ ┃ ┃ ┣ 📜stock.tsx
 ┃ ┃ ┃ ┗ 📜tags.tsx
 ┃ ┃ ┣ 📂carousel
 ┃ ┃ ┃ ┣ 📜brandNewCard.tsx
 ┃ ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┃ ┣ 📜cardList.tsx
 ┃ ┃ ┃ ┣ 📜cardListHeader.tsx
 ┃ ┃ ┃ ┣ 📜reviewCard.tsx
 ┃ ┃ ┃ ┗ 📜reviewCardList.tsx
 ┃ ┃ ┣ 📜Twinkle.tsx
 ┃ ┃ ┣ 📜banner.tsx
 ┃ ┃ ┣ 📜brandNew.tsx
 ┃ ┃ ┣ 📜review.tsx
 ┃ ┃ ┣ 📜subscribe.tsx
 ┃ ┃ ┣ 📜thisMonth.tsx
 ┃ ┃ ┗ 📜topButton.tsx
 ┃ ┣ 📂myPage
 ┃ ┃ ┣ 📜couponInfo.tsx
 ┃ ┃ ┣ 📜couponInfoBox.tsx
 ┃ ┃ ┣ 📜customerCenter.tsx
 ┃ ┃ ┣ 📜myShopping.tsx
 ┃ ┃ ┣ 📜totalOrder.tsx
 ┃ ┃ ┣ 📜totalOrderList.tsx
 ┃ ┃ ┗ 📜userProfile.tsx
 ┃ ┗ 📂orderPaymentPage
 ┃ ┃ ┣ 📂orderConfirmation
 ┃ ┃ ┃ ┣ 📜orderProductInfo.tsx
 ┃ ┃ ┃ ┣ 📜ordererInfo.tsx
 ┃ ┃ ┃ ┣ 📜requestForDelivery.tsx
 ┃ ┃ ┃ ┗ 📜shippingAddress.tsx
 ┃ ┃ ┣ 📂paymentConfirmation
 ┃ ┃ ┃ ┣ 📜 amountOfPayment.tsx
 ┃ ┃ ┃ ┣ 📜 discountCalculation.tsx
 ┃ ┃ ┃ ┗ 📜paymentMethod.tsx
 ┃ ┃ ┣ 📜orderConfirmation.tsx
 ┃ ┃ ┗ 📜successModal.tsx
 ┣ 📂@pages
 ┃ ┣ 📜detail.tsx
 ┃ ┣ 📜home.tsx
 ┃ ┣ 📜myPage.tsx
 ┃ ┗ 📜orderPayment.tsx
 ┣ 📂api
 ┃ ┣ 📜.keep
 ┃ ┣ 📜alcoholData.tsx
 ┃ ┣ 📜allAlcohol.tsx
 ┃ ┣ 📜allReview.tsx
 ┃ ┣ 📜detailAsk.tsx
 ┃ ┣ 📜detailReview.tsx
 ┃ ┣ 📜likePost.tsx
 ┃ ┣ 📜postPurchaseData.tsx
 ┃ ┗ 📜userData.tsx
 ┣ 📂assets
 ┃ ┣ 📂icon
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜Frame 256.svg
 ┃ ┃ ┣ 📜Frame 257.svg
 ┃ ┃ ┣ 📜Frame 258.svg
 ┃ ┃ ┣ 📜Frame 259.svg
 ┃ ┃ ┣ 📜LikeGray.svg
 ┃ ┃ ┣ 📜LikeOrange.svg
 ┃ ┃ ┣ 📜alertCircleIc.svg
 ┃ ┃ ┣ 📜backButtonIc.svg
 ┃ ┃ ┣ 📜checkIc.svg
 ┃ ┃ ┣ 📜checkRadioIc.svg
 ┃ ┃ ┣ 📜closeIcon.svg
 ┃ ┃ ┣ 📜commonFooterIc.svg
 ┃ ┃ ┣ 📜detailAskRectangleIc.svg
 ┃ ┃ ┣ 📜detailEllipseIc.svg
 ┃ ┃ ┣ 📜detailFoldIc.svg
 ┃ ┃ ┣ 📜detailNoReviewIc.svg
 ┃ ┃ ┣ 📜detailSeeAllIc.svg
 ┃ ┃ ┣ 📜detailUnfoldIc.svg
 ┃ ┃ ┣ 📜footerHomeActiveIc.svg
 ┃ ┃ ┣ 📜footerHomeIc.svg
 ┃ ┃ ┣ 📜footerIc.svg
 ┃ ┃ ┣ 📜footerMyActiveIc.svg
 ┃ ┃ ┣ 📜footerMyIc.svg
 ┃ ┃ ┣ 📜homeHeaderIc.svg
 ┃ ┃ ┣ 📜homeIndicatorChromeIc.svg
 ┃ ┃ ┣ 📜homesool.svg
 ┃ ┃ ┣ 📜likeIc.svg
 ┃ ┃ ┣ 📜minusIconIc.svg
 ┃ ┃ ┣ 📜moveToSilverBannerIc.svg
 ┃ ┃ ┣ 📜myPageUpdateProfileIc.svg
 ┃ ┃ ┣ 📜myPageUserProfileImgIc.svg
 ┃ ┃ ┣ 📜nonCheckRadioIc.svg
 ┃ ┃ ┣ 📜noneCheckIc.svg
 ┃ ┃ ┣ 📜openIcon.svg
 ┃ ┃ ┣ 📜originalHomeSoolIc.svg
 ┃ ┃ ┣ 📜pagenationDotIc.svg
 ┃ ┃ ┣ 📜pagenationSelectedDotIc.svg
 ┃ ┃ ┣ 📜plusIconIc.svg
 ┃ ┃ ┣ 📜right.svg
 ┃ ┃ ┣ 📜shareIc.svg
 ┃ ┃ ┣ 📜sideOpenIcon.svg
 ┃ ┃ ┣ 📜sold_out.svg
 ┃ ┃ ┣ 📜star1.svg
 ┃ ┃ ┣ 📜star2.svg
 ┃ ┃ ┣ 📜star3.svg
 ┃ ┃ ┣ 📜star4.svg
 ┃ ┃ ┣ 📜star5.svg
 ┃ ┃ ┣ 📜tag_best.svg
 ┃ ┃ ┣ 📜tag_new.svg
 ┃ ┃ ┣ 📜tag_recommend.svg
 ┃ ┃ ┣ 📜tag_soldout.svg
 ┃ ┃ ┣ 📜timesale.svg
 ┃ ┃ ┣ 📜topButtonIc.svg
 ┃ ┃ ┗ 📜triangleOpenIc.svg
 ┃ ┣ 📂image
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜.keep
 ┃ ┃ ┣ 📜closeBasicInfoImg.png
 ┃ ┃ ┣ 📜homeAdsImage.png
 ┃ ┃ ┣ 📜myPageAdsImage.png
 ┃ ┃ ┣ 📜openBasicInfoImg.png
 ┃ ┃ ┗ 📜top.png
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜assets.d.ts
 ┃ ┗ 📜index.ts
 ┣ 📂core
 ┃ ┣ 📜allReviewData.ts
 ┃ ┣ 📜bannerData.ts
 ┃ ┣ 📜myPage.ts
 ┃ ┣ 📜productData.ts
 ┃ ┣ 📜productDataDH.ts
 ┃ ┣ 📜reviewData.ts
 ┃ ┣ 📜shippingMessageData.ts
 ┃ ┗ 📜userData.ts
 ┣ 📂hooks
 ┃ ┗ 📜.keep
 ┣ 📂recoil
 ┃ ┣ 📜.keep
 ┃ ┗ 📜page.ts
 ┣ 📂style
 ┃ ┣ 📜globalStyle.ts
 ┃ ┣ 📜style.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂type
 ┃ ┣ 📜allReviewDataType.ts
 ┃ ┣ 📜detailAsk.ts
 ┃ ┣ 📜detailIdProps.ts
 ┃ ┣ 📜mypage.ts
 ┃ ┣ 📜productDataType.ts
 ┃ ┣ 📜productDataTypeDH.ts
 ┃ ┣ 📜reviewDataType.ts
 ┃ ┣ 📜shippingMessageType.ts
 ┃ ┣ 📜tagsDataType.ts
 ┃ ┗ 📜userDataType.ts
 ┣ 📂utils
 ┃ ┣ 📜.keep
 ┃ ┗ 📜calculateDiscount.tsx
 ┣ 📜.DS_Store
 ┣ 📜App.tsx
 ┣ 📜Router.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```


<br/>
