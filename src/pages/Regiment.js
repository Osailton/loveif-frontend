import { Box, Link, Typography, Container } from "@mui/material";

// Images
import trophyHeartImg from '../img/trophy_heart.jpg';

const Regiment = () => {
    return (
        <Container
            align='center'>
            <Box sx={{
                mt: 6
            }}>
                <Typography
                    variant='h2'
                    align='center'
                    color='primary.dark'
                    sx={{ mb: 4 }}>
                    Regulamento
                </Typography>
                <Typography
                    variant='body1'
                    color='primary.dark'
                    align='justify'
                    gutterBottom>
                    Com Amor, IF” é focado em atitudes e princípios humanos, visando estimular a
                    participação dos alunos na criação de um campus limpo, organizado, cooperativo
                    e engajado. Baseado nos eixos do Programa 5S, adapta a proposta japonesa para
                    o contexto local, incentivando a prática de conceitos e ferramentas que
                    estruturam uma rotina mais organizada.
                </Typography>
                <Typography
                    variant='body1'
                    color='primary.dark'
                    align='justify'
                    gutterBottom>
                    O regulamento inclui a descrição detalhada dos cinco sensos (Utilização, Ordenação,
                    Limpeza, Saúde e Autodisciplina), as normas para participação, e informações sobre
                    a pontuação e premiação. Leia-o com atenção para aprender como ganhar vários bônus
                    para a sua turma e como garantir o mega prêmio desta competição acadêmica!
                </Typography>
                <Link>Baixe aqui o regulamento</Link>

            </Box>
            <Box
                component='img'
                src={trophyHeartImg}
                align='center'
                sx={{
                    borderRadius: 1,
                    mt: 6,
                    maxHeight: 400
                }} />
        </Container>
    );
}

export default Regiment;