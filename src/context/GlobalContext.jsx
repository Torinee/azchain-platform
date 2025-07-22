import React, { createContext, useContext, useEffect, useState } from 'react'

import translation from '@/helpers/translations'

const GlobalContext = createContext()

const GlobalProvider = ({ children, language }) => {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth <= 992 : false
    )

    const t = (key) => {
        if (language === 'en') {
            return key
        } else {
            return translation[key] || key
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <GlobalContext.Provider value={{ t, isMobile, language }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
export default GlobalProvider
