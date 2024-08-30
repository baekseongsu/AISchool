import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const GoodsDetail = () => {
  const { id } = useParams();
  const [goodsDetail, setGoodsDetail] = useState({});
  const getGoodsDetail = async () => {
    const DATA_URL = `http://localhost:3004/goods_list/${id}`;
    const res = await axios.get(DATA_URL);
    const data = res.data;
    setGoodsDetail(data);

    console.log(data);
  };

  useEffect(() => {
    getGoodsDetail();
  }, []);

  return (
    <div className="goods-detail-box">
      <div className="goods-detail-box-thumb">
        <img src={goodsDetail?.main_thumb} alt="도시락썸네일" />
      </div>
      <div className="goods-detail-box-info">
        <div className="goods-detail-title">
          <div className="goods-icon">
            {goodsDetail?.new ? (
              <em className="goods-new">new</em>
            ) : goodsDetail?.best ? (
              <em className="goods-best">best</em>
            ) : (
              ""
            )}
          </div>
          <div className="goods-detail-name">{goodsDetail?.name}</div>
          <div className="goods-detail-txt">{goodsDetail?.detail?.txt}</div>
          <div className="goods-detail-price-box">
            <strong>{goodsDetail?.price}</strong>원
          </div>
        </div>
        <div className="goods-detail-summary">
          {goodsDetail?.detail?.summary}
        </div>
      </div>
    </div>
  );
};

export default GoodsDetail;
