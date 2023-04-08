import { Avatar, Box, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import AccountIcon from '../../assets/Account.svg';
import MenuIcon from '../../assets/Menu.svg';
import { GlobalContext } from "../../contexts/GlobalContext";
import toggleDrawer from "../../helpers/toggleSidebar";
import Sidebar from "../Sidebar";
import "./style.scss";

export default function Header() {
    const [sidebar, setSidebar] = useState(false);
    const { user } = useContext(GlobalContext);

    return (
        <Box id="header">
            <Sidebar open={sidebar} onClose={toggleDrawer(() => setSidebar(false))} />
            <IconButton color="primary" component="label" onClick={toggleDrawer(() => setSidebar(true))}>
                <img src={MenuIcon} alt="" />
            </IconButton>
            <IconButton color="primary" component="label" onClick={() => console.log(user)}>
                <Avatar
                    className="avatar"
                    src={user?.profileObj.imageUrl ?? AccountIcon}
                    alt={user?.profileObj.givenName ?? "User"}
                    imgProps={{
                        referrerPolicy: "no-referrer"
                    }}
                />
            </IconButton>
        </Box>
    );
}