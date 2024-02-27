import { useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from '../../context/theme-context';
import { anchors } from '../../constants';
import { Icon } from './icon';

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

const AnimatedLink = ({ href, label, onClick }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <li key={href}>
        <a
          href={href}
          className="text-base text-color-text-secondary"
          onClick={onClick}
        >
          {label}
        </a>
      </li>
    </motion.div>
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
            className="fixed right-0 top-10 origin-top bg-color-primary overflow-hidden rounded-b-lg"
          >
            <nav className="p-4">
              <ul className="flex flex-col items-start space-y-2 overflow-hidden">
                {anchors.map((anchor) => (
                  <AnimatedLink
                    key={anchor.id}
                    href={`#${anchor.id}`}
                    label={anchor.value}
                    onClick={toggleMenu}
                  />
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Header = () => (
  <header className="bg-color-bg border-b-color-primary border-b-[1px] fixed z-30 w-[100%]">
    <div className="max-w-[93%] mx-auto py-1 flex items-center justify-between">
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
