import React from "react";

const SchoolSearchResult = function ({ datas, handleSearchClick }) {
  return (
    <ul>
      {datas.map((data, index) => {
        return (
          <li onClick={handleSearchClick} key={index}>
            {data}
          </li>
        );
      })}
    </ul>
  );
};

export default SchoolSearchResult;
