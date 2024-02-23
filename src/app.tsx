import { useEffect, useState } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const App = () => {
  // const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="h-screen w-screen bg-color-bg-secondary text-color-text">
      <Header />
      <main className="max-w-[85%] mx-auto my-20 lex flex-col items-center justify-center">
        <div>
          <p>opa</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
