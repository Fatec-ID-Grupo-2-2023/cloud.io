import { ICloudioFile, ICloudioOrigin, ICloudioType } from "../models/cloud";

export function filterFiles(files: ICloudioFile[], byName?: string, byOrigin?: ICloudioOrigin, byType?: ICloudioType) {
    let filteredFiles = files;

    if (byName) {
        filteredFiles = filterByName(filteredFiles, byName);
    }

    if (byOrigin && byOrigin !== 'all') {
        filteredFiles = filterTree(filteredFiles, byOrigin, 'origin');
    }

    if (byType && byType !== 'all') {
        filteredFiles = filterTree(filteredFiles, byType, 'type');
    }

    return filteredFiles;
}

function filterByName(files: ICloudioFile[], _name: string) {
    const filteredFiles = files.filter(({ name }) => name.toLowerCase().includes(_name.toLowerCase()));

    return filteredFiles;
}

function filterTree(files: ICloudioFile[], value: string, field: string) {
    let filteredFiles: ICloudioFile[] = [];

    files.forEach((filter: any) => {
        if (filter.children.length) {
            filteredFiles = [...filteredFiles, ...filterTree(filter.children, value, field)];
        } else {
            if (filter[field] === value) {
                filteredFiles.push(filter);
            }
        }
    });

    return filteredFiles;
}

export function filterRecents(files: ICloudioFile[], quantity: number = 5) {
    const filteredFiles = files.sort((a, b) => {
        return b.modifiedTime.getTime() - a.modifiedTime.getTime();
    }).slice(0, quantity);

    return filteredFiles;
}