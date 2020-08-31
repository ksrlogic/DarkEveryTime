import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import ta from "time-ago";

const StyledArticle = styled.article`
  margin-bottom: -1px;
  box-sizing: border-box;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  display: block;
  a {
    display: block;
    padding: 15px;
    color: #666;
    text-decoration: none;
    h2 {
      margin: 0;
      margin-bottom: 5px;
      line-height: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      font-weight: normal;
    }
    p {
      margin: 0;
      margin-bottom: 5px;
      max-height: 30px;
      line-height: 15px;
      white-space: normal;
      overflow: hidden;
      color: #a6a6a6;
      font-size: 12px;
    }
    h3 {
      float: left;
      max-width: 90px;
      height: 15px;
      line-height: 15px;
      font-size: 11px;
      font-weight: normal;
      letter-spacing: 0;
      margin: 0;
    }
    time {
      float: left;
      margin-right: 5px;
      height: 15px;
      line-height: 15px;
      font-size: 11px;
    }
    .small {
      float: left;
      max-width: 90px;
      height: 15px;
      line-height: 15px;
      font-size: 11px;
      font-weight: normal;
      letter-spacing: 0;
    }
    ul {
      float: right;
      display: block;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        float: left;
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
`;

const Article = ({ data }) => {
  const { id, title, content, time, author, vote, comment } = data;
  return (
    <StyledArticle>
      <a href={`/post?pid=${id}`} className="article">
        <h2>{title}</h2>
        <p>{content}</p>
        <time className="small">{ta.ago(time)}</time>
        <h3 className="small">{author}</h3>
        <ul>
          <li className="vote">{vote}</li>
          <li className="comment">{comment}</li>
        </ul>
        <div style={{ color: "white" }}>123</div>
      </a>
    </StyledArticle>
  );
};

Article.propTypes = {
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

export default Article;
