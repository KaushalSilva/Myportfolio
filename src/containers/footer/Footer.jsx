import React from 'react'
import { SocialMedia } from '../../components'
import './footer.css'

//Material Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <div className='footer section-padding'>
            <div className='contact-details'>
                <div className='contact-details-wrapper'>
                    <div className='address contact-details-child'>
                        <LocationOnIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>Gampaha,Sri Lanka</p>
                    </div>
                    <div className='email contact-details-child'>
                        <EmailIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>kaushalsilva15@gmail.com <br /> </p>
                    </div>
                    <div className='phone contact-details-child'>
                        <CallIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>+94 77 737 2445</p>
                    </div>
                </div>

            </div>
            <SocialMedia />
            <div className='footer-copyright'>
                <p>© 2024 Kaushal. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
