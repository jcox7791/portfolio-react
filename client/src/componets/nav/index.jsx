// import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = () => {

    // CSS
    const appBarStyle = {
        backgroundColor: "#2929bc"
    }
    const navButtonStyle = {
        color: "inherit",
        fontSize: "25px",
        marginLeft: "25px"
    }
    const toolBarStyle = {
        marginLeft: "15px"
    }
    return (
        <>
            <Box >
                <AppBar style={appBarStyle} >
                    <Toolbar style={toolBarStyle}>
                        <Button href="/" style={navButtonStyle}>home</Button>
                        <Button href="/about" style={navButtonStyle}>About</Button>
                        <Button href="/portfolio" style={navButtonStyle}>Portfolio</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}


export default NavBar