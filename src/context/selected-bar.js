import { createContext, useState } from "react";

export const selectedPageContext = createContext();

export const SelectedPageProvider = ({children}) => {
    const [page, setPage] = useState('');

    return ( 
        <selectedPageContext.Provider value={{page, setPage}}>
            {children}
        </selectedPageContext.Provider>
    )
};