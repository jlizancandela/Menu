import { useState } from "react";
import { MenuProps } from "./types";
import { MenuContainer } from "./menucontainer";
import { MenuDropdown } from "./menudropdown";

export const Menu = (props: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <MenuContainer onMouseLeave={() => setVisible(false)}>
        <nav onMouseEnter={() => setVisible(true)}>
          <a>{props.title}</a>
        </nav>
        <MenuDropdown visible={visible}>
          <ul>
            {props.items.map((item) => (
              <li>
                <a href={item.href}>{item.anchor}</a>
              </li>
            ))}
          </ul>
        </MenuDropdown>
      </MenuContainer>
    </>
  );
};
