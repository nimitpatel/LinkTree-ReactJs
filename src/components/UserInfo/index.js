import React from 'react'
import './UserInfo.scss'

const index = ({ user }) => {
    return (
        <>
            <div className="user-info">
                <div className="user">
                    <div className="profile">
                        <img src={user.profile} alt="Profile Picture" />
                    </div>
                    <div className="info">
                        <h1>{user.name}</h1>
                        <div className="social">
                            <a href={user.social.github}><span className="iconify" data-inline="false" data-icon="ant-design:github-filled" style={{ color: "#b767b3", fontSize: "30px" }}></span></a>
                            <a href={user.social.instagram}><span className="iconify" data-inline="false" data-icon="ant-design:instagram-outlined" style={{ color: "#b767b3", fontSize: "30px" }}></span></a>
                            <a href={user.social.dribbble}><span className="iconify" data-inline="false" data-icon="ant-design:dribbble-outlined" style={{ color: "#b767b3", fontSize: "30px" }}></span></a>
                            <a href={user.social.codepen}><span className="iconify" data-inline="false" data-icon="ant-design:codepen-outlined" style={{ color: "#b767b3", fontSize: "30px" }}></span></a>
                            <a href={user.social.linkedin}><span className="iconify" data-inline="false" data-icon="ant-design:linkedin-filled" style={{ color: "#b767b3", fontSize: "30px" }}></span></a>
                            <a href={user.social.twitter}><span className="iconify" data-inline="false" data-icon="ant-design:twitter-outlined" style={{ color: "#b767b3", fontSize: "30px" }}></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index