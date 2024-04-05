import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const useCases = [
  {
    title: 'Desenvolvimento de Aplicativos Descentralizados (DApps)',
    description:
      'Criamos DApps personalizados para permitir transações seguras, transparentes e eficientes em várias indústrias, como finanças, saúde e cadeia de suprimentos.',
  },
  {
    title: 'Integração de Blockchain',
    description:
      'Implementamos soluções de integração de blockchain para empresas que desejam adotar a tecnologia em seus sistemas existentes, melhorando a segurança, eficiência e confiabilidade dos processos.',
  },
  {
    title: 'Contratos Inteligentes',
    description:
      'Desenvolvemos contratos inteligentes personalizados que automatizam transações e acordos, proporcionando maior transparência, segurança e agilidade nos negócios.',
  },
  {
    title: 'Tokenização de Ativos',
    description:
      'Auxiliamos empresas na tokenização de ativos reais, como imóveis e obras de arte, permitindo a negociação e transferência desses ativos de forma rápida e segura.',
  },
  {
    title: 'Governança Descentralizada',
    description:
      'Implementamos soluções de governança descentralizada para organizações que desejam adotar modelos de tomada de decisão mais transparentes e inclusivos.',
  },
];

const UseCases = () => {
  const renderCarouselItems = () => {
    const carouselItems = [];
    for (let i = 0; i < useCases.length; i += 3) {
      carouselItems.push(
        <Carousel.Item key={i}>
          <Row>
            {useCases.slice(i, i + 3).map((useCase, index) => (
              <Col key={index} >
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{useCase.title}</Card.Title>
                    <Card.Text>{useCase.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      );
    }
    return carouselItems;
  };

  return (
    <section className="use-cases">
      <Container>
        <Row>
          <Col>
            <h2>Casos de Uso</h2>
            <p>
              A Govinda Systems DAO oferece soluções inovadoras que podem ser aplicadas em diversos cenários para ajudar empresas a impulsionar seu crescimento e alcançar o sucesso.
            </p>
            <Carousel interval={null} indicators={false}>
              {renderCarouselItems()}
            </Carousel>
            <p>
              Esses são apenas alguns exemplos de como a Govinda Systems DAO pode ajudar sua empresa a aproveitar todo o potencial da tecnologia blockchain. Entre em contato conosco para discutir suas necessidades específicas e descobrir como podemos impulsionar sua transformação digital.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UseCases;
