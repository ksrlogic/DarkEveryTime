import React, { useState, useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import faker from "faker";
import shortid from "shortid";
import { useSelector, useDispatch } from "react-redux";
import { css } from "@emotion/core";
import { DotLoader } from "react-spinners";

import Article from "../Components/Article";
import RightSide from "../Components/RightSide";
import TextBox from "../Components/TextBox";
import { GET_POSTS_REQUEST } from "../actions";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Container = styled.div`
  width: 1180px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto 25px auto;
  .wrap {
    float: none;
    position: relative;
    left: 25px;
    margin-top: 25px;
    width: 780px;
  }
  .title {
    margin-bottom: -20px;
    padding: 15px;
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    h1 {
      color: #292929;
      font-size: 22px;
      font-weight: bold;
      margin: 0;
    }
  }
  .articles {
    > a {
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
  }
`;
export const DummyData = Array(20)
  .fill()
  .map(() => ({
    id: shortid.generate(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    time: faker.date.past(),
    author: "익명",
    vote: faker.random.number(5),
    comment: faker.random.number(10),
  }));
export const DummyData2 = {
  id: shortid.generate(),
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraph(),
  time: faker.date.past(),
  author: "익명",
  vote: faker.random.number(5),
  comment: faker.random.number(10),
};

const Home = () => {
  const [inputOn, setInputOn] = useState(false);
  const { mainPosts, getPostsLoading } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_POSTS_REQUEST,
    });
  }, [dispatch]);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
        dispatch({
          type: GET_POSTS_REQUEST,
        });
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [dispatch, getPostsLoading]);

  const onClickedA = useCallback(() => {
    setInputOn((prev) => !prev);
  }, []);
  return (
    <>
      <Container>
        <div className="wrap title">
          <h1>자유 게시판</h1>
        </div>
        <div className="wrap articles">
          {inputOn ? (
            <TextBox setInputOn={setInputOn} />
          ) : (
            <a onClick={onClickedA} id="writeArticleButton">
              새 글을 작성해주세요!
            </a>
          )}

          {mainPosts.map((data) => {
            const key = data.id;
            return <Article key={key} data={data} />;
          })}
          {getPostsLoading && <DotLoader css={override} size={50} color="red" loading={getPostsLoading} />}
        </div>
        <RightSide data={DummyData2} />
      </Container>
    </>
  );
};

export default Home;
