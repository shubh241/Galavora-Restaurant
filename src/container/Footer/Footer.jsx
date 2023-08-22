import React from 'react';
import{FiFacebook,FiTwitter,FiInstagram} from "react-icons/fi"
import './Footer.css';
import { FooterOverlay,Newsletter } from '../../components';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
       <h1 className='app__footer-headtext'>Contact Us</h1>
    <p className='p__opensans'>Galovara Restaurant</p>
    <p className='p__opensans'>123 Savory Street</p>
    <p className='p__opensans'>Gastronomia Plaza</p>
    <p className='p__opensans'>Cityville, Culinary Haven</p>
    <p className='p__opensans'>Deliciousland, Dineville - 12345</p>
       <p className='p__opensans'>9142443324</p>
       <p className='p__opensans'>9032142144</p>

      </div>
      <div className='app__footer-links_logo'>
      <img src={images.gericht} alt='footer logo'></img>
       <p className='p__opensans'>The best way to find yourself</p>
       <img  src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:15}}></img>
       <div className='app__footer-links_icons'>
        <FiFacebook></FiFacebook>
        <FiTwitter></FiTwitter>
        <FiInstagram></FiInstagram>
       </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
       <p className='p__opensans'>Mon-Fri: </p>
       <p className='p__opensans'>8am-6pm</p>
       <p className='p__opensans'>Sat-Sun: </p>
       <p className='p__opensans'>9am-7pm</p>

      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Galavora .All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
