import { Box, Card, Container, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';

// Styles
import 'react-multi-carousel/lib/styles.css';

// Images
import headerImg from '../../img/header.jpg'
import trophyImg from '../../img/trophy.jpg';

const turmas = {
  turmaA: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  turmaB: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  turmaC: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
}

const Home = () => {
  return (
    <Container align='center'>
      <Box
        component='img'
        src={headerImg}
        sx={{
          mt: 2,
        }} />
      <Box
        component='div'
        sx={{
          mt: 6,
          justifyContent: 'space-between'
        }}>
        <Typography
          variant='body1'
          color='primary.dark'
          align='justify'
          sx={{ mb: 4 }}>
          E aí, queridos alunos do IFRN - Campus Avançado Lajes,
        </Typography>
        <Typography
          variant='body1'
          color='primary.dark'
          align='justify'
          gutterBottom>
          As turmas que organizarem campanhas, registradas pelos líderes de turma junto à biblioteca (máximo de 1 por turma),
          de doação de livros de literatura, ou de material escolar, para escolas de suas cidades, receberão pontuação bônus
          de até 30 pontos.
        </Typography>
        <Typography
          variant='body1'
          color='primary.dark'
          align='justify'
          gutterBottom>
          Os alunos podem pontuar através de ações que demonstrem comprometimento com esses princípios. A pontuação é cumulativa
          e será monitorada ao longo do ano letivo. Ao final do ano, a turma com a maior pontuação receberá uma premiação especial,
          reconhecendo seu esforço e dedicação ao programa.
        </Typography>
        <Typography
          variant='body1'
          color='primary.dark'
          align='justify'
          gutterBottom>
          Participem ativamente do 'Com Amor IF' para contribuir com um ambiente mais organizado, saudável e produtivo, enquanto
          desenvolvem habilidades valiosas para o futuro! Juntos, podemos fazer a diferença em nosso campus.
        </Typography>
      </Box>
      <Box
        component='img'
        src={trophyImg}
        sx={{
          mt: 6,
        }} />
      <Box
        component='div'
        sx={{
          mt: 6,
        }}>
        <Typography
          variant='body1'
          color='primary.dark'
          align='center'
          gutterBottom>
          Confira abaixo ranking geral da pontuação de cada turma.
        </Typography>
        <Box
          sx={{
            width: 800,
            height: 320,
            mt: 4,
          }}
        >
          <Carousel
            responsive={turmas}
            ssr
            infinite={true}
          >
            <Card sx={{ width: 240, height: 300, pt: 4, mb: 1 }} align='center'>
              <Typography variant='h2'>ADM 3VA</Typography>
              <Typography variant='h6'>Pontuação</Typography>
              <Typography variant='body1' color='secondary.dark'>44</Typography>
            </Card>
            <Card sx={{ width: 240, height: 300, pt: 4, mb: 1 }} align='center'>
              <Typography variant='h2'>INFO 3MB</Typography>
              <Typography variant='h6'>Pontuação</Typography>
              <Typography variant='body1' color='secondary.dark'>88</Typography>
            </Card>
            <Card sx={{ width: 240, height: 300, pt: 4, mb: 1 }} align='center'>
              <Typography variant='h2'>COM 3MA</Typography>
              <Typography variant='h6'>Pontuação</Typography>
              <Typography variant='body1' color='secondary.dark'>22</Typography>
            </Card>
          </Carousel>
        </Box>
      </Box>

    </Container>
  );
}

export default Home;