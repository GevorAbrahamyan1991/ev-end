import React from "react";
import { ThemeProvider, useTheme } from "./ThemContext";
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

const menuList = [
  {
    label: "Home",
    href: "",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "News",
    href: "/news",
  },
];

function NavList() {
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menuList &&
        menuList.map((item, index) => {
          return (
            <Typography
              as="li"
              variant="small"
              className="p-1 text-xl font-bold transition-all duration-300 text-themeDark dark:text-themeLight"
              key={index}
            >
              <Link
                to={item.href}
                className="flex items-center transition-colors hover:text-blue-500"
              >
                {item.label}
              </Link>
            </Typography>
          );
        })}
    </ul>
  );
}

export default function Header() {
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
            <NavList />
            <ThemeSwitch />
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
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
}
