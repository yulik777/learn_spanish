import img from './assets/images/error.png';
import  './assets/styles/error.scss';


const Error = () => {
    return (
        <div className='error'>
        <img  src={img} alt="Error"/>
        </div>
    )
}

export default Error;