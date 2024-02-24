import { useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeContext } from '../context/theme-context';
import { Icon } from './icon';

interface NavBarProps {
  open: boolean;
  toggleMenu: () => void;
}

const menuAnimation = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 1],
    },
  },
};

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

const Navbar = ({ open, toggleMenu }: NavBarProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        variants={menuAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed left-0 top-0 w-full h-full origin-top bg-color-primary"
      >
        <div className="max-w-[93%] mx-auto py-3 flex items-center justify-between">
          <span className="text-[1rem] font-bold text-color-text-secondary">
            Bruno Tassinari
          </span>
          <button aria-label="Close Navbar" type="button" onClick={toggleMenu}>
            <Icon icon="closeMenu" size={20} />
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Open menu"
        className="ml-4"
      >
        <Icon icon="openMenu" size={24} />
      </button>
      <Navbar open={open} toggleMenu={toggleMenu} />
    </>
  );
};

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
