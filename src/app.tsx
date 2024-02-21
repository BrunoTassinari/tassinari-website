import React from 'react';
import { ThemeContext } from './context/theme-context';

export const App = () => {
  const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext);
  return (
    <div className="h-screen bg-bkg flex justify-center items-center ">
      <button
        type="button"
        onClick={() =>
          changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
        }
      >
        {currentTheme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
};
