import React from "react";
import { LeftArrow, RightArrow } from "./direction";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  console.log("MOSTRANDO ESTA WEA", props);

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <div className="icon">
          <LeftArrow />
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div className="icon">
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
