import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import mainImg from '../../img/cabugi.jpg';

const MainPost = () => {
    return (
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${mainImg})`,
          }}
        >
          {<img style={{ display: 'none' }} src={mainImg} alt='lalkdaokoka' />}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Com amor IF
                </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                  O programa “Com Amor, IF” é uma ação disciplinar que visa estimular a participação dos discentes na construção
                  de um Campus Avançado Lajes limpo, organizado e mais disciplinado.
                </Typography>
                <Link variant="subtitle1" href="#">
                  Saiba mais
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      );
}

export default MainPost