import { useState } from 'react';


const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {
        
        const iteam = window.localStorage.getItem(key);

        return iteam ? JSON.parse(iteam) : initialValue;
    })

    const putValue = (value) => {
        setValue(value);

        window.localStorage.setItem(key, JSON.stringify(value));
    }


    return [value, putValue];

}

export default useLocalStorage