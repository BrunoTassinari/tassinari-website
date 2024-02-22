import React from 'react';
import { ThemeContext } from './context/theme-context';
import { Icon } from './components/icon';

export const App = () => {
  const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext);
  return (
    <div className="h-screen flex bg-color-bg justify-center items-center ">
      <div className="h-screen flex justify-center items-center ">
        <Icon icon="github" size={40} />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-color-text">Hello World</h1>
        <button
          type="button"
          className="px-4 py-2 bg-color-primary text-color-text-secondary mt-4"
          onClick={() =>
            changeCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
          }
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};
