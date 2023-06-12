import { useState, useEffect } from 'react';
import LogoLetter from '../../assets/images/logo-c.png';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['h', 'r', 'i', 's', 't', 'i', 'a', 'n']
    const jobArray = ['J', 'u', 'n', 'i', 'o', 'r', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r' ]

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4800)
    
        return () => clearTimeout(idTimeOut);
      }, [])


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i,</span>
                <br />
                <span className={`${letterClass}_13`}>I</span>
                <span className={`${letterClass}_14`}>'m</span>
                <img src={ LogoLetter } alt="developer" />
                <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
                </h1>
                <h2>Full Stack Developer // Rally Co-Driver </h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
            <Logo />
        </div>
    );
    }


export default Home;