import { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../context/theme-context';
import { Icon } from './icon';

const ToggleTheme = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      aria-label="Toggle Dark Mode"
      onClick={() => {
        changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
      }}
    >
      <Icon icon={currentTheme === 'light' ? 'moon' : 'sun'} size={24} />
    </button>
  );
};

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <button
      type="button"
      onClick={toggleMenu}
      aria-label="Open menu"
      className="ml-4"
    >
      <Icon icon="openMenu" size={24} />
    </button>
  );
};

// const Sidebar = () => {};

export const Header = () => (
  <header className="bg-color-bg border-b-color-primary border-b-[1px] fixed z-30 w-[100%]">
    <div className="max-w-[93%] mx-auto py-3 flex items-center justify-between">
      <span className="text-[1rem] lg:text-[1.1rem] font-bold">
        Bruno Tassinari
      </span>

      <div className="flex items-center">
        <ToggleTheme />
        <Menu />
      </div>
    </div>
  </header>
);
