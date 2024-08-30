import React, { useEffect, useState } from "react";
import axios from "axios";
import GoodItem from "../components/GoodItem";

/*
  실습1) axios를 활용해서 도시락 정보를 가진 URL로 데이터를 호출하시오
  실습2) 받아온 데이터를 보관할 state를 생성하시오(콘솔창으로 데이터 출력해보기)
  실습3) state에 저장된 도시락정보를 출력하시오
  - 도시락 정보는 GoodItem 컴포넌트에 props로 전달하기
  - map() 활용
*/

const GoodsList = () => {
  const [goodList, setgoodList] = useState([]);

  const getGoodList = async () => {
    const DATA_URL = "http://localhost:3004/goods_list";
    const res = await axios.get(DATA_URL);
    const data = res.data;
    setgoodList(data);

    console.log("데이터", data);
  };

  useEffect(() => {
    getGoodList();
  }, []);

  return (
    <div className="goods-list">
      {goodList?.map((data) => (
        // JSX 요소를 반환해야 함
        <GoodItem key={data.id} data={data} /> // key prop 추가
      ))}
    </div>
  );
};

export default GoodsList;
