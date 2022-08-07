import Hero from "./Hero";
import HoverMenu from "./hoverMenu";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <HoverMenu />
      <Hero />
    </div>
  );
}
