// Components
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Um projeto do IFRN Campus Lajes
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Com Amor IF &copy; 2023
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;