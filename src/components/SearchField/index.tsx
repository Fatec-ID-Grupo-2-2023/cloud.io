import TextFieldIcon from "../TextFieldIcon";
import SearchIcon from '../../assets/search.svg';
import { useCallback } from "react";
import { debounce } from 'lodash';

interface IProps {
    id?: string;
    placeholder?: string | null;
    onSearch: (value: string) => void;
}

export default function SearchField({ id, placeholder, onSearch }: IProps) {
    const delayedQuery = useCallback(
        debounce((q) => onSearch(q), 500),
        []
    );

    return (
        <TextFieldIcon
            id={id}
            icon={SearchIcon}
            label={placeholder}
            onChange={(e) => delayedQuery(e.target.value)}
        />
    );
}