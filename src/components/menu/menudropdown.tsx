import styled from "styled-components";
import { MenuDropdownProps } from "./types";

export const MenuDropdown = styled.nav<MenuDropdownProps>`
  ul {
    list-style: none;
    padding: 0px;
    li {
      display: block;
      width: 100%;
      padding: 5px;
      a {
        text-decoration: none;
      }
    }
    li:hover {
      background-color: yellowgreen;
      color: blue;
      cursor: pointer;
    }
  }
  margin-top: 15px;
  margin-bottom: auto;
  border: 1px solid black;
  justify-self: end;
  display: ${(props) => (props.visible ? "block" : "none")};
  transition: all 5s ease-out;
  background-color: whitesmoke;
`;
