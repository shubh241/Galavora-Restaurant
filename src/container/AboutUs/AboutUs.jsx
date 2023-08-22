import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
   <div className='app__aboutus-overlay flex__center'>
  <img src={images.G} alt='g letter'></img>

   </div>
   <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_about'>
    <h1 className='headtext__cormorant aboutustext'>About Us</h1>
    <img src={images.spoon} alt='about_spoon' className='spoon__img'></img>
    <p className='p__opensans '>We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up for a scrumptious dinner utilizing the best and freshest ingredients.</p>
    <button type='button' className='custom__button'>Know More </button>
   </div>
   <div className='app__aboutus-content_knife flex__center'>
    <img src={images.knife} alt="knife" />
   </div>
    <div className='app__aboutus-content_history'>
    <h1 className='headtext__cormorant '>History</h1>
    <img src={images.spoon} alt='about_spoon' className='spoon__img'></img>
    <p className='p__opensans ptext'>Galavora emerged in 2006 as a culinary, blending tradition with innovation. With its fusion of flavors, sustainable practices, and global expansion, Galovara has become a revered name, epitomizing culinary excellence and cultural celebration.</p>
    <button type='button' className='custom__button'>Know More </button>
   </div>
  </div>
  </div>
  
);

export default AboutUs;
