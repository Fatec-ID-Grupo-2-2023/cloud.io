import { AppBar, Box, IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon, SvgIcon, Toolbar } from '@mui/material';
import './style.scss';
import HomeIcon from '../../assets/home.svg';
import HomeActiveIcon from '../../assets/home-active.svg';
import FolderIcon from '../../assets/folder.svg';
import FolderActiveIcon from '../../assets/folder-active.svg';
import UploadFileIcon from '../../assets/upload-file.svg';
import CreateFileIcon from '../../assets/create-file.svg';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
    const history = useHistory();

    const actions = [
        {
            name: '1',
            icon: <img src={UploadFileIcon} alt={''} className='speed-dial-item' />
        },
        {
            name: '2',
            icon: <img src={CreateFileIcon} alt={''} className='speed-dial-item' />
        }
    ]

    return (
        <AppBar id='navbar'>
            <Toolbar>
                <IconButton
                    onClick={() => history.push('/')}
                >
                    {history.location.pathname === '/' ? (
                        <img src={HomeActiveIcon} alt={''} />
                    ) : (
                        <img src={HomeIcon} alt={''} />
                    )}
                </IconButton>
                <SpeedDial
                    ariaLabel='SpeedDial example'
                    className='speed-dial'
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                    onClick={() => history.push('/files')}
                >
                    {history.location.pathname.startsWith('/files') ? (
                        <img src={FolderActiveIcon} alt={''} />
                    ) : (
                        <img src={FolderIcon} alt={''} />
                    )}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}