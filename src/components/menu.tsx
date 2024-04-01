import { useState } from "react";
import styled from "styled-components";

// Props del componente
export interface MenuProps {
  items: {
    href: string;
    anchor: string;
  }[];
  title: string;
}

interface OcultoProps {
  visible: boolean;
}

const Mimenu = styled.nav`
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

// Parte oculta del menu

const Oculto = styled.nav<OcultoProps>`
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

// Componente

export const Menu = (props: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Mimenu onMouseLeave={() => setVisible(false)}>
        <nav onMouseEnter={() => setVisible(true)}>
          <a>{props.title}</a>
        </nav>
        <Oculto visible={visible}>
          <ul>
            {props.items.map((item) => (
              <li>
                <a href={item.href}>{item.anchor}</a>
              </li>
            ))}
          </ul>
        </Oculto>
      </Mimenu>
    </>
  );
};
