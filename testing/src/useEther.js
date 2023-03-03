import { useState, useEffect } from 'react';
import { eParse } from './eParse';

export default function useEthers(link) {
    const [object, setObject] = useState({});
    useEffect(() => {
        const getData = async () => {
            setObject(await eParse(link));
        }
        try {
            getData();
            if (object) {
                console.log("Obj initiated")
            }
        }
        catch (err) {
            console.log("error", err)
        }
    }, [link])
    return ([object.contract, object.contractS, object.provider, object.signer])
}