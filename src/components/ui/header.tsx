import { useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from '../../context/theme-context';
import { anchors } from '../../constants';
import { Icon } from './icon';
import { LinkedList } from './list';

const menuAnimation = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.2,
      ease: [0.12, 0, 0.39, 1],
    },
  },
};

const ToggleTheme = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <button
      className="transition-colors hover:bg-color-bg-secondary rounded-lg p-1"
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

const Navbar = () => {
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
        className="transition-colors hover:bg-color-bg-secondary rounded-lg p-1"
      >
        {open ? (
          <Icon icon="closeMenu" size={24} />
        ) : (
          <Icon icon="openMenu" size={24} />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed right-0 top-12 origin-top bg-color-primary overflow-hidden rounded-b-lg"
          >
            <nav className="p-4">
              <LinkedList items={anchors} action={toggleMenu} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Header = () => (
  <header className="bg-color-bg border-b-color-primary border-b-[1px] fixed z-30 w-[100%]">
    <div className="max-w-[93%] mx-auto py-2 flex items-center justify-between">
      <span className="text-[1rem] lg:text-[1.1rem] font-bold">
        Bruno Tassinari
      </span>

      <div className="flex items-center gap-1">
        <ToggleTheme />
        <Navbar />
      </div>
    </div>
  </header>
);
