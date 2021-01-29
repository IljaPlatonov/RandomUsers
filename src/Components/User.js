import React from 'react';
import Collapsible from 'react-collapsible';
import './Collapsible.css';

const User = ({ username, name, email, picture, location }) => {
return(
    <div key={username}> 
    <img alt='ProfilePicture' src={picture}/> 
    <div> 
    <h3>{username}</h3>
    <p>{name}</p>
    <Collapsible trigger='More info'>
    <p>{email}</p>  
    <p>{location}</p>
    </Collapsible>
    </div>
    </div>
    );
}

export default User;