import { useRef, useState } from "react";
import React from "react";

const MyToDo = () => {
  const [list, setlist] = useState([]);
  const inputRef = useRef();

  function click() {
    // 기존에 있던 배열에 input태그에서 입력한 내용을 추가
    // push 사용해서 state 배열 변환 x
    // --> push 자체가 기존 state 배열을 바꾸는 기능이기 때문에
    // state값을 바꿀 수 있는 것은 setState만 가능하기 때문!!)

    // concat : 기존 배열에 데이터를 추가한 모습으로 새로운 배열을 생성하는 기능
    setlist(list.concat(inputRef.current.value));
    console.log(list);
  }

  function delList(delindex) {
    // 배열에 있는 요소 중 사용자가 선택한 요소를 삭제하겠습니다
    // 1. 어떻게 삭제할 수 있을까
    // 2. 사용자가 어떤 요소를 선택했는지 알 수 있을까
    console.log(delindex);

    // 넘겨받은 인덱스 값을 제외한 다른 요소 만으로 배열을 바꾸고 싶어요
    setlist(list.filter((data, index) => index != delindex));
  }

  return (
    <div>
      <h1>2024 올해는 꼭 해봅시다!!</h1>
      <input ref={inputRef}></input>
      <button onClick={click}>계획추가</button>

      <hr></hr>
      <h1>TodoList</h1>
      <ul>
        {/* 목록 출력 */}
        {/* <li>{list}</li> */}
        {list.map((data, index) => (
          <li key={index}>
            {data}
            <button onClick={() => delList(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyToDo;
