import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import shortid from "shortid";
import faker from "faker";
import axios from "axios";

import {
	ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
	ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE
} from "../actions"; // prettier-ignore

function addPostAPI(data) {
  console.log(`data: ${data.content}`);
  return axios.post("http://localhost:3075/api/post", data);
}

function addCommentAPI(data) {
  console.log(data);
  return axios.post(`http://localhost:3075/api/post_comment`, data);
}
function getPostsAPI(data) {
  return axios.get(`http://localhost:3075/api/getpost/${data}`);
}
function* addComment({ data, postId }) {
  try {
    yield call(addCommentAPI, { data, postId });
    yield put({
      type: ADD_COMMENT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data, //	err.response.data 고정
    });
  }
}
function* addPost({ content, title }) {
  try {
    const result = yield call(addPostAPI, { content, title });
    if (result.status !== 200) {
      throw new Error("cannot get data");
    }
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

function* getPosts({ where }) {
  try {
    const result = yield call(getPostsAPI, where);
    const RealData = result.data.map((data) => ({
      id: data.id,
      title: data.title,
      content: data.content,
      time: data.createdAt,
      author: "익명",
      vote: faker.random.number(5),
      comment: faker.random.number(10),
    }));
    yield put({
      type: GET_POSTS_SUCCESS,
      data: RealData, //	result.data 고정
    });
  } catch (err) {
    yield put({
      type: GET_POSTS_FAILURE,
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

function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchGetPosts), fork(watchCommentPost)]);
}
