import styled from "styled-components";

const BlueButton = styled.button`
background-color: #eee;
border: none;
outline: none;
&:hover {
  color: blue;
  outline: auto;
  outline-color: blue;
}
&:active {
  color: blue;
  outline: auto;
  outline-color: blue;
  position: relative;
  top: 2px;
}
`;

export {
  BlueButton,
}