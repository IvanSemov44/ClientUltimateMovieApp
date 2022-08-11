import React from "react";
import { createContext, useState } from "react";

export const OffcanvasContext = createContext();

const OffcanvasProvider = ({ children }) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);


    return (
        <OffcanvasContext.Provider value={{ showOffcanvas, setShowOffcanvas }}>
            {children}
        </OffcanvasContext.Provider>

    );
}

export default OffcanvasProvider;