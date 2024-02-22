import {
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode,
  useMemo,
} from 'react';

const defaultValue = {
  currentTheme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeCurrentTheme: (_newTheme: 'light' | 'dark') => {},
};

export const ThemeContext = createContext(defaultValue);

export const ThemeContextWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark');
    else document.body.classList.add('dark');
  }, [theme]);

  const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const contextValue = useMemo(
    () => ({ currentTheme: theme, changeCurrentTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
