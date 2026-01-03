import styled from "styled-components";
import * as DropDown from "@radix-ui/react-dropdown-menu"


export const DropdownContent = styled(DropDown.Content)`
  min-width: 200px;
  background-color: white; /* The content usually is white, not purple */
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35);
  z-index: 100;
  
  /* Animation settings if needed */
  animation-duration: 400ms;
`;

export const DropdownItem = styled(DropDown.Item)`
  font-size: 14px;
  color: #333;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 35px;
  padding: 0 10px;
  cursor: pointer;
  outline: none;

  &:hover, &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors["white"] || "#6d5bd0"};
    color: white;
  }
`;

export const Arrow = styled(DropDown.Arrow)`
  fill: white;
`;