import React from "react";
import faker from "faker";
import shortid from "shortid";

import RightSide from "../Components/RightSide";
import { Container, DummyData2 } from "./index";
import PostCard from "../Components/PostCard";
import Comment from "../Components/Comment";

const CommentDummy = Array(20)
  .fill(0)
  .map(() => ({
    id: shortid.generate(),
    content: faker.lorem.paragraph(),
    time: faker.random.number(59),
    vote: faker.random.number(10),
  }));

const Post = () => {
  return (
    <Container>
      <div className="wrap title">
        <h1>자유 게시판</h1>
      </div>
      <PostCard />
      {CommentDummy.map((data, index) => (
        <Comment data={data} key={data.id} index={index} />
      ))}
      <RightSide data={DummyData2} />
    </Container>
  );
};

export default Post;
