
import Footer from '../components/footer/Footer'
import { NavBar } from '../components/header/Header'
import HeaderSingle from '../components/single/header/HeaderSingle'
import '../components/single/header/header-single.css';
import '../components/single/body/single-body.css';
import SingleBody from '../components/single/body/SingleBody';

const SingleMovie = () => {
  
  return (
    <div>
        <NavBar />
        <HeaderSingle />
        <div className='spacer' ></div>
        <SingleBody />
        <Footer/>
    </div>
  )
}

export default SingleMovie