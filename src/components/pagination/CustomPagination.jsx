import React from "react";

export default function CustomPagination() {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" tabIndex={-1}>
            <svg
              width={11}
              height={14}
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={1}>
                <path d="M-6.52757e-07 8.53333C5.21897 8.96 9.06071 13.6889 10.3292 16C11.4165 9.6 7.06735 8.53333 4.89278 8C13.0474 6.4 10.8728 1.6 10.3292 5.86426e-08C8.15464 5.86667 3.26185 7.46667 -6.52757e-07 8.53333Z" />
              </g>
            </svg>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link active" href="#">
            01
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            02
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            03
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            <svg
              width={11}
              height={14}
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 7.46667C5.78103 7.04 1.93929 2.31111 0.670793 0C-0.416491 6.4 3.93265 7.46667 6.10722 8C-2.04742 9.6 0.127151 14.4 0.670793 16C2.84536 10.1333 7.73815 8.53333 11 7.46667Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
