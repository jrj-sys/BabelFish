import React, { useState } from "react";
import './Profile.css'

function ProfilePage() {
    const [userName, setname] = useState('Your Name')
    const [email, setEmail] = useState('Your Email')

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    

    return (
       <div className="container">
         <div className="card">
            <div className='upper-container'>
                <div className="image-container">
                <img ref={uploadedImage} alt='' height='100px' width='100px'
                 onClick={() => imageUploader.current.click()}
                  />
                </div>
            </div>
            <div className='lower-container'>
                <h3>Username: { userName }</h3>
                <h3>Email: { email } </h3> 
                <input
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
                ref={imageUploader}
                multiple='false'
                style={{
                    display: 'none'
                }}
                />
                <button>Message</button>
            </div>
        </div>
       </div>
    )
}

export default ProfilePage