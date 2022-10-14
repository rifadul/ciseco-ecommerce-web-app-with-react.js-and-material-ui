import React from 'react'
import NavDrawer from './NavDrawer';
import NavToolbar from './NavToolbar';


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <NavToolbar handleDrawerOpen={handleDrawerOpen} />
            <NavDrawer handleDrawerClose={handleDrawerClose} open={open} />
        </>
    )
}

export default Navbar