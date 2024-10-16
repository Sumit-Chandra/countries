import { createContext,  useState } from "react";

 export const themeContext = createContext()

    import React from 'react'
    
    export default function ThemeProvider({children}) {
        const [isDark , setIsDark] = useState(JSON.parse(localStorage.getItem('IsDarkMode')))


      return (
        <themeContext.Provider value= {[isDark , setIsDark]}>
       {children}
       </themeContext.Provider>
       
      )
    }
    
