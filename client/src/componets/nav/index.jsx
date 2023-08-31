// import AppBar from '@mui/material/AppBar';
import { createSvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';




const NavBar = () => {
    // const AboutIcon = createSvgIcon(
    //     <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         size="large"
    //         strokeWidth={5.5}
    //         stroke="currentColor"
    //         className="h-6 w-6"
    //     >
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    //     </svg>,
    //     'Plus',
    // );
    // const PortfolioIcon = createSvgIcon()
    // const ResumeIcon = createSvgIcon()

    const actions = [
        // { icon: <ResumeIcon />, name: 'Resume' },
        // { icon: <PortfolioIcon />, name: 'Portfolio' },
        // { icon: <AboutIcon />, name: 'About' },
        { icon: <IconButton />, name: 'Resume' },
        { icon: <IconButton />, name: 'Portfolio' },
        { icon: <IconButton />, name: 'About' },
        { icon: <ShareIcon />, name: 'Share' },
    ];
    return (
        <>
            <Container>
                <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon />}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                        ))}
                    </SpeedDial>
                </Box>
            </Container>
        </>
    );
}


export default NavBar