import { useState } from 'react';
import { Container, Header } from '../components/ui/container';
import { Icon } from '../components/ui/icon';
import { List } from '../components/ui/list';
import { skills, experiences, projects } from '../constants';
import { GridContainer, GridItem } from '../components/ui/grid';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import { ModalProject } from '../components/ui/modal';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [project, setProject] = useState({});

  return (
    <div className="my-16 flex flex-col gap-4 lg:gap-20">
      <Container>
        <Header title="Bruno Tassinari" subtitle="Meu nome é" />
        <p className="text-sm lg:text-base text-color-text text-justify">
          Olá! Eu sou o Bruno! Sou desenvolvedor fullstack com foco Javascript.
          Atualmente estou estudando e me aprimorando cada vez mais. Estou
          disponível para novos projetos e oportunidades. Vamos conversar!
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

      <Container
        id="about"
        className="lg:items-center lg:max-w-[60%] lg:m-auto"
      >
        <Header
          title="Sobre mim"
          subtitle="Informações"
          className="lg:hidden"
        />
        <p className="text-sm lg:text-base text-color-text text-justify">
          Começei no mundo da progração em 2020, quando iniciei a graduação de
          análise e desenvolvimento de sistemas. Depois disso mergulhei mais
          fundo ainda na pandemia, quando paricipéi da primeira imersão da
          Alura. Desde então, venho estudando e me aprimorando cada vez mais.
          Atualmente, estou focado em me tornar um desenvolvedor fullstack com
          foco em Javascript como priciapl linguagem de programação. Mas também
          conhecimentos em várias outras tecnologias que pude usar no meu
          trabalho.
        </p>
      </Container>

      <Container
        id="skills"
        className="lg:items-center lg:max-w-[60%] lg:m-auto lg:justify-between"
      >
        <Header
          title="Tecnologias"
          subtitle="Conhecimentos"
          className="lg:hidden"
        />
        <section className="w-[100%] flex justify-between">
          <List items={skills.frontend} />
          <List items={skills.backend} />
        </section>
      </Container>

      <Container id="projects">
        <Header title="Meus projetos" subtitle="Portfólio" />
        <GridContainer>
          {projects.map((item: any) => (
            <GridItem
              key={item.id}
              item={item}
              onClick={() => {
                setProject(item);
                setShowModal(true);
              }}
            />
          ))}
        </GridContainer>

        <ModalProject
          project={project}
          setShowModal={setShowModal}
          showModal={showModal}
        />
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
                  <List items={e.stacks} type="row" highlight />
                </div>
                <div className="mr-2 my-2">
                  <List items={e.topics} />
                </div>
              </TabsContent>
            ))}
          </>
        </Tabs>
      </Container>

      <Container
        id="contact"
        className="lg:items-center lg:max-w-[50%] lg:m-auto"
      >
        <Header
          subtitle="Vamos conversar"
          title="Entre em contato"
          className="lg:hidden"
        />
        <span className="m-0 text-[1rem] text-gray dark:text-whiteIce">
          Estou disponível para novos projetos e oportunidades. Vamos conversar!
        </span>
        <button
          type="button"
          className="bg-color-primary text-color-text-secondary p-1 rounded-md transition-colors hover:bg-color-hover-primary w-[100%]"
        >
          <a href="mailto:bruno.fagundes80@gmail.com">Entre em contato</a>
        </button>
      </Container>
    </div>
  );
};
