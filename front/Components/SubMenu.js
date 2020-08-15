import React from "react";
import styled from "@emotion/styled";

const StyledSubmenu = styled.div`
  margin-top: 80px;
  #submenu {
    height: 200px;
    border-bottom: 1px solid #d6d6d6;
    background-color: #e6e6e6;
    .wrap {
      padding: 15px;
      text-align: center;

      font-size: 2rem;
    }
  }
`;

const SubMenu = () => {
  return (
    <StyledSubmenu>
      <div id="submenu">
        <div className="wrap">게시판 같은거 없다</div>
      </div>
    </StyledSubmenu>
  );
};

export default SubMenu;
