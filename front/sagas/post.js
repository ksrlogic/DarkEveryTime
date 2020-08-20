import { all, fork, put, takeLatest, delay } from "redux-saga/effects";
import shortid from "shortid";
import faker from "faker";

import {
	ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
	ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
} from "../actions"; // prettier-ignore

// function addPostAPI() {
//   return axios.post("/api/post");
// }

// function removePostAPI() {
//   return axios.post("/api/post");
// }

function* addComment({ data }) {
  try {
    // const result = yield call(addPostAPI);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data, //	result.data 고정
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data, //	err.response.data 고정
    });
  }
}
function* addPost({ content, title }) {
  try {
    // const result = yield call(addPostAPI);
    yield delay(1000);
    const id = shortid.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content,
        title,
        time: faker.date.past(),
        author: "익명",
        vote: faker.random.number(5),
        comment: faker.random.number(10),
      }, //	result.data 고정
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data, //	err.response.data 고정
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchCommentPost() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchCommentPost)]);
}
