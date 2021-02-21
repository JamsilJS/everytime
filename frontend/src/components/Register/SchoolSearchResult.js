import React from "react";
import styled from "styled-components";

const STYLEDUL = styled.ul`
  padding: 5px;
`;
const STYLEDLI = styled.li`
  font-size: 14px;
`;

const SchoolSearchResult = function ({ datas, handleSearchClick }) {
  return (
    <STYLEDUL>
      {datas.map((data, index) => {
        return (
          <STYLEDLI onClick={handleSearchClick} key={index}>
            {data}
          </STYLEDLI>
        );
      })}
    </STYLEDUL>
  );
};

export default SchoolSearchResult;
