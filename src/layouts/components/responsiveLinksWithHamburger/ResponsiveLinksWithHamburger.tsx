import { Icon } from "@iconify/react";
import { ICON_SIZE, ICON_SIZE_MOBILE } from "@layouts/consts/iconSize";
import { MENU_LINKS } from "@layouts/consts/menuLinks";
import { useState } from "react";

const ResponsiveLinksWithHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button className="burger" onClick={toggleButton}>
        <span className={`${isOpen ? "opened" : ""} line`} />
        <span className={`${isOpen ? "opened" : ""} line`} />
        <span className={`${isOpen ? "opened" : ""} line`} />
      </button>
      <div className={`${isOpen ? "" : "hidden"} responsive-menu`}>
        <div className="responsive-links">
          {MENU_LINKS.map((link, index) => {
            if (link.title === "Newsletter") {
              return (
                <a
                  className="text-primary font-semibold "
                  key={index}
                  href={link.path}
                  onClick={(e) => e.preventDefault()}
                >
                  {link.title}
                </a>
              );
            }
            return (
              <a
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
                key={index}
                href={link.path}
              >
                {link.title}
              </a>
            );
          })}
        </div>

        <div className="social-mobile">
          <button>
            <Icon
              width={ICON_SIZE_MOBILE}
              icon="cib:facebook"
              className="hover:text-primary"
            />
          </button>
          <button>
            <Icon
              width={ICON_SIZE_MOBILE}
              icon="cib:instagram"
              className="hover:text-primary"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ResponsiveLinksWithHamburger;
