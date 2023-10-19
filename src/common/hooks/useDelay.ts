import {useEffect, useState} from 'react'

export const useDelay = <S>(value: S, interval = 3000): [delayName: S, setDelayNameVrapper: (value: S) => void] => {
    const [delayName, setDelayName] = useState(value);
    const [iconQueue, setIconQueue] = useState<S[]>([]);
    const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(null);

    const setDelayNameWrapper = (value: S) => {
        value && setIconQueue(prev => [...prev, value]);
    }

    useEffect(() => {
        if (iconQueue.length === 0 || currentTimeout) {
            return;
        }
        const nextValue = iconQueue.shift() as S;
        const delay = () => {
            const timeout = setTimeout(() => {
                setDelayName(nextValue);
                setIconQueue((prevState) => prevState);
                setCurrentTimeout(null);
            }, interval);

            setCurrentTimeout(timeout);
        }

        delay()
    }, [iconQueue.length, currentTimeout])

    return [delayName, setDelayNameWrapper]
}
