
import './navbarDashboard.css'; // Make sure to create a corresponding CSS file

const NavbarDashboard = () => {
  return (
        
        <div className="sidebar">
            <div className="logo">
                <img src="/image2vector.svg" alt="logo" style={{ width: '35px', height: '35px' }}/>Kaja
            </div>
            <div className="sidebar-item active">
               <i className="bi bi-house-fill"></i>
                <span>Home</span>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-people-fill"></i>
                <span>All Users</span>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-columns-gap"></i>
                <span>Banner</span>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-percent"></i>
                <span>Promo</span>
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
                <i className="bi bi-gear-fill"></i>
                <span>Setting</span>
            </div>
            <div className="navbottom">
                <i className="bi bi-box-arrow-left"></i>
                <span>Logout</span>
            </div>
        </div>
    
  );
};

export default NavbarDashboard;
