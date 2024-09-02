import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { searchComment } from "../redux/reducers/CommentSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const SearchBox = () => {
  const searchRef = useRef();

  const dispatch = useDispatch();

  const searchBtn = () => {
    dispatch(
      searchComment({
        keyword: searchRef.current.value,
      })
    );
  };

  return (
    <div>
      <Row className="g-2">
        <Col>
          <Form.Control
            type="text"
            placeholder="검색할 키워드를 입력해주세요."
            ref={searchRef}
          ></Form.Control>
        </Col>
        <Col>
          <Button variant="dark" onClick={searchBtn}>
            검색
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
