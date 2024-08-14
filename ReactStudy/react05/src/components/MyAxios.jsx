import React from "react";
import { useState } from "react";
// axios : 비동기 통신 라이브러리
import axios from "axios";

const MyAxios = () => {
  const [movieList, setMovieList] = useState([]);

  function getData() {
    // 비동기 통신으로 데이터 가져오겠습니다
    axios({
      // 통신할 때 필요한 정보
      url: "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101", // 어디랑 통신할건지
      // method: "", // 어떤 방식으로 통신할건지(GET, POST)
      // data: "", // 요청시 전송할 데이터
    })
      // 통신 성공시 실행할 로직
      .then((res) => {
        // res : 통신 성공시 서버에서 응답받은 데이터
        console.log(res);
        // console.log(res.data.boxOfficeResult.boxofficeType);
        // console.log(res.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
        setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);

        alert("통신성공");
      });
  }

  return (
    <div>
      <button onClick={getData}>정보 가져오기</button>
      <table border={1}>
        <tr>
          <td>순위</td>
          <td>영화명</td>
          <td>개봉일</td>
        </tr>
        {movieList.map((data) => (
          <tr>
            <td>{data.rank}</td>
            <td>{data.movieNm}</td>
            <td>{data.openDt}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MyAxios;
