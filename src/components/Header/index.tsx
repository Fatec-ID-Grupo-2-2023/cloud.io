import { Box, IconButton } from "@mui/material";
import AccountIcon from '../../assets/general/Account.svg';
import MenuIcon from '../../assets/general/Menu.svg';
import "./style.scss";

export default function Header() {
    return (
        <Box className="header">
            <IconButton color="primary" component="label">
                <img src={MenuIcon} alt="" />
            </IconButton>
            <IconButton color="primary" component="label">
                <img src={AccountIcon} alt="" />
            </IconButton>
        </Box>
    );
}