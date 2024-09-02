import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useRef } from "react";

import { addComment } from "../redux/reducers/CommentSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const CommentForm = () => {
  const comment = useSelector((state) => state.comment.commentList);

  const dispatch = useDispatch();

  const writerRef = useRef(); // 작성자
  const commentRef = useRef(); // 댓글 내용

  const writeBtn = () => {
    dispatch(
      addComment({
        id: uuidv4(),
        writer: writerRef.current.value,
        content: commentRef.current.value,
      })
    );
    // console.log(comment);
  };

  return (
    <Form>
      <Row className="g-2">
        <Col lg="8">
          <Form.Control
            type="text"
            placeholder="댓글 내용 작성"
            ref={commentRef}
          ></Form.Control>
        </Col>
        <Col lg="4">
          <Form.Control
            type="text"
            placeholder="작성자 이름"
            ref={writerRef}
          ></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          {/* w-숫자: 너비값을 %로 지정 ( 0, 25, 50, 75, 100 ) */}
          <Button className="w-100" variant="dark" onClick={writeBtn}>
            등록
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CommentForm;
