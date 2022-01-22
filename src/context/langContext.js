import React, { createContext, useState} from "react"

export const Context = createContext()

const ContextProvider = props => {
    const [lang, setlang] = useState('EN')

    const toggleLang = changeLang => {
        setlang(changeLang)
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider