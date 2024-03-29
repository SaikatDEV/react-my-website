import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    // @media (prefers-reduced-motion: no-preference) {
    //     .asmLogo {
    //       animation: App-logo-spin infinite 20s linear;
    //     }
    //   }
      
    // @keyframes App-logo-spin {
    //     from {
    //       transform: rotate(0deg);
    //     }
    //     to {
    //       transform: rotate(360deg);
    //     }
    // }
    
    body {
        background: #1b1b1b;
        font-family: "Inter", Sans-serif;
        // color: white;
    }
    
    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: "Inter", Sans-serif;
        
        &:hover {   
            background-color: #23d997; 
            color: black; }
    }
    
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    
    h3{
        color: white;
    }
    
    h4{
        font-weight: bold;
        font-size: 2rem;
        // color: #23d997;
    }
    
    a{
        font-size: 1.1rem;
    }
    
    span{
        font-weight: bold;
        color: #23d997;
    }
    
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
 `;

export default StyledGlobal;
