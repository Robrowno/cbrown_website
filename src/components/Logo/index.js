import './index.scss'
import LogoC from '../../assets/images/logo-c-svg.svg'
import { useState, useEffect } from 'react'

const Logo = () => {

    const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);
  }, []);

  return (
    <div className={`logo-container ${loaded ? 'fade-in' : ''}`}>
      <img className={`solid-logo ${loaded ? 'fade-in' : ''}`} src={LogoC} alt='logo of the letter C' />
    </div>
  );
};

export default Logo;