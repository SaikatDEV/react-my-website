// import styled component
import styled from "styled-components";

// Styled components
export const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  /* background-color: blue; */
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
