// Components
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component='footer'
            sx={{
                mt: 12
            }}>
            <Typography
                variant='h6'
                align='center'
                gutterBottom>
                Um projeto do IFRN Campus Avançado Lajes
            </Typography>
            <Typography
                variant='h6'
                align='center'
                gutterBottom>
                Com Amor IF &copy; 2023
            </Typography>
        </Box>
    );
}

export default Footer;