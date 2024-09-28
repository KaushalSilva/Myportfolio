import React from 'react'
import './socialmedia.css'

//Material Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function SocialMedia() {
    return (
        <div className='socialmedia'>
            <div className='socialmedia-icon' ><a href='https://www.linkedin.com/in/shashininn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank" ><LinkedInIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://github.com/Nathasha2001' target="_blank" ><GitHubIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://www.facebook.com/share/4mAXDfKJWx8F9wXk/?mibextid=LQQJ4d' target="_blank" ><FacebookIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://www.instagram.com/shashini_nathasha?igsh=ZG84YzhoaHBjdHdr&utm_source=qr' target="_blank" ><InstagramIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
        </div>
    )
}

export default SocialMedia
