import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledCommentBox = styled.article`
  display: block;
  padding: 15px;
  margin-bottom: -1px;
  box-sizing: border-box;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  position: relative;
  left: 25px;
  width: 780px;
  ul {
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
  .avatar {
    h1 {
      margin-left: 25px;
    }
    ul {
      float: right;
      li {
        float: right;
        margin-left: 10px;
        cursor: pointer;
        color: #a6a6a6;
      }
    }
    img {
      float: left;
      width: 20px;
      height: 20px;
    }
  }
  .content {
    p {
      margin-top: 5px;
      margin-bottom: 5px;
      line-height: 20px;
      color: #4c4c4c;
      font-size: 14px;
    }
    ul {
      li {
        float: left;
        line-height: 20px;
        font-size: 12px;
        color: #a6a6a6;
        letter-spacing: 0;
      }
      .vote {
        float: left;
        margin-left: 10px;
        padding-left: 15px;
        color: #c62917;
        background-image: url("/images/new/container.articles.vote.png");
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 12px 12px;
      }
    }
  }
`;

const Comment = ({ data, index }) => {
  return (
    <StyledCommentBox>
      <div className="avatar">
        <img src="/images/0.png" alt="avatar" />
        <ul>
          <li>신고</li>
          <li>쪽지</li>
          <li>공감</li>
          <li>대댓글</li>
        </ul>
        <h1>익명{index + 1}</h1>
      </div>
      <div className="content">
        <p>{data}</p>
        <ul>
          <li>
            <time>{0}분 전</time>
          </li>
          <li className="vote">{0}</li>
        </ul>
      </div>
      <div style={{ color: "#fff" }}>`</div>
    </StyledCommentBox>
  );
};

Comment.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    vote: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Comment;
