import React from 'react'
import { AppBar, Toolbar, Button, styled, Box, Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.svg'
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';

// here define pages name {rf}
const pages = ['Men', 'Women', 'Beauty', 'Sport', 'Explore'];

// here define logo style {rf}
const Logo = styled('img')(() => ({
    // width: '8rem',
    // minWidth: '4rem'
}))

// here start NavBar conponent {rf}
const NavToolbar = ({ handleDrawerOpen }) => {
    return (
        // here start responsive navbar {rf}
        <AppBar position="static" sx={{
            backgroundColor: '#ffff',
            color: '#0000'
        }}>
            <Toolbar className='toolebar' sx={{
                width: '75%',
                margin: '0 auto',
                padding: 0
            }}>
                {/* here start navbar logo {rf} */}
                <Box style={{ flexGrow: 1 }}>
                    <Logo src={logo} alt="" sx={{
                        width: { xs: '100px', sm: '7rem', md: "8rem" }
                    }} />
                </Box>

                {/* here start navbar menu  {rf} */}
                <Box sx={{
                    flexGrow: 2,
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center'
                }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            // onClick={handleCloseNavMenu}
                            sx={{
                                m: 2,
                                color: 'rgb(51 65 85)',
                                display: 'block',
                                // fontSize:  {xs: '10px', md: '15px' },
                                fontSize: '15px',
                                fontFamily: `'DM Sans', sans-serif`,
                                fontWeight: 500,
                                backgroundColor: 'transparent',
                                '&:hover': {
                                    backgroundColor: "rgb(241 245 249)",
                                    borderRadius: '9999px'
                                }
                            }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                {/* here start navbar search icon, profile icon, and shopping card icon {rf}  */}
                <Box sx={{ display: { xs: 'flex', md: 'flex' }, flexGrow: { xs: 10, md: 1 }, justifyContent: { xs: 'flex-end', md: 'center' } }}>
                    {/* here search icon button {rf} */}
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="primary"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            '&:hover': {
                                backgroundColor: "rgb(241 245 249)",
                                borderRadius: '9999px'
                            }
                        }}
                    >
                        <SearchIcon sx={{ color: 'rgb(51 65 85)' }} />
                    </IconButton>
                    {/* here user profile icon button {rf} */}
                    <IconButton size="large" aria-label="show 4 new mails" color="primary" sx={{
                        '&:hover': {
                            backgroundColor: "rgb(241 245 249)",
                            borderRadius: '9999px'
                        }
                    }}>
                        <PermIdentityOutlinedIcon sx={{ color: 'rgb(51 65 85)' }} />
                    </IconButton>
                    {/* here shopping card icon button {rf} */}
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="primary"
                        sx={{
                            '&:hover': {
                                backgroundColor: "rgb(241 245 249)",
                                borderRadius: '9999px'
                            }
                        }}
                    >
                        <Badge badgeContent={17} sx={{ color: 'rgb(51 65 85)' }} color='info'>
                            <ShoppingCartIcon sx={{ color: 'rgb(51 65 85)' }} />
                        </Badge>
                    </IconButton>
                </Box>

                {/* here start mobile responsive drawer open hamburger {rf} */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        color="primary"
                        edge="start"
                        sx={{
                            margin: 0
                        }}
                    >
                        <MenuIcon sx={{ color: 'rgb(51 65 85)' }} />
                    </IconButton>
                </Box>
            </Toolbar>

        </AppBar>
    )
}

// here export the NavToolBar component
export default NavToolbar