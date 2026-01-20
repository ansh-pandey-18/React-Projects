import { useState } from "react"
import ThemeContext from "./themeContext"


const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState("light")        //2. Context Provider se data do
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider