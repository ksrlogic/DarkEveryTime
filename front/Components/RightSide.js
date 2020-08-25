import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledRightSide = styled.div`
  position: absolute;
  right: 25px;
  top: 0;
  width: 325px;
  height: 400px;
  .card {
    margin-bottom: 5px;
    border: 1px solid #d6d6d6;
    background-color: #f9f9f9;
  }
  .board {
    h3 {
      margin: 0;
      padding: 10px;
      a {
        color: #3744a5;
        line-height: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
    .article {
      display: block;
      padding: 10px;
      border-top: 1px solid #e3e3e3;
      .title {
        margin: 0;
        margin-bottom: 5px;
        line-height: 18px;
        overflow: hidden;
        color: #4c4c4c;
        font-size: 13px;
        height: 18px;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0;
        border: 0;
      }
      .small {
        margin: 0;
        overflow: hidden;
        height: 32px;
        line-height: 16px;
        color: #737373;
        font-size: 12px;
        margin-bottom: 5px;
      }
      h4 {
        margin: 0;
        margin-right: 10px;
        height: 14px;
        line-height: 14px;
        color: #a6a6a6;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 0;
      }
      ul {
        list-style: none;
        color: #666;
        margin: 0;
        padding: 0;
        display: flex;
        li {
          list-style: none;
          margin-left: 8px;
          padding: 0 2px;
          height: 20px;
          line-height: 20px;
          color: #a6a6a6;
          font-size: 12px;
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 12px 12px;
          cursor: pointer;
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
    }
  }
`;
const RightSide = ({ data }) => {
  const { title, content, vote, comment } = data;
  return (
    <StyledRightSide>
      <div className="card">
        <div className="board">
          <h3>
            <a>실시간 인기 글</a>
          </h3>
          <a className="article">
            <p className="title">{title}</p>
            <p className="small">{content}</p>
            <div style={{ display: " flex" }}>
              <h4>자유 게시판</h4>
              <ul>
                <li className="vote">{vote}</li>
                <li className="comment">{comment}</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </StyledRightSide>
  );
};
RightSide.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
    comment: PropTypes.number.isRequired,
  }).isRequired,
};

export default RightSide;
