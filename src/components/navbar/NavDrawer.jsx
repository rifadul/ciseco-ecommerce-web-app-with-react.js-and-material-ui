import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from '@mui/icons-material/Close';

// here define the drawer width {rf}
const drawerWidth = '100%';

// here drawe header style function {rf}
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
}));

// here start NavDrawer component {rf}
const NavDrawer = ({ handleDrawerClose, open }) => {
    const theme = useTheme();
    return (
        // here start drawer {rf}
        <Drawer
            sx={{
                width: drawerWidth,
                display: { xs: 'block', md: 'none' },
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box"
                }
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            {/* here start drawer header (close button) {rf} */}
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                        // here drawer close button {rf}
                        <CloseIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {/* here inside drawer pages list part-1 {rf} */}
                {['Men', 'Women', 'Beauty', 'Sport', 'Explore'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {/* here inside drawer pages list part-2 {rf} */}
                {["Login", "Sign up"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        {/* navigation button {rf} */}
                        <ListItemButton>
                            {/* here page icon {rf} */}
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            {/* here inside primary need to define page name {rf} */}
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

// here export the component {rf}
export default NavDrawer