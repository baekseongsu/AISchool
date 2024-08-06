function App2() {
  let name = prompt("이름이 뭐야");
  let date = new Date();
  let season = "";
  let year = date.getFullYear();
  let mon = date.getMonth() + 1;
  let day = date.getDate();

  if (mon >= 3 && mon <= 5) {
    season = "봄";
  } else if (mon >= 6 && mon <= 8) {
    season = "여름";
  } else if (mon >= 9 && mon <= 11) {
    season = "가을";
  } else {
    season = "겨울";
  }

  let myStyle = {
    color: "red",
  };
  return (
    <div>
      <h1>
        {year}.{mon}.{day}
      </h1>
      <hr></hr>
      <p>
        {name}님 지금은 {season}입니다. 좋은하루 보내세요!
      </p>
      {/* 
      JSX 문법에서 자주 사용되어지는 방법 
      1. style 적용
      inline(태그 안에) 적용시 객체 형식으로 적용 해야한다!

      2. 삼항연산자
      조건을 통해서 다른 내용을 사용자에게 보여줄 때 사용됨!
      */}

      {/* 성수를 제외한 다른 사람은 야근이라고 출력시키기 */}
      {name == "성수" ? (
        <div>
          <h1>칼퇴</h1>
          <h1 style={myStyle}>오늘은 월요일</h1>
        </div>
      ) : (
        <h1>야근</h1>
      )}
    </div>
  );
}

export default App2;
