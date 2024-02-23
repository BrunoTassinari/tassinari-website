import { useEffect, useState } from 'react';
import { Header } from './components/header';

export const App = () => {
  // const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="h-screen w-screen bg-color-bg-secondary text-color-text">
      <Header />
      <main className="max-w-[85%] mx-auto flex flex-col items-center justify-center">
        <h1>Opa</h1>
      </main>
    </div>
  );
};
