import React from 'react';
import User from './User';
import '../Containers/App.css';

    const ProfileList = ({ profiles }) => {
        return (
            <div className='grid-container'>
            {
            profiles.map(profile => {
                const {username, name, picture, email, location} = profile;
                return <User
                username={username}
                name={name}
                picture={picture}
                email={email}
                location={location}/>
                })
            }
            </div>
        );
    }

export default ProfileList;