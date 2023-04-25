import { useEffect, useMemo, useState } from "react";
import { ICloudioFile, ICloudioStorage } from "../models/cloud";
import { IGoogleDriveStorage, IGoogleUser } from "../models/google";
import { getGoogleDriveAbout, getGoogleDriveFiles } from "../services/fetchGoogleDriveData";
import { IGlobalContext } from "./GlobalContext";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { useTranslation } from "react-i18next";

export default function useGlobalContext(): IGlobalContext {
    const { i18n } = useTranslation();

    const [user, setUser] = useState<IGoogleUser>(undefined);

    const [language, setLanguage] = useLocalStorage("language", "en");

    const [googleDriveFiles, setGoogleDriveFiles] = useState<ICloudioFile[]>([]);
    const [googleDriveStorage, setGoogleDriveStorage] = useState<IGoogleDriveStorage>({
        usage: 0,
        limit: 0,
        usageInDrive: 0,
        usageInDriveTrash: 0
    });

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language])


    const cloudFiles = useMemo<ICloudioFile[]>(() => {
        return googleDriveFiles;
    }, [googleDriveFiles]);

    const cloudStorage = useMemo<ICloudioStorage>(() => {
        const usage = googleDriveStorage.usage;
        const limit = googleDriveStorage.limit;

        return {
            usage,
            limit,
            accounts: [
                {
                    id: "google-drive",
                    name: "Google Drive",
                    usage: googleDriveStorage.usage,
                    limit: googleDriveStorage.limit
                }
            ]
        };
    }, [googleDriveStorage]);


    useEffect(() => {
        if (user) {
            getGoogleDriveFiles(user.accessToken, user.profileObj.email).then((files) => {
                setGoogleDriveFiles(files);
            }).catch((error) => {
                console.error(error);
            });

            getGoogleDriveAbout(user.accessToken).then((response) => {
                const { usage, limit, usageInDrive, usageInDriveTrash } = response;

                setGoogleDriveStorage({
                    usage,
                    limit,
                    usageInDrive,
                    usageInDriveTrash
                });
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [user]);

    return useMemo(() => ({
        user,
        setUser,
        cloudFiles,
        cloudStorage,
        language,
        setLanguage
    }), [
        user,
        setUser,
        cloudFiles,
        cloudStorage,
        language,
        setLanguage
    ]);
}