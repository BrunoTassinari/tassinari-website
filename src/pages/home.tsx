import { Container, HeaderContainer } from '../components/container';

export const Home = () => {
  return (
    <div>
      <Container>
        <HeaderContainer title="Bruno Tassinari" subtitle="Meu nome é" />
        <p className="text-[0.9rem] text-color-text text-justify">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
          simplesmente uma simulação de texto.
        </p>
      </Container>
    </div>
  );
};
