import * as React from 'react';

// Components
import { Typography } from "@mui/material"

const Regiment = () => {
    return (
        <React.Fragment>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Número de empréstimos de livros na biblioteca: A quantidade de empréstimos de livro será calculada bimestralmente pela biblioteca e cadastrada no site/sistema.
                Neste caso, precisaríamos de um perfil de servidor para o bibliotecário, para cadastro de número bimestral de empréstimos de livros por turma, com item final indicando a soma dos empréstimos nos quatro bimestres e calculando automaticamente a pontuação indicada nos anexos do regulamento.
                Para o usuário apareceria o ranking com as informações gerais de pontuação da turma.
            </Typography>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Bônus round – Campanhas de doação de livros para escolas da região e troca-livros do IFRN.
                Neste caso, precisaríamos de um perfil de servidor para o bibliotecário, para cadastro de pontuação de bônus solidário. Esta coluna apareceria como a de um “bimestre extra” (com pontuação pode ir de 0 até 20 pontos).
                As turmas que organizarem campanhas, registradas pelos líderes de turma junto à biblioteca (máximo de 1 por turma), de doação de livros de literatura, ou de material escolar, para escolas de suas cidades, receberão pontuação bônus de até 30 pontos.
            </Typography>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Bônus round – Campeões dos Estudos.
                A turma que formar grupos de estudos que se reúnam na sala de estudos em grupo da biblioteca e tiver o maior númerode reservas e comparecimentos no ano, receberá bônus de de 20 pontos cadastrado pelo perfil de servidor para o bibliotecário.
            </Typography>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Penalização – Perda de livro
                Sempre que um livro emprestado for perdido e não reposto no acervo pelo aluno, a turma poderá perder até
            </Typography>
        </React.Fragment>
    )
}

export default Regiment