import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);
    const callback = (newMessage: number) => {
        setMessage(newMessage);
    };
    useEffect(() => {
        subscribe(props.sourceId, callback);
        return () => {
            setMessage(-1);
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
