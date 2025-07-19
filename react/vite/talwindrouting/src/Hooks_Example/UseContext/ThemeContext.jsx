import React, { children, createContext, useCallback, useContext, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import '../../App.css'
// import '../../ '

const ThemeSet = createContext()

const ThemeText = ({children}) => {
    const [theme,setTheme] = useState("light")

    const toggletheme = () => {
        setTheme((set) => set === "light" ? "dark" : "light")
    }

    return(
        <ThemeSet.Provider value={{theme,toggletheme}}>
            {children}
        </ThemeSet.Provider>
    )
}
const Themeshow = () => {
    const {theme,toggletheme} = useContext(ThemeSet)

    return(
        <>
            <div className={theme === "light" ? 'lighttheme' : 'darktheme'}>
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} onClick={toggletheme}></FontAwesomeIcon>
                <p>{theme}</p>
            </div>
        </>
    )
}

const ThemeContext = () => {
  return (
    <>
        <ThemeText>
            <Themeshow />
        </ThemeText>
    </>
  )
}

export default ThemeContext
