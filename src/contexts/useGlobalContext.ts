import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { IGoogleAPIAbout, IGoogleAPIFiles, IGoogleDriveStorage, IGoogleUser } from "../models/google";
import { convertBytesToGB } from "../utils/convertUnits";
import { IGlobalContext } from "./GlobalContext";

export default function useGlobalContext(): IGlobalContext {
    const [user, setUser] = useState<IGoogleUser>(undefined);

    const [googleDriveFiles, setGoogleDriveFiles] = useState<IGoogleAPIFiles>({
        files: [],
        nextPageToken: ''
    });
    const [googleDriveStorage, setGoogleDriveStorage] = useState<IGoogleDriveStorage>({
        usage: 0,
        limit: 0,
        usageInDrive: 0,
        usageInDriveTrash: 0
    });


    const cloudFiles = useMemo(() => {
        return googleDriveFiles.files;
    }, [googleDriveFiles]);

    const cloudStorage = useMemo(() => {
        return {
            usage: googleDriveStorage.usage,
            limit: googleDriveStorage.limit
        };
    }, [googleDriveStorage]);


    useEffect(() => {
        if (user) {
            axios.get<IGoogleAPIFiles>('https://www.googleapis.com/drive/v3/files', {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                },
                params: {
                    fields: 'files(id,kind,name,fileExtension,trashed,modifiedTime,parents,webContentLink,webViewLink,size,shared,owners(displayName,photoLink,emailAddress))',
                }
            }).then(({ data }) => {
                const { files, nextPageToken } = data;

                setGoogleDriveFiles({
                    files,
                    nextPageToken
                });
            }).catch((error) => {
                console.error(error);
            });

            axios.get<IGoogleAPIAbout>('https://www.googleapis.com/drive/v3/about', {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                },
                params: {
                    fields: 'storageQuota'
                }
            }).then(({ data }) => {
                const usage = convertBytesToGB(data.storageQuota.usage);
                const limit = convertBytesToGB(data.storageQuota.limit);
                const usageInDrive = convertBytesToGB(data.storageQuota.usageInDrive);
                const usageInDriveTrash = convertBytesToGB(data.storageQuota.usageInDriveTrash);

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
        googleDriveFiles,
        setGoogleDriveFiles,
        googleDriveStorage,
        setGoogleDriveStorage
    }), [
        user,
        setUser,
        cloudFiles,
        cloudStorage,
        googleDriveFiles,
        setGoogleDriveFiles,
        googleDriveStorage,
        setGoogleDriveStorage
    ]);
}