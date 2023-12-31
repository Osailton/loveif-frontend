import { Card, Typography } from '@mui/material';

const TurmaCard = ({ turma }) => {
    return (
        <Card sx={{ width: 240, height: 300, pt: 4, mb: 1 }} align='center'>
            <Typography variant='h2'>{turma.nome}</Typography>
            <Typography variant='h6'>Pontuação</Typography>
            <Typography variant='body1' color='secondary.dark'>{turma.pontuacao}</Typography>
        </Card>
    );
};

export default TurmaCard;