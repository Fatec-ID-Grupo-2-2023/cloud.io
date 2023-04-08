import { createContext } from 'react';
import { IGoogleAPIFiles, IGoogleDriveStorage, IGoogleUser } from '../models/google';
import { ICloudioFile, ICloudioStorage } from '../models/cloud';

export interface IGlobalContext {
    user: IGoogleUser;
    setUser: (user: IGoogleUser) => void;

    cloudFiles: ICloudioFile[];
    cloudStorage: ICloudioStorage;

    googleDriveFiles: IGoogleAPIFiles;
    googleDriveStorage: IGoogleDriveStorage;
    setGoogleDriveFiles: (googleDriveFiles: IGoogleAPIFiles) => void;
    setGoogleDriveStorage: (googleDriveStorage: IGoogleDriveStorage) => void;
}

export const GlobalContext = createContext<IGlobalContext>({
    user: undefined,
    setUser: (user: IGoogleUser) => { },

    cloudFiles: [],
    cloudStorage: {
        usage: 0,
        limit: 0
    },

    googleDriveFiles: {
        files: [],
        nextPageToken: ''
    },
    googleDriveStorage: {
        usage: 0,
        limit: 0,
        usageInDrive: 0,
        usageInDriveTrash: 0
    },
    setGoogleDriveFiles: (googleDriveFiles: IGoogleAPIFiles) => { },
    setGoogleDriveStorage: (googleDriveStorage: IGoogleDriveStorage) => { }
});