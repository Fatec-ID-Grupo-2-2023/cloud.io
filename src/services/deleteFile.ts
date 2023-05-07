import { ICloudioOrigin } from "../models/cloud";

export default function deleteFile(origin: ICloudioOrigin, id: string) {
    switch (origin) {
        case "google-drive":
            deleteGoogleDriveFile(id);
            break;

        default:
            throw new Error("Origin not supported");
    }
}