import React from 'react';
import Myimage from '../../Assests/cvimg.jpg' ;
const ProfilePhoto = () => {
    return (
        <div>
     <img className="img" src={Myimage} alt ="user" width="200px" height="200px" style={{marginTop:"100px",borderRadius: "50%"}}/>  
        </div>
    );
}

export default ProfilePhoto;
