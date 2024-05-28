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
  const [warningMsg2, setWarningMsg2] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");
  const [images, setimages] = useState([]);

  // API auth
  const apiKey = "hphS7UKF57sXEN3ZN8kIVtAzRQUI722C7LEVeV7kLMLlbuGB8PO0dOIX";
  // API
  const pageAPI = `https://api.pexels.com/v1/curated/?page=${randomNumber}&per_page=1`;
  const searchPhotoUrl = `https://api.pexels.com/v1/search/?page=${randomNumber}&per_page=${perPageItemCnt}&query=${inputValue}`;

  // function
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const defaultFetchImages = async () => {
    try {
      const response = await axios.get(pageAPI, {
        headers: {
          Accept: "application/json",
          Authorization: apiKey,
        },
      });
      setimages(response.data.photos);
      setShowMoreButton(false);
      setWarningMsg(false);
    } catch (error) {
      console.error("Error Fetching Data:", error);
    }
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
      // setInputValue("");
      setWarningMsg(false);
      setShowMoreButton(true);
      setWarningMsg2(false);
      console.log(response.data);

      // Check if images array is empty after fetching data
      if (response.data.photos.length < 1) {
        setWarningMsg(true); // Display warning message if no images are fetched
        setShowMoreButton(false);
      }
    } catch (error) {
      setErrorResponse(error.message);
      setWarningMsg(true);
      clearGalleryImages();

      console.error("Error Fetching Data:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages();
    setWarningMsg2(false);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setimages([]);
    setInputValue("");
    setWarningMsg2(true);
    setWarningMsg(false);
    setShowMoreButton(false);
  };

  const clearGalleryImages = () => {
    setimages([]);
  };

  const handleMore = () => {
    pageNumber += 1;
    fetchImages();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    defaultFetchImages();
  }, []);

  return (
    <div className="searchImage">
      <div className="gallery-section">
        <div className="search-bar">
          <form className="search-form" id="search">
            <input
              type="text"
              placeholder="Search images"
              className="search-input"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type="submit" className="submit-btn" onClick={handleSearch}>
              Search
            </button>
            <button type="submit" className="submit-btn" onClick={handleClear}>
              Clear
            </button>
          </form>
          {warningMsg && (
            <div className="warningMessage">Please try again!</div>
          )}
          {warningMsg2 && (
            <div className="warningMessage">
              Please enter data to search for any images!
            </div>
          )}
        </div>

        <div>
          <div className="gallery">
            {images.map((each) => (
              <img src={each.src.large} alt="" key={each.id} />
            ))}
          </div>
        </div>

        <div className="nav-button">
          {showMoreButton && (
            <button className="more" onClick={handleMore}>
              More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchImage;
