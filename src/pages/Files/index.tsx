import { Box } from '@mui/material';
import './style.scss';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import TextFieldIcon from '../../components/TextFieldIcon';
import SearchIcon from '../../assets/search.svg';
import { useTranslation } from 'react-i18next';
import FilesExplorer from '../../components/FilesExplorer';

export default function Files() {
    const { t } = useTranslation();

    const path = [
        { name: 'Home', link: '#' },
        { name: 'Catalog', link: '#' },
        { name: 'Accessories', link: '#' },
        { name: 'New Collection', link: '#' },
        { name: 'Belts', link: '#' },
    ]

    return (
        <Box id="files">
            <Header />
            <TextFieldIcon id="search-input" icon={SearchIcon} label={t('Search')} />
            <FilesExplorer id='file-explorer' path={path} layout />
            <NavBar />
        </Box>
    );
}