import { Container, Header } from '../components/ui/container';
import { Icon } from '../components/ui/icon';
import { List } from '../components/ui/list';
import { skills, experiences } from '../constants';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';

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

      <Container id="about">
        <Header title="Sobre mim" subtitle="Informações" />
        <p className="text-[0.9rem] text-color-text text-justify">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
          simplesmente uma simulação de texto.
        </p>
      </Container>

      <Container id="skills">
        <Header title="Tecnologias" subtitle="Conhecimentos" />
        <section className="flex justify-around">
          <List items={skills.frontend} />
          <List items={skills.backend} />
        </section>
      </Container>

      <Container id="projects">
        <Header title="Meus projetos" subtitle="Portfólio" />
      </Container>

      <Container id="experience">
        <Header title="Experiência" subtitle="Carreira" />
        <Tabs
          defaultValue={experiences.find((e) => e.default === true)?.company}
        >
          <TabsList className="bg-whiteIce mb-4">
            {experiences.map((e: any) => (
              <TabsTrigger key={e.company} value={e.company}>
                {e.company}
              </TabsTrigger>
            ))}
          </TabsList>
          <>
            {experiences.map((e: any) => (
              <TabsContent key={e.company} value={e.company}>
                <div className="flex flex-col">
                  <h3 className="text-[1.3rem] font-semibold text-color-text">
                    {e.role}
                  </h3>
                  <span className="text-sm text-color-text">{e.period}</span>
                </div>
                <div className="mr-2 my-2">
                  <ul className="flex flex-wrap text-xs text-color-primary">
                    {e.stacks?.map((stack: any) => (
                      <li key={stack} className="flex items-center  mr-2 mb-2">
                        <section className="flex items-center">{stack}</section>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mr-2 my-2">
                  <ul className="list-inside text-sm text-colo">
                    {e.topics?.map((topic: any) => (
                      <li key={topic} className="p-1">
                        <section className="flex items-center">{topic}</section>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </>
        </Tabs>
      </Container>

      <Container id="contact">
        <Header subtitle="Vamos conversar" title="Entre em contato" />
        <span className="m-0 text-[1rem] text-gray dark:text-whiteIce">
          Estou disponível para novos projetos e oportunidades. Vamos conversar!
        </span>
        <button
          type="button"
          className="bg-color-primary text-color-text-secondary p-1 rounded-md transition-colors hover:bg-color-hover-primary"
        >
          <a href="mailto:bruno.fagundes80@gmail.com">Entre em contato</a>
        </button>
      </Container>
    </div>
  );
};
