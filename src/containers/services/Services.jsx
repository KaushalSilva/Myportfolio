import React from 'react'
import { Service } from '../../components'
import './services.css'

//Icons

import { Brackets,DigitalMarketing, Sketch, AppDev } from '../../assets'
function Services() {
    return (
        <div className='services section-margin' id='services'>
        <h1 className='gradient-text'>Services Offered</h1>
        <div className='services-container'>
        <Service icon={AppDev} title='Quality Assurance' text='I ensure software reliability through rigorous testing, delivering exceptional user experiences that drive success.' />
        <Service icon={Brackets} title='Web Development' text='I use various web technologies to develop attractive websites which converts visitors to customers.' />
           <Service icon={AppDev} title='App Development' text='I develop responsive, stunning web-apps using modern technologies like React.js.'  />
        </div>
        
        </div>
    )
}

export default Services
