import React, { useContext } from "react";
import { ThemeProvider, useTheme } from "./ThemContext";
import { Context } from "../Multilanguage/wrapper";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/download.png";
import LogoDark from "../../assets/img/1.png";
import ThemeSwitch from "./ThemeSwitch";
import Lang from "../Multilanguage/SetLang";
import { FormattedMessage } from "react-intl";

const menuList = [
  {
    label: "nav_home",
    href: "",
  },
  {
    label: "nav_about",
    href: "/about",
  },
  {
    label: "nav_news",
    href: "/news",
  },
];
function NavList({ locale }) {
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menuList &&
        menuList.map((item, index) => {
          return (
            <Typography
              as="li"
              variant="small"
              className={
                locale === "am"
                  ? "p-1 text-md font-bold transition-all duration-300 text-themeDark dark:text-themeLight"
                  : "p-1 text-xl font-bold transition-all duration-300 text-themeDark dark:text-themeLight"
              }
              key={index}
            >
              <Link
                to={item.href}
                className="flex items-center transition-colors hover:text-blue-500"
              >
                <FormattedMessage id={item.label} />
              </Link>
            </Typography>
          );
        })}
    </ul>
  );
}

export default function Header() {
  const { locale } = useContext(Context);
  const [openNav, setOpenNav] = React.useState(false);
  const { theme } = useTheme();

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <Navbar className="max-w-screen-xl px-6 py-3 mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center h-16">
            {theme == "light" ? (
              <img src={Logo} alt="" />
            ) : (
              <img src={LogoDark} alt="" />
            )}
          </div>

          <div className="hidden lg:flex lg:items-center">
            <NavList locale={locale} />
            <ThemeSwitch />
            <Lang />
          </div>
          <IconButton
            variant="text"
            className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="w-8 h-8 text-black" strokeWidth={2} />
            ) : (
              <Bars3Icon className="w-8 h-8 text-black" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList locale={locale} />
        </Collapse>
      </Navbar>
    </>
  );
}
