import React, { useState, useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import faker from "faker";
import shortid from "shortid";

import Article from "../Components/Article";
import RightSide from "../Components/RightSide";
import Navbar from "../Components/Navbar";
import SubMenu from "../Components/SubMenu";
import TextBox from "../Components/TextBox";

const Container = styled.div`
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
const DummyData = Array(20)
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
const DummyData2 = {
  id: shortid.generate(),
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraph(),
  time: faker.date.past(),
  author: "익명",
  vote: faker.random.number(5),
  comment: faker.random.number(10),
};

const Home = () => {
  useEffect(() => {});
  const [inputOn, setInputOn] = useState(false);
  const onClickedA = useCallback(() => {
    setInputOn((prev) => !prev);
  });
  return (
    <>
      <Navbar />
      <SubMenu />
      <Container>
        <div className="wrap title">
          <h1>자유 게시판</h1>
        </div>
        <div className="wrap articles">
          {inputOn ? (
            <TextBox />
          ) : (
            <a onClick={onClickedA} id="writeArticleButton">
              새 글을 작성해주세요!
            </a>
          )}
          {DummyData.map((data) => {
            const key = data.id;
            return <Article key={key} data={data} />;
          })}
        </div>
        <RightSide data={DummyData2} />
      </Container>
    </>
  );
};

export default Home;
