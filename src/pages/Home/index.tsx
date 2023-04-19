import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import DocIcon from "../../assets/empty-doc.svg";
import ImageIcon from "../../assets/image.svg";
import MusicIcon from "../../assets/music.svg";
import VideoIcon from "../../assets/video.svg";
import CategoryButton from "../../components/CategoryButton";
import CloudAccount from "../../components/CloudAccount";
import CloudAccountEmpty from "../../components/CloudAccountEmpty";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ProgressBar from "../../components/ProgressBar";
import { GlobalContext } from "../../contexts/GlobalContext";
import { convertSizeFile } from "../../utils/convertUnits";
import getCloudIcon from "./getCloudIcon";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { ICloudioOrigin, ICloudioType } from "../../models/cloud";

export default function Home() {
    const { user, cloudStorage: { usage, limit, accounts } } = useContext(GlobalContext);
    const { t } = useTranslation();
    const history = useHistory();

    const freeStorage = convertSizeFile(limit - usage);

    function handleClick(origin: ICloudioOrigin = "all", type: ICloudioType = "all") {
        history.push(`/files/${origin}/${type}`);
    }

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
                    usedCapacity={usage}
                    totalCapacity={limit}
                />
            </section>

            <section id="cloud-accounts" >
                {accounts.map(({ id, name, usage, limit }, index) => (
                    <CloudAccount key={index} icon={getCloudIcon(id)} title={name} usage={usage} limit={limit} onClick={() => handleClick(id)} />
                ))}
                <CloudAccountEmpty onClick={() => console.log('kk')} />
            </section>

            <section id="file-categories" >
                <CategoryButton icon={DocIcon} onClick={() => handleClick("all", "document")} />
                <CategoryButton icon={ImageIcon} onClick={() => handleClick("all", "image")} />
                <CategoryButton icon={VideoIcon} onClick={() => handleClick("all", "video")} />
                <CategoryButton icon={MusicIcon} onClick={() => handleClick("all", "audio")} />
            </section>

            <NavBar />
        </Box >
    );
}