import error from './assets/images/error.png';
import  './assets/styles/error.scss';


const Error = () => {
    return (
        <div className=' error'>
        <img className=' err' src={error} alt="Error"/>
        </div>
    )
}

export default Error;