import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import "./style.scss"
import { useTranslation } from "react-i18next";
import RecentIcon from '../../assets/general/Recents.svg'
import SettingsIcon from '../../assets/general/Settings.svg'
import LogoutIcon from '../../assets/general/Logout.svg'
import Logo from '../../assets/LogoAndName.svg'
import Cloud from '../../assets/general/Cloud.svg'
import ProgressBar from "../../components/ProgressBar";

interface IProps {
    open: boolean;
    onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function Sidebar({ open, onClose }: IProps) {

    const { t } = useTranslation();

    const items = [
        {
            text: t("Recents"),
            img: RecentIcon,
            onClick() { console.log("Recent") }
        },
        {
            text: t("Settings"),
            img: SettingsIcon,
            onClick() { console.log("Settings") }
        },
        {
            text: t("Logout"),
            img: LogoutIcon,
            onClick() { console.log("Logout") }
        }
    ]

    return (
        <Drawer id="sidebar" anchor={'left'} open={open} onClose={onClose}>
            <Box id="header">
                <img src={Logo}></img>
            </Box>
            <Box id="storage">
                <Box id="item">
                    <img src={Cloud}></img>
                    <Typography variant="body1">Storage</Typography>
                </Box>
                <ProgressBar usedCapacity={36.5} totalCapacity={100}></ProgressBar>
            </Box>
            <List id="content">
                {items.map(({ text, img, onClick }, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={onClick}>
                            <ListItemIcon>
                                <img src={img} alt={text} />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}