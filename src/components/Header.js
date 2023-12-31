import * as React from 'react';

// Components
import { Button, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <React.Fragment>
            <Toolbar
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider'
                }}>
                <Button
                    size='small'>
                    SUAP IFRN
                </Button>
                <Typography
                    component='h3'
                    variant='h3'
                    color='primary'
                    align='center'
                    noWrap
                    sx={{ flex: 1 }} >
                    Com Amor IF
                </Typography>
                <Button
                    variant='outlined'
                    size='small'>
                    Entrar
                </Button>
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;