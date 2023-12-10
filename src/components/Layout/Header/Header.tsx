import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { Button } from "react-bootstrap";
import SearchModal from "../Search-modal/search-modal";

function Header() {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <>
      <div className="nav-wrapper">
        <div className="container">
          <div className="nav">
            <Link to="/" className="logo">
              <i className="bx bxl-github bx-tada main-color"></i>M
              <span className="main-color">e</span>o
            </Link>
            <div className="nav-menu" id="nav-menu">
            <Button variant="outline-danger mt-2 mb-2 fs-6 rounded-pill text-light-emphasis" onClick={() => setIsSearch(true)}>
              <i className="bx bx-search text-light"></i> Search Movie
            </Button>
            </div>

            <SearchModal isSearch={isSearch} setIsSearch={setIsSearch} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
