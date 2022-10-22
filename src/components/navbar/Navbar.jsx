import React from 'react'
import NavDrawer from './NavDrawer';
import NavToolbar from './NavToolbar';


const Navbar = () => {
    // here define states
    const [open, setOpen] = React.useState(false);

    // here define drawer open functionality {rf}
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    // here define drawer close functionality {rf}
    const handleDrawerClose = () => {
        setOpen(false);
    };
    // here return NavBar conponent
    return (
        <>
            {/* here import NavToolBar comopent {rf} */}
            <NavToolbar handleDrawerOpen={handleDrawerOpen} />
            {/* here import NavDrawer comopent {rf} */}
            <NavDrawer handleDrawerClose={handleDrawerClose} open={open} />
        </>
    )
}

// here export the component
export default Navbar