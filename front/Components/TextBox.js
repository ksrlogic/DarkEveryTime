import React, { useRef, useCallback, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ADD_POST_REQUEST, GET_POSTS_REQUEST } from "../actions";

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  input {
    display: block;
    margin-bottom: 5px;
    padding: 0 10px;
    height: 50px;
    line-height: 46px;
    border: 2px solid #d6d6d6;
    box-sizing: border-box;
    cursor: text;
    color: #a6a6a6;
    font-size: 14px;
    background: #f9f9f9 url("/images/new/container.write.background.png") no-repeat right center;
    background-size: 40px 40px;
  }
  input:focus {
    outline: none !important;
    border: 2px solid #d6d6d6;
    box-sizing: border-box;
  }
  textarea {
    padding: 15px;
    display: block;
    border: 2px solid #d6d6d6;
    box-sizing: border-box;
    cursor: text;
    color: #a6a6a6;
    font-size: 14px;
    resize: none;
  }
  textarea:focus {
    outline: none !important;
    border: 2px solid #d6d6d6;
    box-sizing: border-box;
  }
  ul {
    display: flex;
    height: 40px;
    border: 2px solid #d6d6d6;
    border-top: none;
    margin: 0;
    padding: 0;
    li {
      font-size: 100%;
      font-family: inherit;
      border: 0;
      padding: 0;
      list-style: none;
      margin: 0;
      width: 40px;
      height: 40px;
    }
    li:nth-of-type(1) {
      background-image: url("/images/new/container.articles.write.hashtag.png");
      background-repeat: no-repeat;
      background-size: 40px 40px;
    }
    li:nth-of-type(2) {
      background-image: url("/images/new/container.articles.write.attach.png");
      background-repeat: no-repeat;
      background-size: 40px 40px;
    }
    li:nth-of-type(3) {
      background-image: url("/images/container.articles.write.submit.png");
      background-repeat: no-repeat;
      background-size: 40px 40px;
      background-color: black;
      margin-left: auto;
    }
    li:hover {
      cursor: pointer;
    }
  }
`;

const TextBox = ({ setInputOn }) => {
  const rules = `글 내용을 입력하세요.`;
  const dispatch = useDispatch();
  const fileInput = useRef();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const onContentChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);
  const onFinish = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      content,
      title,
    });
    setTitle("");
    setContent("");
    setInputOn(false);
    dispatch({
      type: GET_POSTS_REQUEST,
    });
  }, [dispatch, content, title, setTitle, setContent, setInputOn]);

  const onHashClicked = useCallback(() => {
    setContent((prev) => (prev ? `${prev}#` : "#"));
  }, []);
  const onFileClicked = useCallback(() => {
    fileInput.current.click();
  }, []);
  const onTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  return (
    <StyledTextBox>
      <input value={title} onChange={onTitleChange} placeholder="글 제목" name="title" />
      <textarea value={content} onChange={onContentChange} name="content" placeholder={rules} rows={7} />
      <ul>
        <li onClick={onHashClicked} title="해시태그"></li>
        <li onClick={onFileClicked} title="첨부파일"></li>
        <li onClick={onFinish} title="제출"></li>
        <input type="file" ref={fileInput} style={{ display: "none" }} name="avatar" accept="image/png, image/jpeg"></input>
      </ul>
    </StyledTextBox>
  );
};

TextBox.propTypes = {
  setInputOn: PropTypes.func.isRequired,
};

export default TextBox;
