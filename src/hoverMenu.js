import { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";
import { subData } from "./data";
import "./styles.css";
export default function HoverMenu() {
  const {
    isSidebarOpen,
    location,
    page: { pageName, links }
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const subMenu = container.current;
    const { centerOfBtn, bottomOfBtn } = location;
    subMenu.style.left = `${centerOfBtn}px`;
    subMenu.style.top = `${bottomOfBtn + 10}px`;
  }, [location]);
  return (
    <section ref={container} className="hoverMenu">
      {isSidebarOpen && (
        <div className="main-hoverMenu">
          <h3>{pageName}</h3>
          <div className="hoverLinks">
            {links.map((item, index) => {
              const { url, icon, label } = item;
              return (
                <a href={url} key={index} className="hoverLinkItem">
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
