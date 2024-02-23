import { Icon } from './icon';

export const Footer = () => {
  return (
    <footer className="bg-color-bg border-t-[1px] border-t-color-primary">
      <div className="w-[90%] py-3 m-auto container flex flex-col items-center justify-between">
        <section className="flex justify-between items-center w-2/4">
          <section className="flex items-center">
            <Icon icon="github" size={24} />
            <a
              className="underline text-xs"
              href="https://github.com/BrunoTassinari"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </section>
          <section className="flex items-center">
            <Icon icon="linkedin" size={24} />
            <a
              className="underline text-xs"
              href="https://github.com/BrunoTassinari"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </section>
        </section>
        <span className="text-xs mt-2">
          &copy; 2024 - Desenvolvido por{' '}
          <a
            className="underline text-strokeBlue dark:text-lightBlue"
            target="_blank"
            href="https://github.com/BrunoTassinari"
            rel="noreferrer"
          >
            Bruno Tassinari
          </a>
        </span>
      </div>
    </footer>
  );
};
