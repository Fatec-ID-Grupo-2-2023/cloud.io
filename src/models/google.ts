import { GoogleLoginResponse } from "react-google-login";

export type IGoogleUser = GoogleLoginResponse | undefined;

export interface IGoogleAPIFiles {
    files: IGoogleFile[];
    nextPageToken: string;
}

export interface IGoogleFileOwner {
    displayName: string;
    photoLink: string;
    emailAddress: string;
}

export interface IGoogleFile {
    id: string;
    name: string;
    fileExtension?: string;
    trashed: boolean;
    modifiedTime: string;
    parents?: string[];
    webContentLink?: string;
    webViewLink: string;
    size?: number;
    shared: boolean;
    owners: IGoogleFileOwner[];
}

export interface IGoogleAPIAbout {
    storageQuota: IGoogleDriveStorage;
}

export interface IGoogleDriveStorage {
    usage: number;
    limit: number;
    usageInDrive: number;
    usageInDriveTrash: number;
}