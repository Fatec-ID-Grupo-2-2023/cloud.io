import { Box, IconButton } from "@mui/material";
import AccountIcon from '../../assets/general/Account.svg';
import MenuIcon from '../../assets/general/Menu.svg';
import "./style.scss";
import Sidebar from "../../pages/Sidebar";
import { useState } from "react";
import toggleDrawer from "../../helpers/toggleSidebar";

export default function Header() {

    const [sidebar, setSidebar] = useState(false);

    return (
        <Box className="header">
            <Sidebar open={sidebar} onClose={toggleDrawer(() => setSidebar(false))} />
            <IconButton color="primary" component="label" onClick={toggleDrawer(() => setSidebar(true))}>
                <img src={MenuIcon} alt="" />
            </IconButton>
            <IconButton color="primary" component="label">
                <img src={AccountIcon} alt="" />
            </IconButton>
        </Box>
    );
}