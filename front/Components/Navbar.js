import React from "react";
import styled from "@emotion/styled";

const Nav = styled.nav`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d6d6d6;
  background-color: black;
  color: #fff;
  font-family: "맑은 고딕", 돋움, tahoma;
  font-size: 12px;
  letter-spacing: -1px;
  .wrap {
    margin: 0 auto;
    width: 1180px;
    height: 100%;
    #logo {
      float: left;
      margin-left: 25px;
      height: 100%;
      a {
        float: left;
        display: block;
        margin: 20px 15px 20px 0;
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        float: left;
        margin: 0;
        .name {
          display: block;
          color: #c62917;
          font-size: 18px;
          font-weight: bold;
        }
        .multiple {
          margin-top: 20px;
          margin-left: 3px;
          line-height: 15px;
          font-size: 13px;
        }
        .subname {
          display: block;
          line-height: 25px;
          color: #fff;
          font-size: 22px;
        }
      }
    }
    #account {
      padding: 20px 0;
      box-sizing: border-box;
      font-size: 0;
      float: right;
      margin-right: 25px;
      height: 100%;
      a {
        position: relative;
        display: inline-block;
        margin-left: 4px;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        border: 1px solid #d6d6d6;
        border-radius: 12px;
        vertical-align: top;
      }
      .icon {
        width: 40px;
        color: transparent;
        font-size: 0;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .message {
        background-image: url("/images/nav.account.message.png");
        background-size: 16px 11px;
      }
      .my {
        background-image: url("/images/nav.account.my.png");
        background-size: 16px 11px;
      }
    }
  }
  #menu {
    margin: 0 auto;
    width: 600px;
    height: 100%;
    text-align: center;
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
      height: 76px;
      line-height: 80px;
      a {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="wrap">
          <div id="logo">
            <a href="/">
              <img src="/images/new/nav.logo.png" alt="logo" />
            </a>
            <p>
              <span className="name multiple">에브리타임</span>
              <span className="subname">어둠대학교</span>
            </p>
          </div>
          <div id="account">
            <a href="#" className="icon message">
              쪽지함
            </a>
            <a href="#" className="icon my">
              내 정보
            </a>
          </div>
          <ul id="menu">
            <li>
              <a href="#">게시판</a>
            </li>
            <li>
              <a href="#">시간표</a>
            </li>
            <li>
              <a href="#">강의평가</a>
            </li>
            <li>
              <a href="#">학점계산기</a>
            </li>
            <li>
              <a href="#">찬구</a>
            </li>
            <li>
              <a href="#">책방</a>
            </li>
            <li>
              <a href="#">캠퍼스픽</a>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
