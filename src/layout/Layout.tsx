import React from 'react'
import Header from '../components/Header/Header'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
        <Header />
            {children}
        </>
    )
}

export default Layout