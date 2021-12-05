import styled from "styled-components";
import BackgroundImageDesktop from "../images/pattern-background-desktop.svg";
import BackgroundImageMobile from "../images/pattern-background-mobile.svg";

export const MainContainer = styled.div`
  display: grid;
  min-height: 100vh;
  place-content: center;
  background: url(${BackgroundImageMobile}) no-repeat;
  background-size: contain;
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    background: url(${BackgroundImageDesktop}) no-repeat;
    background-size: cover;
  }
`;
