import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Responsive } from './MainLayout.styled'
import GlobalProvider from '@/context/GlobalContext'

const MainLayout = ({ children, language }) => {
    return (
        <GlobalProvider language={language}>
            <Responsive>
                <Header />
                {children}
                <Footer />
            </Responsive>
        </GlobalProvider>
    )
}

export default MainLayout
