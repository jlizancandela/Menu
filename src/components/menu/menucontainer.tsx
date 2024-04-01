import styled from "styled-components";

export const MenuContainer = styled.nav`
  max-width: 150px;
  display: flex;
  flex-direction: column; //Contendor del menu
  margin-left: 10px;
  a {
    font-weight: bold;
  }
  a:hover {
    cursor: pointer; // Titulo del menu
    color: blue;
  }
`;
