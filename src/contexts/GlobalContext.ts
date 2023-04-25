import { createContext } from 'react';
import { ICloudioFile, ICloudioStorage } from '../models/cloud';
import { IGoogleUser } from '../models/google';
import { ILanguage } from '../models/general';

export interface IGlobalContext {
    user: IGoogleUser;
    setUser: (user: IGoogleUser) => void;

    cloudFiles: ICloudioFile[];
    cloudStorage: ICloudioStorage;

    language: ILanguage;
    setLanguage: (language: ILanguage) => void;
}

export const GlobalContext = createContext<IGlobalContext>({
    user: undefined,
    setUser: (user: IGoogleUser) => { },

    cloudFiles: [],
    cloudStorage: {
        usage: 0,
        limit: 0,
        accounts: []
    },

    language: 'en',
    setLanguage: (language: ILanguage) => { }
});