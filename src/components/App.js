import React from 'react'
import LinkCard from './LinkCard'
import UserInfo from './UserInfo'
import Footer from './Footer'
import './App.scss'

// import data file
import data from '../data'

const App = () => {
    return (
        <>
            <div className="app">
                <UserInfo user={data.user} />
                <LinkCard links={data.links} />
            </div>
                <Footer />
        </>
    )
}

export default App