import React from 'react'
import Homepage01 from './Pages/Homepage01'
import Homepage02 from './Pages/Homepage02'
import { useLayout } from './LayoutContext';

function HomepageLayout() {

    const { useHomepage1 } = useLayout();

    return (
        <div>
            {useHomepage1 ? <Homepage01 /> : <Homepage02 />}
        </div>
    )
}

export default HomepageLayout
