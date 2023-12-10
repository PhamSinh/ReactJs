import {
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import "./search-modal.scss";
import { useState } from "react";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { MediaItemType } from "../../../services/MediaType.model";
import { useNavigate } from "react-router-dom";

interface SearchModalProps {
  isSearch: boolean;
  setIsSearch: (value: boolean) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isSearch, setIsSearch }) => {
  
  const movieList = useSelector((state: RootState) => state.movies.movieList);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<MediaItemType[]>([]);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsSearch(false);
    setSearchValue("");
    setSearchResult([]);
  }

  const clickItemHandle = (id: string) => {
    navigate("/detail/"+id);
    handleClose();
  }

  function handeSearch(value: string) {
    setSearchValue(value);
    Search(value);
  }

  const Search = debounce((searchValue: string) => {
    const searchResultData = movieList.filter(movie => (
      (searchValue != "") && movie.title.toLowerCase().includes(searchValue.toLowerCase())
      ));
    setSearchResult(searchResultData);
  }, 500);

  return (
    <>
      <Modal
        show={isSearch}
        onHide={handleClose}
        dialogClassName="search-modal"
      >
        <Modal.Header className="border-danger">
          <Modal.Title className="w-100">
            <Form className="d-flex">
              <InputGroup>
                <InputGroup.Text className="bg-dark text-danger border-danger">
                  <i className="bx bx-search" />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  className=" me-2 bg-dark text-light border-danger search-input"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => handeSearch(e.target.value)}
                />
              </InputGroup>
            </Form>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          {!searchValue ? "No Recent Search" :
          <ul className="list-unstyled search-results ">
          {searchResult.length == 0 ? "No results found" : 
            searchResult.map(item => (
              <li key={item.id}>
                <div className="search-result-item" onClick={() => clickItemHandle(item.id)}>
                  <div className="search-result-item-icon">
                    <i className="bx bx-movie-play bx-tada fs-2"></i>
                  </div>
                  <div className="search-result-item-name">
                    <p className="search-result-item-title fs-2"> {item.title}</p>
                  </div>
                  <div className="search-result-item-action">
                    <i className="bx bx-chevrons-right bx-fade-right fs-2"></i>
                  </div>
                </div>
            </li>
            ))}
            
          </ul> 
          }
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchModal;
