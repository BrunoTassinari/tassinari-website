import { Container, Header } from '../components/container';
import { Icon } from '../components/icon';
import { Skills } from '../components/skills';

export const Home = () => {
  return (
    <div className="my-14 flex flex-col gap-9">
      <Container>
        <Header title="Bruno Tassinari" subtitle="Meu nome é" />
        <p className="text-[0.9rem] text-color-text text-justify">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
          simplesmente uma simulação de texto.
        </p>
        <div>
          <section className="flex items-center gap-2">
            <a
              aria-label="github"
              className="underline text-xs"
              href="https://github.com/BrunoTassinari"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="github" size={28} className="mr-1" />
            </a>

            <a
              aria-label="linkedin"
              className="underline text-xs"
              href="
              https://www.linkedin.com/in/bruno-tassinari-5b6b2b1b7/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="linkedin" size={28} className="mr-1" />
            </a>
          </section>
        </div>
      </Container>

      <Container>
        <Header title="Sobre mim" subtitle="Informações" />
        <p className="text-[0.9rem] text-color-text text-justify">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
          simplesmente uma simulação de texto.
        </p>
      </Container>

      <Container>
        <Header title="Tecnologias" subtitle="Conhecimentos" />
        <Skills />
      </Container>
    </div>
  );
};
