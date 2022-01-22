import React, { createContext, useState} from "react"

export const Context = createContext()

const ContextProvider = props => {
    const [lang, setlang] = useState('EN')

    return (
        <Context.Provider value={{lang}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider