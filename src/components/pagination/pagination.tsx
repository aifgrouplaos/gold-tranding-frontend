import React from "react";

type Props = {
  total: any[];
  limit: number;
  currectpage: number;
  onChangepage: (page: number) => void;
  setLimit: (limit: number) => void;
};

export default function Pagination({
  total,
  limit,
  currectpage,
  onChangepage,
  setLimit,
}: Props) {
  const page = Math.ceil(Number(total.length) / limit);
  const arr = Array.from(Array(page).keys());
  const menuleft = (
    <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 320 512">
      <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
    </svg>
  );
  const menuleright = (
    <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 320 512">
      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
    </svg>
  );

  return (
    <div className="pagination">
      <div className="group-show-page-limit">
        <select
          className="page-limit"
          value={limit}
          onChange={(e: any) => {
            setLimit(Number(e.target.value));
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
        <span className="pagination-text">Show</span>
        <span className="pagination-text">
          {" "}
          {currectpage} of {page}
        </span>
      </div>
      <ul className="pagination-link">
        <li className="page-link" onClick={() => onChangepage(1)}>
          First
        </li>
        <li
          className="page-link"
          onClick={() => {
            currectpage > 1 ? onChangepage(currectpage - 1) : "";
          }}
        >
          {menuleft}
        </li>

        {arr.map((item, index) => {
          if (page < 10) {
            return (
              <li
                className={`page-link ${
                  currectpage === index + 1 ? "active" : ""
                }`}
                key={index}
                onClick={() => onChangepage(index + 1)}
              >
                {index + 1}
              </li>
            );
          } else {
            if (index < 3) {
              return (
                <li
                  className={`page-link ${
                    currectpage === index + 1 ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => onChangepage(index + 1)}
                >
                  {index + 1}
                </li>
              );
            } else if (index === 3) {
              if (index + 1 === currectpage) {
                return (
                  <li
                    className={`page-link ${
                      currectpage === index + 1 ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => onChangepage(index + 1)}
                  >
                    {index + 1}
                  </li>
                );
              } else {
                return (
                  <li
                    className={`page-link ${
                      currectpage === index + 1 ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => onChangepage(index + 1)}
                  >
                    ...
                  </li>
                );
              }
            } else if (index > page - 4) {
              return (
                <li
                  className={`page-link ${
                    currectpage === index + 1 ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => onChangepage(index + 1)}
                >
                  {index + 1}
                </li>
              );
            } else if (index === page - 4) {
              if (index + 1 === currectpage) {
                return (
                  <li
                    className={`page-link ${
                      currectpage === index + 1 ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => onChangepage(index + 1)}
                  >
                    {index + 1}
                  </li>
                );
              } else {
                return (
                  <li
                    className={`page-link ${
                      currectpage === index + 1 ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => onChangepage(index + 1)}
                  >
                    ...
                  </li>
                );
              }
            } else {
              if (currectpage > 3 && currectpage < page - 3) {
                if (index + 1 === currectpage) {
                  return (
                    <li
                      className={`page-link ${
                        currectpage === index + 1 ? "active" : ""
                      }`}
                      key={index}
                      onClick={() => onChangepage(index + 1)}
                    >
                      {index + 1}
                    </li>
                  );
                } else if (index + 1 === currectpage + 1) {
                  return (
                    <li
                      className={`page-link ${
                        currectpage === index + 1 ? "active" : ""
                      }`}
                      key={index}
                      onClick={() => onChangepage(index + 1)}
                    >
                      {index + 1}
                    </li>
                  );
                }
              }
            }
          }
        })}
        <li
          className="page-link"
          onClick={() => {
            currectpage < page ? onChangepage(currectpage + 1) : "";
          }}
        >
          {menuleright}
        </li>
        <li className="page-link" onClick={() => onChangepage(page)}>
          Last
        </li>
      </ul>
    </div>
  );
}
