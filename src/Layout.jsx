import React from 'react'
import { useLayout } from './LayoutContext'
import Header from './Components/General/Header';
import Header2 from './components/General/Header2';
import Footer from './Components/General/Footer';
import Footer2 from './components/General/Footer2';
import Topbar from './Components/General/Topbar';

function Layout({ children }) {

    const { useHeader1, useFooter1 } = useLayout();

    return (
        <div>
            {useHeader1 ? <Topbar /> : ""}

            {useHeader1 ? <Header /> : <Header2 />}

            {/* Sayfa İçeriği */}
            <main>{children}</main>

            {/* Dinamik Footer */}
            {useFooter1 ? <Footer /> : <Footer2 />}

        </div>
    )
}

export default Layout
