import axios from "axios";
import buildTree from "../helpers/buildTree";
import { ICloudioFile } from "../models/cloud";
import { IGoogleAPIAbout, IGoogleAPIFiles, IGoogleFile } from "../models/google";
import getFileType from "../utils/getFileType";

const api = axios.create({
    baseURL: "https://www.googleapis.com/drive/v3",
});

export async function getGoogleDriveFiles(token: string, userEmail: string): Promise<ICloudioFile[]> {
    let rawFiles: IGoogleFile[] = [];
    let nextPageToken = '';

    do {
        const { data } = await api.get<IGoogleAPIFiles>("/files", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                fields: "files(id,name,fileExtension,trashed,modifiedTime,parents,webContentLink,webViewLink,size,shared,owners(displayName,photoLink,emailAddress)),nextPageToken",
                pageToken: nextPageToken,
            }
        });


        rawFiles = [...rawFiles, ...data.files];
        nextPageToken = data.nextPageToken;
    } while (nextPageToken);

    //remove trash and files that are not owned by the user
    const userFiles = rawFiles.filter(({ trashed, shared }) => !trashed && !shared);

    const files = userFiles.map<ICloudioFile>(({ id, name, fileExtension, size, webViewLink, webContentLink, shared, trashed, modifiedTime, parents }) => {
        return {
            id,
            name,
            extension: fileExtension,
            type: getType(webViewLink, fileExtension),
            size,
            webViewLink,
            downloadLink: webContentLink,
            shared,
            trashed,
            modifiedTime: new Date(modifiedTime),
            origin: "google-drive",
            parent: parents ? parents[0] : '',
            children: [],
        }
    });

    const ids = files.map(({ id }) => id);
    const rootFolder = files.filter(({ parent }) => !ids.includes(parent))[0].parent;

    const tree = buildTree(files, rootFolder);

    return tree;
}

export async function getGoogleDriveAbout(token: string) {
    const { data: { storageQuota } } = await api.get<IGoogleAPIAbout>("/about", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            fields: "storageQuota"
        }
    });

    return storageQuota;
}

function getType(webViewLink: string, fileExtension?: string) {
    const isFolder = webViewLink.includes("https://drive.google.com/drive/folders/");

    if (!fileExtension && !isFolder) {
        if (webViewLink.includes("https://docs.google.com/spreadsheets/")) {
            fileExtension = "xlsx";
        } else if (webViewLink.includes("https://docs.google.com/document/")) {
            fileExtension = "docx";
        } else if (webViewLink.includes("https://docs.google.com/presentation/")) {
            fileExtension = "pptx";
        }

    }

    const type = getFileType(fileExtension, isFolder);

    return type;
}