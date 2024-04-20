
import './navbarDashboard.css'; 
import { useCallback } from 'react';
import { getLogout } from '../../api/api';
const NavbarDashboard = () => {
    const handleLogout = useCallback(async () => {
        const result = await getLogout();
        if (result) {
           
            console.log('Redirecting to login page...')
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        }
    }, []);

  return (
        
        <div className="sidebar">
            <div className="logo">
                <img src="/image2vector.svg" alt="logo" style={{ width: '35px', height: '35px' }}/>Kaja
            </div>
            <div className="sidebar-item" onClick={() => window.location.href = '/dashboard'}>
               <i className="bi bi-house-fill"></i>
                <span >Home</span>
            </div>
            <div className="sidebar-item" onClick={() => window.location.href = '/dashboard/all-user'}>
                <i className="bi bi-people-fill"></i>
                <span >All Users</span>
            </div>
            <div className="sidebar-item"  onClick={() => window.location.href = '/dashboard/banner'}>
                <i className="bi bi-columns-gap"></i>
                <span>Banner</span>
            </div>
            <div className="sidebar-item"onClick={() => window.location.href = '/dashboard/offer'}>
                <i className="bi bi-percent"></i>
                <span>Offer</span>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-bookmarks-fill"></i>
                <span>Category</span>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-suitcase2-fill"></i>
                <span>Activity</span>
            </div>
            <div className="navbottom" style={{ marginTop: 'auto' }}>
                <i className="bi bi-box-arrow-left"></i>
                <span onClick={handleLogout} >Logout</span>
            </div>
           
        </div>
    
  );
};

export default NavbarDashboard;
