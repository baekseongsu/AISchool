import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

/*
  실습1) 화면이 최초에 렌더링이 되었을 때, axios를 활용해서 화장품 정보를 가진 URL로 데이터를 요청하기
  실습2) 받아온 데이터를 콘솔 창에 출력하기
  실습3) state에 저장된 화장품 정보를 map함수를 활용해서 출력하기
        Card컴포넌트 : 상품이미지, 브랜드명, 상품명, 가격, 플래그
  실습4) 화장품 이미지를 클릭했을 때 상품 상세 페이지로 이동하도록 구현하시오
        * 페이지 이동 시, 상품 번호를 전달
        ex)
        /products/1
        /products?id=1
*/

const MainPage = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  // 상품상세페이지로 이동하는 함수
  const goToPrdDetail = (id) => {
    navigate(`/prdDetail/${id}`);
  };

  // await, async를 활용한 방법
  const getProductList = async () => {
    const DATA_URL = "http://localhost:3004/products";
    const response = await axios.get(DATA_URL);
    const data = response.data;

    setProductList(data);

    console.log(data);
  };

  // then을 활용한 방법
  // function getData() {
  //   axios({
  //     url: "http://localhost:3004/products", // 어디랑 통신할건지
  //     // method: "", // 어떤 방식으로 통신할건지(GET, POST)
  //     // data: "", // 요청시 전송할 데이터
  //   })
  //     // 통신 성공시 실행할 로직
  //     .then((res) => {
  //       // res : 통신 성공시 서버에서 응답받은 데이터
  //       console.log(res);
  //       alert("통신성공");
  //     });
  // }

  useEffect(() => {
    getProductList();
    // getData();
  }, []);

  return (
    <Container>
      <Row>
        {productList.map((item) => (
          <Col key={item.id}>
            <Card className="card">
              <Card.Img
                variant="top"
                src={item.prd_img}
                onClick={() => goToPrdDetail(item.id)}
              />
              <Card.Body>
                <Card.Title className="card_title">
                  <p>{item.prd_brand}</p>
                  <p className="card_prd_name">{item.prd_name}</p>
                </Card.Title>
                <Card.Text className="card_text">{item.prd_price}</Card.Text>
                <p>
                  <p>
                    {item.prd_flag.map((flag) => (
                      <span
                        className="prd_flag rounded-pill"
                        style={{
                          backgroundColor:
                            flag === "세일"
                              ? "#f65c60"
                              : flag === "쿠폰"
                              ? "#9bce26"
                              : flag === "증정"
                              ? "#6fcff7"
                              : "#f374b7",
                          width: flag === "오늘드림" ? "60px" : "40px",
                        }}
                      >
                        {flag}
                      </span>
                    ))}
                  </p>
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainPage;
