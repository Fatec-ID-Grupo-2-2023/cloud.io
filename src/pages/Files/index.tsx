import { Box } from '@mui/material';
import './style.scss';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import TextFieldIcon from '../../components/TextFieldIcon';
import SearchIcon from '../../assets/search.svg';
import { useTranslation } from 'react-i18next';
import FilesExplorer from '../../components/FilesExplorer';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Files() {
    const { t } = useTranslation();
    const { cloudFiles } = useContext(GlobalContext);

    const filteredFiles = cloudFiles;

    return (
        <Box id="files">
            <Header />
            <TextFieldIcon
                id="search-input"
                icon={SearchIcon}
                label={t('Search')}
            />
            <FilesExplorer
                id='file-explorer'
                title={t('Files')}
                files={filteredFiles}
                layout
            />
            <NavBar />
        </Box>
    );
}