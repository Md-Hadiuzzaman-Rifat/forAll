import "./Header.scss"
import { MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate= useNavigate()
    const handler=()=>{
        navigate('/dashboard')
    }

    return (
        <div className='dashboardHeader'>
            <div className='container' onClick={handler}><p>Dashboard</p>
            <MdDashboard /></div>
        </div>
    );
};

export default Header;