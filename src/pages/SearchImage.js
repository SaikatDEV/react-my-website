import React, { useState, useEffect, useRef } from "react";
// style
import "../styles/searchImage.scss";

import axios from "axios";

const SearchImage = () => {
  let searchValue;
  let pageNumber = 1;
  let moreSearchInput;
  let perPageItemCnt = 12;
  let randomNumber = Math.floor(Math.random() * 100 + 1);

  // usestate for inout value
  const [inputValue, setInputValue] = useState("");
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [warningMsg, setWarningMsg] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");
  const [images, setimages] = useState([]);

  // element references
  // step1 for element ref
  const galleryRef = useRef(null);

  // step2 = add galleryRef into html markup
  // step3(final)
  const gallery = galleryRef.current;

  // API auth
  const apiKey = "hphS7UKF57sXEN3ZN8kIVtAzRQUI722C7LEVeV7kLMLlbuGB8PO0dOIX";
  // API
  const pageAPI = `https://api.pexels.com/v1/curated/?page=${randomNumber}&per_page=${perPageItemCnt}`;
  const searchPhotoUrl = `https://api.pexels.com/v1/search/?page=${randomNumber}&per_page=${perPageItemCnt}&query=${inputValue}`;

  // function
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(searchPhotoUrl, {
        headers: {
          Accept: "application/json",
          Authorization: apiKey,
        },
      });
      setErrorResponse("");
      setimages(response.data.photos);
      setInputValue("");
      console.log(response.data.photos);
    } catch (error) {
      setErrorResponse(error.message);
      clearGalleryImages();
      console.error("Error Fetching Data:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages();
  };

  const clearGalleryImages = () => {
    setimages([]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="searchImage">
      <div className="gallery-section">
        <div className="search-bar">
          <form className="search-form" id="search">
            <input
              type="text"
              placeholder="Enter data to search"
              className="search-input"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type="submit" className="submit-btn" onClick={handleSearch}>
              Search
            </button>
          </form>
          {errorResponse && (
            <div className="warningMessage">Please try again!</div>
          )}
          <div className="nav-button">
            {showMoreButton && <button className="more">More</button>}
          </div>
        </div>

        <div>
          <div className="gallery" ref={galleryRef}>
            {images.map((each) => (
              <img src={each.src.large} alt="" key={each.id} />
            ))}
          </div>
        </div>

        <div className="nav-button">
          {showMoreButton && <button className="more">More</button>}
        </div>
      </div>
    </div>
  );
};

export default SearchImage;
