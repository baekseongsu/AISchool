import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { useSelector } from "react-redux";

// 랜덤으로 고유값을 생성해주는 패키지
import { v4 as uuid4 } from "uuid";

const CommentList = () => {
  // [store의 state 접근방법]
  // 1. store내 있는 reducer의 key
  // 2. slice내 정의된 state 접근
  // const comment = useSelector((state) => state.comment.commentList);
  // const keyword = useSelector((state) => state.comment.keyword);

  // 접근해야 하는 state가 많을 경우, 아래와 같이 구조분해 할당 문법으로 저장
  // *주의점 : 객체에 정의된 key이름과 동일한 변수명으로 정의해야함!!
  const { commentList, keyword } = useSelector((state) => state.comment);

  // 검색 결과를 보관하는 state
  const [filter, setFilter] = useState([]);

  useEffect(() => {}, [commentList, keyword]);

  return (
    <div>
      <div>댓글수: {commentList.length}</div>
      <hr />
      {commentList.map((item) => (
        <CommentItem key={item.id} comment={item} />
      ))}
    </div>
  );
};

export default CommentList;
