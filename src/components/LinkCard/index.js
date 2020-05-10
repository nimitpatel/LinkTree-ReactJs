import React from 'react'
import './LinkCard.scss'

const index = ({ links }) => {
    const link = links.map((link, index) => {
        return (
            <a href={link.url} key={index} className="link">
                <p>{link.source}</p>
                <h3>{link.title}</h3>
            </a>
        )
    })
    return (
        <>
            <div className="links">
                {link}
            </div>
        </>
    )
}

export default index