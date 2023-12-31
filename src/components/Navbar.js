// Components
import { Toolbar, Link } from '@mui/material';

const Navbar = (props) => {

    const { sections, title } = props;

    return (
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
            {sections.map((section) => (
                <Link
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    {section.title}
                </Link>
            ))}
        </Toolbar>
    );
}

export default Navbar;