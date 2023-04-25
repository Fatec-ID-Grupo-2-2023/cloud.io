import { Avatar, Box, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '../../assets/close.svg';
import './style.scss'
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import AccountIcon from '../../assets/Account.svg';
import LogoutIcon from '../../assets/Logout.svg'
import LogoutButton from '../LogoutButton';

interface IProps {
    open: boolean;
    onClose: () => void;
}

export default function ProfileBox({ open, onClose }: IProps) {

    const { user } = useContext(GlobalContext);

    return (
        <Box>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box id="profile-box">
                    <IconButton id="close-button" color="primary" component="label" onClick={onClose}>
                        <img src={CloseIcon} alt="" />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <span id="cloud">Cloud</span><span id="dot">.</span><span id="io">io</span>
                    </Typography>
                    <Box id="modal-modal-description">
                        <Avatar
                            className="avatar"
                            src={user?.profileObj.imageUrl ?? AccountIcon}
                            alt={user?.profileObj.givenName ?? "User"}
                            imgProps={{
                                referrerPolicy: "no-referrer"
                            }}
                        />
                        <Box id="user-info">
                            <Typography id="user-name">{user?.profileObj.name}</Typography>
                            <Typography id="user-email">{user?.profileObj.email}</Typography>
                        </Box>
                    </Box>
                    <Box id="modal-footer">
                        <IconButton id="logout-button">
                            <LogoutButton />
                            <img src={LogoutIcon} alt="" />
                            <Typography id="logout-text">Logout</Typography>
                        </IconButton>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}