import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import "./style.scss"
import { useTranslation } from "react-i18next";
import RecentIcon from '../../assets/Recents.svg'
import SettingsIcon from '../../assets/Settings.svg'
import LogoutIcon from '../../assets/Logout.svg'
import Logo from '../../assets/LogoAndName.svg'
import Cloud from '../../assets/Cloud.svg'
import ProgressBar from "../../components/ProgressBar";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

interface IProps {
    open: boolean;
    onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function Sidebar({ open, onClose }: IProps) {
    const { t } = useTranslation();
    const { cloudStorage: { usage, limit } } = useContext(GlobalContext);

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
            <Box className="header">
                <img src={Logo} />
            </Box>
            <Box className="storage">
                <Box className="item">
                    <img src={Cloud} />
                    <Typography variant="body1">{t('Storage')}</Typography>
                </Box>
                <ProgressBar usedCapacity={usage} totalCapacity={limit} />
            </Box>
            <List className="content">
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