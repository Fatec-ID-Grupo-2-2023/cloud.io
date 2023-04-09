import { createContext } from 'react';
import { ICloudioFile, ICloudioStorage } from '../models/cloud';
import { IGoogleUser } from '../models/google';

export interface IGlobalContext {
    user: IGoogleUser;
    setUser: (user: IGoogleUser) => void;

    cloudFiles: ICloudioFile[];
    cloudStorage: ICloudioStorage;
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
});