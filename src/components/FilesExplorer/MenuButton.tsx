import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import DotsIcon from "../../assets/dots.svg";
import DownloadIcon from "../../assets/download.svg";
import RenameIcon from "../../assets/rename.svg";
import DeleteIcon from "../../assets/trash.svg";

export default function MenuButton() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function handleClose() {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                id="demo-positioned-button"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <img src={DotsIcon} />
            </IconButton>
            <Menu
                className="menu-dots"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem
                    className="menu-item"
                    onClick={() => {

                        handleClose();
                    }}
                >
                    <img src={DownloadIcon} />
                    Download
                </MenuItem>
                <MenuItem onClick={handleClose} className="menu-item">
                    <img src={RenameIcon} />
                    Rename
                </MenuItem>
                <MenuItem onClick={handleClose} className="menu-item">
                    <img src={DeleteIcon} />
                    Delete
                </MenuItem>
            </Menu>
        </>
    );
};