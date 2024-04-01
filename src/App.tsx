import "./App.css";
import { Menu } from "./components/menu";

function App() {
  const Items = [
    { href: "#", anchor: "elemento 1" },
    { href: "#", anchor: "elemento 2" },
    { href: "#", anchor: "elemento 3" },
    { href: "#", anchor: "elemento 4" },
    { href: "#", anchor: "elemento 5" },
    { href: "#", anchor: "elemento 6" },
  ];

  return (
    <>
      <Menu items={Items} title="Yo soy el titulo" />
    </>
  );
}

export default App;
