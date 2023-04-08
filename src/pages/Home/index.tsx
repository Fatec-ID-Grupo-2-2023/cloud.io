import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import CloudAccount from "../../components/CloudAccount";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import { GlobalContext } from "../../contexts/GlobalContext";
import "./style.scss";

import DropBoxIcon from "../../assets/dropbox.svg";
import GoogleDriveIcon from "../../assets/google-drive.svg";
import DocIcon from "../../assets/empty-doc.svg";
import ImageIcon from "../../assets/image.svg";
import VideoIcon from "../../assets/video.svg";
import MusicIcon from "../../assets/music.svg";
import OneDriveIcon from "../../assets/one-drive.svg";
import CategoryButton from "../../components/CategoryButton";
import CloudAccountEmpty from "../../components/CloudAccountEmpty";
import NavBar from "../../components/NavBar";

export default function Home() {
    const { user, cloudStorage, googleDriveStorage } = useContext(GlobalContext);
    const { t } = useTranslation();

    const freeStorage = (cloudStorage.limit - cloudStorage.usage).toFixed(2);

    return (
        <Box id="home">
            <Header />

            <section id="cloud-capacity" >
                <Typography variant="h1" >
                    {t('HiUser', { user: user?.profileObj.givenName })}
                </Typography>
                <Typography variant="h2"
                    dangerouslySetInnerHTML={{
                        __html: t('FreeStorageMsg', { freeStorage })
                    }}
                />
                <ProgressBar
                    usedCapacity={cloudStorage.usage}
                    totalCapacity={cloudStorage.limit}
                />
            </section>

            <section id="cloud-accounts" >
                <CloudAccount icon={GoogleDriveIcon} title="Google Drive" limit={googleDriveStorage.limit} usage={googleDriveStorage.usage} />
                <CloudAccount icon={OneDriveIcon} title="One Drive" limit={googleDriveStorage.limit} usage={googleDriveStorage.usage} />
                <CloudAccount icon={DropBoxIcon} title="Drop Box" limit={googleDriveStorage.limit} usage={googleDriveStorage.usage} />
                <CloudAccountEmpty onClick={() => console.log('kk')} />
            </section>

            <section id="file-categories" >
                <CategoryButton icon={DocIcon} />
                <CategoryButton icon={ImageIcon} />
                <CategoryButton icon={VideoIcon} />
                <CategoryButton icon={MusicIcon} />
            </section>

            <NavBar />
        </Box >
    );
}