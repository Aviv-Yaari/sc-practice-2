import styled from "styled-components";

export const Button = styled.button<{ primary?: boolean }>`
  border: none;
  background: ${(props) => (props.primary ? props.theme.colors.primary : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : props.theme.colors.textPrimary)};
  font-size: 0.85em;
  font-family: inherit;
  font-weight: 700;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    ${(props) => (props.primary ? "opacity: 0.8" : `color: #000`)}
  }
`;

export const LinkButton = styled.button`
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.9em;
  text-decoration: underline;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
`;
