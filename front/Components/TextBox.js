import React from "react";
import styled from "@emotion/styled";

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
    li:last-child {
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

const TextBox = () => {
  const rules = `글 내용을 입력하세요.`;

  return (
    <StyledTextBox>
      <input placeholder="글 제목" name="title" />
      <textarea name="content" placeholder={rules} rows={7} />
      <ul>
        <li title="해시태그"></li>
        <li title="첨부파일"></li>
        <li title="제출"></li>
      </ul>
    </StyledTextBox>
  );
};

export default TextBox;
