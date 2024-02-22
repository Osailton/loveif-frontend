import { Box, Container, Typography } from '@mui/material';

// Images
import headerImg from '../img/header.jpg';
import trophyImg from '../img/trophy.jpg';
import PointsCarousel from '../components/PointsCarousel';

const Home = () => {
  return (
    <Container align='center'>
      <Box
        component='img'
        src={headerImg}
        sx={{
          borderRadius: 1,
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
          borderRadius: 1,
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
          <PointsCarousel />
        </Box>
      </Box>

    </Container>
  );
}

export default Home;