import React, { useEffect, useState, useCallback } from "react";
import faker from "faker";
import shortid from "shortid";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import RightSide from "../Components/RightSide";
import { Container, DummyData2 } from "./index";
import PostCard from "../Components/PostCard";
import Comment from "../Components/Comment";
import { ADD_COMMENT_REQUEST, GET_COMMENTS_REQUEST } from "../actions";

const CommentDummy = Array(20)
  .fill(0)
  .map(() => ({
    id: shortid.generate(),
    content: faker.lorem.paragraph(),
    time: faker.random.number(59),
    vote: faker.random.number(10),
  }));
const StyledTextBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  left: 25px;
  width: 780px;
  input {
    display: block;
    margin-bottom: 5px;
    padding: 0 10px;
    height: 50px;
    line-height: 46px;
    width: 735px;
    border: 2px solid #d6d6d6;
    box-sizing: border-box;
    cursor: text;
    color: #a6a6a6;
    font-size: 14px;
  }
  input:focus {
    outline: none !important;
    border: 2px solid #d6d6d6;
    box-sizing: border-box;
  }
  button {
    width: 45px;
    height: 50px;
    background-image: url("/images/container.articles.write.submit.png");
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-color: black;
    cursor: pointer;
  }
`;
const asd = {
  data: {
    dataValues: { id: 13, title: "123", content: "asdfxzcv", createdAt: "2020-08-26T06:54:37.000Z", updatedAt: "2020-08-26T06:54:37.000Z" },
    _previousDataValues: { id: 13, title: "123", content: "asdfxzcv", createdAt: "2020-08-26T06:54:37.000Z", updatedAt: "2020-08-26T06:54:37.000Z" },
    _changed: {},
    _options: { isNewRecord: false, _schema: null, _schemaDelimiter: "", raw: true, attributes: ["id", "title", "content", "createdAt", "updatedAt"] },
    isNewRecord: false,
    vote: null,
  },
  status: 200,
  statusText: "OK",
  headers: { "content-length": "471", "content-type": "application/json; charset=utf-8" },
  config: {
    url: "http://localhost:3075/api/get_a_post/13",
    method: "get",
    headers: { Accept: "application/json, text/plain, */*" },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
  },
  request: {},
};
const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [postVote, setPostVote] = useState(0);
  const [comment, setComment] = useState();
  const [gotComments, setGotComments] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPost = async () => {
      const post = await axios.get(`http://localhost:3075/api/get_a_post/${pid}`);
      const comments = await axios.get(`http://localhost:3075/api/get_comments/${pid}`);
      console.log(JSON.stringify(post));
      setTitle(post.data.title);

      setContent(post.data.content);
      setGotComments(comments.data);
      setPostVote(post.data.vote);
      return post;
    };
    getPost();
  }, []);
  const onCommentChange = useCallback((e) => {
    setComment(e.target.value);
  }, []);
  const onSubmitClick = useCallback(() => {
    const getComments = async () => {
      await dispatch({
        type: ADD_COMMENT_REQUEST,
        data: comment,
        postId: pid,
      });
      const comments = await axios.get(`http://localhost:3075/api/get_comments/${pid}`);
      await setTimeout(() => {}, 2000);
      await setGotComments(comments.data);
    };
    getComments();
    setComment("");
  }, [comment, pid, dispatch]);
  return (
    <Container>
      <div className="wrap title">
        <h1>자유 게시판</h1>
      </div>
      <PostCard vote={postVote} title={title} content={content} />
      <StyledTextBox>
        <input value={comment} onChange={onCommentChange} placeholder="댓글을 입력하세요." />
        <button onClick={onSubmitClick} />
      </StyledTextBox>
      {gotComments.map((data, index) => (
        <Comment data={data.content} key={data.id} index={index} />
      ))}
      <RightSide data={DummyData2} />
    </Container>
  );
};

export default Post;
