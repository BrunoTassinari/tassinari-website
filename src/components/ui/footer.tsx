import { Icon } from './icon';

export const Footer = () => {
  return (
    <footer className="bg-color-bg border-t-[1px] border-t-color-primary">
      <div className="w-[90%] py-2 m-auto flex items-center justify-between">
        <span className="text-sm">
          &copy; 2024 -{' '}
          <a
            className="underline text-strokeBlue dark:text-lightBlue"
            target="_blank"
            href="https://github.com/BrunoTassinari"
            rel="noreferrer"
          >
            Bruno Tassinari
          </a>
        </span>
        <section className="flex items-center gap-2">
          <a
            aria-label="github"
            className="underline text-xs"
            href="https://github.com/BrunoTassinari"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="github" size={24} className="mr-1" />
          </a>

          <a
            aria-label="linkedin"
            className="underline text-xs"
            href="
              https://www.linkedin.com/in/bruno-tassinari-5b6b2b1b7/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="linkedin" size={24} className="mr-1" />
          </a>
        </section>
      </div>
    </footer>
  );
};
