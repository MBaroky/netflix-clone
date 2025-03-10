import { useCallback, useState } from "react";

export function useToggleVariant(defaultVariant: 'login' | 'register' = 'login') {

    const [variant, setVariant] = useState(defaultVariant);

    const toggleVariant = useCallback(() => {
        setVariant((prev) => prev === 'login' ? 'register' : 'login');
    }, []);

    return [variant, toggleVariant] as const;
}