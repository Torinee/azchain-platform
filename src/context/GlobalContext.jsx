import React, { createContext, useContext, useEffect, useState } from 'react'

import translation from '@/helpers/translations'

const GlobalContext = createContext()

const GlobalProvider = ({ children, language }) => {
  const [isMobile, setIsMobile] = useState(undefined)

  const t = (key) => {
    if (language === 'en') {
      return key
    } else {
      return translation[key] || key
    }
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992)
    handleResize() // set lần đầu khi client mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Nếu isMobile chưa xác định, chỉ render null để tránh hydration mismatch
  if (isMobile === undefined) return null

  return (
    <GlobalContext.Provider value={{ t, isMobile, language }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
export default GlobalProvider
