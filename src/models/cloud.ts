export interface ICloudioStorage {
    usage: number;
    limit: number;
    accounts: ICloudioAccount[];
}

export interface ICloudioFile {
    id: string;
    name: string;
    extension?: string;
    trashed: boolean;
    modifiedTime: Date;
    downloadLink?: string;
    webViewLink: string;
    size?: number;
    shared: boolean;
    origin: ICloudioType;
    parent: string;
    children: ICloudioFile[];
}

interface ICloudioAccount {
    id: ICloudioType;
    name: string;
    usage: number;
    limit: number;
}

export type ICloudioType = "google-drive" | "dropbox" | "onedrive";