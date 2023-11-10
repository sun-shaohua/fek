import React from 'react';

export default function useDisclosure(defaultValue: boolean = false) {
    const [state, setState] = React.useState<boolean>(defaultValue);
    const action = React.useMemo(() => {
        const onToggle = () => setState(!state);
        const set = (v: boolean) => setState(v);
        const onLift = () => setState(false);
        const onRight = () => setState(true);
        return {
            onToggle,
            set,
            onLift,
            onRight
        }
    }, [])
    return {
        state,
        action
    }

}