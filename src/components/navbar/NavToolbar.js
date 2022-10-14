import React from 'react'
import { AppBar, Toolbar, Button, styled, Box, Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.svg'
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';



const pages = ['Men', 'Women', 'Beauty', 'Sport', 'Explore'];

const Logo = styled('img')(() => ({
    // width: '5rem',
    // minWidth: '4rem'
}))
const NavToolbar = ({ handleDrawerOpen }) => {
    return (
        <AppBar position="static" className='navbar'>
            <Toolbar className='toolebar'>
                <Box style={{ flexGrow: 1 }}>
                    <Logo src={logo} alt="" />
                </Box>
                <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            // onClick={handleCloseNavMenu}
                            sx={{ m: 2, color: 'rgb(51 65 85)', display: 'block', fontSize: '15px', fontFamily: `'DM Sans', sans-serif`,fontWeight:500 }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="primary"
                    >
                        <SearchIcon sx={{ color: 'rgb(51 65 85)' }} />
                    </IconButton>
                    <IconButton size="large" aria-label="show 4 new mails" color="primary">
                        <Badge badgeContent={4} color="info" sx={{ color: 'rgb(51 65 85)' }}>
                            <PermIdentityOutlinedIcon sx={{ color: 'rgb(51 65 85)' }} />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="primary"
                    >
                        <Badge badgeContent={17} sx={{ color: 'rgb(51 65 85)' }} color='info'>
                            <ShoppingCartIcon sx={{ color: 'rgb(51 65 85)' }} />
                        </Badge>
                    </IconButton>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                    <IconButton
                        // color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        color="primary"
                        edge="start"
                    // sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon sx={{ color: 'rgb(51 65 85)' }} />
                    </IconButton>
                </Box>


            </Toolbar>

        </AppBar>
    )
}

export default NavToolbar