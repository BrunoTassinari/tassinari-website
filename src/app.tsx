import { useEffect, useState } from 'react';
import { Header } from './components/ui/header';
import { Footer } from './components/ui/footer';
import { Home } from './pages/home';

export const App = () => {
  // const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="h-screen w-screen bg-color-bg text-color-text">
      <Header />
      <main className="max-w-[86%] mx-auto flex-col items-center justify-center">
        <Home />
      </main>
      <Footer />
    </div>
  );
};
