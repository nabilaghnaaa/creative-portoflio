import { createContext, useContext, useState } from "react";

const DeskContext = createContext(null);

export function DeskProvider({ children }) {
    const [activeObject, setActiveObject] = useState(null);

    const openObject = (objectName) => {
        setActiveObject(objectName);
    };

    const closeObject = () => {
        setActiveObject(null);
    };

    return (
        <DeskContext.Provider
            value={{
                activeObject,
                openObject,
                closeObject,
            }}
        >
            {children}
        </DeskContext.Provider>
    );
}

export function useDesk() {
    return useContext(DeskContext);
}