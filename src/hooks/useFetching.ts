import {useState} from "react";

export const useFetching = (callback: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] =useState('');

    const fetching = async (...args: [string | number]) => {
        try {
            setIsLoading(true);
            await callback(...args)
        } catch (e) {
            setError((e as Error).message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}
