import { createContext } from 'react';

const ChangeUIContext = createContext({
    bgColor: 'light',
    color: 'black',
});

// du lieu mac dinh can share

export default ChangeUIContext;