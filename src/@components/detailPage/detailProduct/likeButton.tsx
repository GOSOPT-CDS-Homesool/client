import React, { useState } from "react";
import axios from "axios";
import { GrayLikeIc, OrangeLikeIc } from "../../../assets";

interface LikeButtonProps {
  postId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ postId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      // 서버에 좋아요 상태값을 변경하는 POST 요청을 보냄
      const response = await axios.post(`https://api.homesool.p-e.kr/alcohol/like?alcoholId=${1}`);
      console.log(response);
      // 성공 시에 아이콘 색깔을 변경
      if (response.status === 200) {
        setIsLiked((prev) => !prev);
      }
    } catch (error) {
      console.log("좋아요 상태 변경에 실패했습니다.", error);
    }
  };

  return <button onClick={handleLike}>{isLiked ? <OrangeLikeIc /> : <GrayLikeIc />}</button>;
};

export default LikeButton;
