import style from './about.module.css';

import Navbar from '../navbar/navbar.jsx';

import AboutManifucture from './aboutManufacture.jsx';
import AboutProcces from './aboutProcces.jsx';
import AboutImageContainer from './aboutImageContainer.jsx';
import DeliverContainer from './deliverContainer.jsx';
import Footer from '../footer/futer.jsx';
import AboutContainer from './aboutContainer.jsx';





const About = () => {
  return (
    <div>
      <Navbar />
<AboutContainer/>

   <AboutManifucture/>   

<AboutProcces/>

<AboutImageContainer/>

<DeliverContainer/>

<Footer/>
















       
      </div>
    
  );
};

export default About;