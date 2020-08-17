import React, { useCallback } from "react";
import styled from "@emotion/styled";

const StyledMain = styled.article`
  .postcard {
    display: block;
    padding: 15px;
    margin-bottom: -1px;
    box-sizing: border-box;
    border: 1px solid #e3e3e3;
    background-color: #fff;
    position: relative;
    left: 25px;
    margin-top: 25px;
    width: 780px;
    h1 {
      margin-bottom: 15px;
      font-size: 22px;
      font-weight: bold;
      color: #292929;
    }
    h2 {
      margin: 0;
      font-size: 14px;
      margin-left: 50px;
      font-weight: bolder;
    }
    h3 {
      margin: 0;
      color: #a6a6a6;
      letter-spacing: 0;
      margin-left: 51px;
      font-weight: 500;
    }
    p {
      margin-top: 0;
      color: #4c4c4c;
      line-height: 20px;
      font-size: 14px;
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        margin: 0;
        padding: 0;
        cursor: pointer;
        float: right;
        list-style: none;
        margin-left: 10px;
        color: #a6a6a6;
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 12px 12px;
      }
    }
    img {
      width: 40px;
      height: 40px;
      float: left;
    }
    .vote {
      padding-left: 15px;
      color: #c62917;
      background-image: url("/images/new/container.articles.vote.png");
    }
    .comment {
      padding-left: 15px;
      color: #0ca5af;
      background-image: url("/images/new/container.articles.comment.png");
    }
  }
`;

const PostCard = () => {
  const onMessageClicked = useCallback(() => {
    alert("아하 ㅋㅋ 쪽지할래?");
  }, []);
  const onAlertClicked = useCallback(() => {
    alert("아하 ㅋㅋ 신고할래?");
  }, []);
  return (
    <StyledMain>
      <div className="postcard">
        <img src="./images/0.png" alt="avatar" />
        <ul>
          <li onClick={onAlertClicked} title="신고">
            신고
          </li>
          <li onClick={onMessageClicked} title="쪽지">
            쪽지
          </li>
        </ul>
        <h2>익명</h2>
        <h3> 8/17 17:01</h3>
        <h1>제목</h1>
        <p>
          Cupidatat dolore voluptate magna do voluptate dolore sit. Reprehenderit in eu non tempor proident in voluptate adipisicing. Incididunt magna esse esse do veniam in pariatur duis dolore ex
          ullamco esse ex. Nulla sint ex enim excepteur do consequat culpa occaecat sit eiusmod voluptate aliquip.
        </p>
        <ul>
          <li className="vote">0</li>
          <li className="comment">0</li>
        </ul>
        <div style={{ color: "#fff" }}>`</div>
      </div>
    </StyledMain>
  );
};

export default PostCard;