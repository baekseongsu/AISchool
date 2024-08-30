import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    doubleincrement: (state, action) => {
      /*
        action : type, payload를 묶은 객체형태
        type : 명령에 대한 구분값
        payload : 명령에 대한 값을 저장하는 속성
        ex) doubleincrement({num:2}) -> {type:'counter/doubleincrement', payload:{num:2}}
      */
      console.log(action.payload.num);
      state.count += action.payload.num;
    },
    tenincrement: (state) => {
      state.count += 10;
    },
    tendecrement: (state, action) => {
      state.count -= action.payload.num;
    },
  },
});

console.log(counterSlice);

// 컴포넌트에서 reducers내 정의된 함수를 접근할 수 있도록 내보내기
export const CounterActions = counterSlice.actions;

// store에서 counterSlice의 reducer(함수)를 접근할 수 있도록 내보내기
export default counterSlice.reducer;
