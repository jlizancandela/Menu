export interface MenuProps {
  items: {
    href: string;
    anchor: string;
  }[];
  title: string;
}

export interface MenuDropdownProps {
  visible: boolean;
}
