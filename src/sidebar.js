import { useGlobalContext } from "./context";
import { subData } from "./data";
import { ImCross } from "react-icons/im";
import "./styles.css";

export default function Sidebar() {
  const { isMobileMenuOpen, mobileMenuClose } = useGlobalContext();

  return (
    <section className="sidebar">
      {isMobileMenuOpen && (
        <div className="main-sidebar">
          {subData.map((item) => {
            const { id, pageName, links } = item;
            return (
              <div className="mobileMenu" key={id}>
                <p className="mobile-menu-links">{pageName}</p>
                <ul className="subCategoriesList">
                  {links.map((values, index) => {
                    const { icon, url, label } = values;
                    return (
                      <li key="subCategories" key={index}>
                        <a href={url} className="anchorLink">
                          {icon} {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <ImCross onClick={mobileMenuClose} className="menuCancel" />
        </div>
        // Cancel Icon
      )}
    </section>
  );
}
