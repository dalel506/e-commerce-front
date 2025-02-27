import React from 'react'
import Slider from '../Slider/Slider';
import FeatureCards from '../Slider/FeatureCards';
import ParallaxSection from '../Slider/ParallaxStyles';
import Testimonials from '../Slider/Testimonials';
import './Home.css';



const Home = () => {
 
  return (
    <div> 
  <Slider/>
  <FeatureCards/>
  <div className="container">
  <h1>MEILLEURES VENTES </h1>
  <div className='img-products'>
  <img className="img1" src="images\3548752215862_I000014611_HD_SKIN_BLUSH_&_GLOW_PALET-24_26.1G_Base.png" alt=""/>
   <img className="img2" src="images\3548752215060_I000012401_SUPER_BOOST_SKIN_TINT-24_30ML_01_Base.png" alt=""/>
<img className="img3" src="images\3548752210270_I000076452_ROUGE_ARTIST_FOR_EVER_STICK_SATIN-24_2.8G_452_Base.png" alt=""/>
  <img className="img4" src="images\027131043287-zoom.jpg" alt=""/>
  <img className="img5" src="images\c030681-chanel-allure-homme-edition-blanche-visuel_1.jpg" alt=""/>
  <img className="img6" src="images\8435415076838-zoom.jpg" alt=""/>
  <img className="img7" src="images\c065302-nuxe-prodigieux-lait-parfume-lait-corps-sublimateur-visuel_1.jpg" alt=""/>
</div>
</div>


  <ParallaxSection/>
  <Testimonials/>
    

    
   
    </div>
  )
}

export default Home
