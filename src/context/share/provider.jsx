import ChangeUIContext from "./context";
import { useState } from "react";

const Provider = ({ children }) => {
    // Dinh nghia cac state va cac action cap nhat state de share global
    const [bgColor, setBgColor] = useState('light');
    const [color, setColor] = useState('black');

    // viet su kien nguoi dung bam switch chuyen che do 
    const onChange = (checked) => {
        if (checked) {
            setBgColor('light')
            setColor('black')
        } else {
            setBgColor('dark')
            setColor('white')
        }
    };
    return (
        <>
            <ChangeUIContext.Provider value={{ bgColor, color, onChange }}>
                {children}
            </ChangeUIContext.Provider>
        </>
    )
}

export default Provider;