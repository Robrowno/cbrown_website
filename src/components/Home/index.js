import Logo from '../../assets/images/logo-c.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br /> I'm
                <img src={ Logo } alt="developer" />
                hristian
                <br />
                Junior Software Developer
                </h1>
                <h2>Full Stack Developer // Rally Co-Driver </h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
        </div>
    );
    }


export default Home;