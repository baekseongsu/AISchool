import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";

/*
  실습1) axios를 활용하여 상품상세정보를 가진 URL로 데이터를 요청하시오.(넘겨받은 상품 id 활용)
  실습2) 받아온 정보를 보관하는 state에 저장하시오.
  실습3) state에 저장된 정보를 화면에 출력하시오. (이미지 경로, 브랜드, 상품명, 가격, 옵션메뉴)
  * 옵션메뉴는 비워져있는 경우 -> 구매수량 UI
    데이터가 있는 경우 -> Bootstrap의 Forms에 있는 Select 컴포넌트로 출력
*/

const ProductDetails = () => {
  // URL 파라미터 방식으로 전달받은 값을 가져올 때 useParams()를 사용해야 한다!
  // 쿼리스트링은 useSearchParams()를 사용한다
  const { id } = useParams();
  const [prdDetail, setprdDetail] = useState();

  console.log("상품번호:", id);

  const getProductDetail = async () => {
    const PRD_URL = `http://localhost:3004/products/${id}`;
    const res = await axios.get(PRD_URL);
    const data = res.data;

    setprdDetail(data);

    console.log(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <img src={prdDetail?.prd_img} alt="" />
        </Col>
        <Col>
          <p>{prdDetail?.prd_brand}</p>
          <p>{prdDetail?.prd_name}</p>
          <p>{prdDetail?.prd_price}원</p>
          {/* <p>{prdDetail?.prd_options}</p> */}
          <p>
            {prdDetail?.prd_options.length !== 0 ? (
              <Form.Select aria-label="Default select example">
                {prdDetail?.prd_options.map((data, index) => (
                  <option key={index}>
                    {data.prd_name} - {data.prd_price}원
                  </option>
                ))}
              </Form.Select>
            ) : (
              <div>구매수량</div>
            )}
          </p>

          <p>
            <Button variant="outline-danger">장바구니</Button>
            {""}
            <Button variant="danger">바로구매</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
