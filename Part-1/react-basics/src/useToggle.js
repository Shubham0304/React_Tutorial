import {useState } from 'react';

export const useToggle = (initialValue = false) => {

        const [state, setState] = useState(initialValue);

        const toggle = () => {

            setState(!state);
        }

        return [state, toggle];
    }