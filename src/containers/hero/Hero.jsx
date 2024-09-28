import React from 'react'
import './hero.css'

//Assets
import hero_img from '../../assets/hero_img.png'
import hero_image from '../../assets/hero_image.png'

function Hero() {
    return (
        <>
        <div className='hero section-padding' id='home'>
            <div className='hero-content'>
                <h1 className='gradient-text'>I’m Kaushal Silva</h1>
                <h2>QA Engineer</h2>
<p>I ensure top-notch software quality through rigorous testing, delivering seamless user experiences that drive business growth.</p>
                <a href='#works' className='explore-btn'>Explore my works</a>

            </div>
            <div className='hero-image'>
                {/* <img src={hero_img} alt='Hero' /> */}
                <img src={hero_image} alt='Hero' />
            </div>
        </div>
        <div className='hero-scroll-animation'>
              <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </div>
        </>
    )
}

export default Hero
