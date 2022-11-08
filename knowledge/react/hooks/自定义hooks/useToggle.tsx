import React from 'react';

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R)

{
    const [state, setState] = React.useState<D | R>(defaultValue);
    const actions = React.useMemo(() => {
        const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;
        const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
        const set = (v: D | R) => setState(v);
        const onRight = () => setState(defaultValue);
        const onLeft = () => setState(reverseValueOrigin);
        return {
            toggle, set, onRight, onLeft
        }
    }, [])
    return [state, actions]
}

export default useToggle;
