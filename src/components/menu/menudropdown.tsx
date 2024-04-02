import styled from "styled-components";
import { MenuDropdownProps } from "./types";

export const MenuDropdown = styled.nav<MenuDropdownProps>`
  * {
    box-sizing: border-box;
    margin: 0px;
  }
  ul {
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    li {
      display: block;
      width: 100%;
      padding: 5px 5px 0 5px;
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
