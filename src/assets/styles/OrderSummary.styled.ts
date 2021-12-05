import styled from "styled-components";

export const StyledOrderSummary = styled.main`
  display: grid;
  grid-template-columns: 0 1fr 0;
  gap: 25px;
  padding-bottom: 40px;
  background: #fff;
  max-width: 400px;
  border-radius: 10px;
  text-align: center;

  > * {
    grid-column: 2;
  }

  img {
    grid-column: 1/-1;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;
