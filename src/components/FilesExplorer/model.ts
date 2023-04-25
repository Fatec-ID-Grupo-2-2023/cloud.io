import { ICloudioFile } from "../../models/cloud";

export interface IPath {
    id: string;
    name: string;
    childrens: ICloudioFile[];
}

export type ILayout = 'grid' | 'list';