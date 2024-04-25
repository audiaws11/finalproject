import React, { useCallback, useState } from 'react';
import { getLogout } from '../../api/api';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './navbarDashboard.css';

const NavbarDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);  // State to handle sidebar visibility
    const toggleSidebar = () => setIsOpen(!isOpen); // Function to toggle sidebar

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
        <div>
            <button className="menu-toggle" onClick={toggleSidebar}><i className="bi bi-three-dots-vertical"></i></button>
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="logo">
                    <img src="/image2vector.svg" alt="logo" style={{ width: '35px', height: '35px' }}/>Kaja <span style={{ color: '#f37523' }}>Travel</span>
                </div>
                <div className="sidebar-item" onClick={() => window.location.href = '/dashboard'}>
                    <i className="bi bi-house-fill"></i>
                    <span>Home</span>
                </div>
                <div className="sidebar-item" onClick={() => window.location.href = '/all-user'}>
                    <i className="bi bi-people-fill"></i>
                    <span>All Users</span>
                </div>
                <div className="sidebar-item" onClick={() => window.location.href = '/dashboard/banner'}>
                    <i className="bi bi-columns-gap"></i>
                    <span>Banner</span>
                </div>
                <div className="sidebar-item" onClick={() => window.location.href = '/dashboard/offer'}>
                    <i className="bi bi-percent"></i>
                    <span>Offer</span>
                </div>
                <div className="sidebar-item" onClick={() => window.location.href = '/dashboard/category'}>
                    <i className="bi bi-bookmarks-fill"></i>
                    <span>Category</span>
                </div>
                <div className="sidebar-item" onClick={() => window.location.href = '/dashboard/activity'}>
                    <i className="bi bi-suitcase-fill"></i>
                    <span>Activity</span>
                </div>
                <div className="navbottom" style={{ marginTop: 'auto' }} onClick={handleLogout}>
                    <i className="bi bi-box-arrow-left"></i>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default NavbarDashboard;
