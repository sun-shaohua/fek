import useToggle from "./useToggle";
import React from 'react';

type Actions = {
    set: (value: Boolean) => void;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
}

const useBoole = (defaultValue: boolean = false): [boolean, Actions] => {
    const [state, {set, toggle}] = useToggle(false);
    const actions = React.useMemo(() => {
        const setTrue = () => set(true);
        const setFalse = () => set(false);
        return {
            setTrue, toggle, set, setFalse
        }

    }, [])
    return [state, actions]
}