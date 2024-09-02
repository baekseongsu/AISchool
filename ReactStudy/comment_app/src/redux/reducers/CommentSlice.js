import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    commentList: [],
    keyword: "",
  },
  reducers: {
    addComment: (state, action) => {
      // React state 값을 직접적으로 수정X
      // -> push, shift, unshift 등과 같은 함수는 state를 새롭게 변경하는 동작X
      // -> 권장하는 방식 : concat, map, filter, slice 등과 같은 함수는 원본을 수정하지 않고 새로운 배열을 반환
      state.commentList = state.commentList.concat(action.payload);
    },
    searchComment: (state, action) => {
      state.keyword = action.payload.keyword;
    },
  },
});

export const { addComment, searchComment } = CommentSlice.actions;

export default CommentSlice.reducer;
