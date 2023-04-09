import { useCallback, useState } from "react";

export default function useToggle(value1: any = true, value2: any = false) {
    const [value, setValue] = useState(value1);

    const toggle = useCallback(() => {
        setValue((prevValue: any) => (prevValue === value1 ? value2 : value1));
    }, [value1, value2]);

    return [value, toggle] as const;
}