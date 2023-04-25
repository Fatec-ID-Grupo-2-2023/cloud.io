import { ICloudioFile } from "../models/cloud";

interface IFileMap {
    [key: string]: number;
}

export default function buildTree(files: ICloudioFile[], rootFolder: string) {
    let map: IFileMap = {};
    let tree: ICloudioFile[] = [];

    files.forEach((file, index) => {
        map[file.id] = index;
    });

    files.forEach((file) => {
        if (file.parent !== rootFolder) {
            files[map[file.parent]].children.push(file);
        } else {
            tree.push(file);
        }
    });

    return tree;
}