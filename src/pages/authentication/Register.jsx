import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Modal} from 'react-bootstrap';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import AOS from "aos";
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';

const RegistrationForm = () => {
    const [notif, setNotif] = useState("");
    const [notifError, setNotifError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        passwordRepeat: '',
        role: 'admin',
        profilePictureUrl: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const payload = {
            email: formData.email,
            name: formData.name,
            password: formData.password,
            passwordRepeat: formData.passwordRepeat,
            role: formData.role,
            profilePictureUrl: formData.profilePictureUrl,
            phoneNumber: formData.phoneNumber

        };
        axios
            .post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register', payload,{
                headers: {
                    'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
                }
            })
            .then((response) => {
                setNotif("Register Success");
                const token = response.data.token;
                localStorage.setItem("token", token);
                console.log(response);
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            })
            .catch((error) => {
                console.log(error.response);
                setNotifError(error.response.data.message);
                setShowModal(true);
            });
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Layout>
        <div className="registerpage">
                <div className="box-container container">
                    <div className="row align-items-center">
                       <div className="d-flex" style={{ paddingTop: '150px'}}>
                       <div className="leftColumn col-md-6">
                            <p className="leftParagraph">Get on Board, Your New Adventure Awaits.</p>
                            <div className="social-login mt-3">
                                <p>Already have an account?</p>
                                <Link to="/login">
                                    <button className="btn3 btn btn-primary me-2">Login</button>
                                </Link>
                            </div>
                        </div>
                        <div className="rightColumn col-md-6">
                            <form onSubmit={handleSubmit}>
                                <h2>Register</h2>
                                <div className="mb-1">
                                    <label htmlFor="email" className="form-label">Email ID</label>
                                    <input type="email" className="form-control" id="email" name="email" style={{ fontSize: '12px'}} onChange={handleChange} />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="type" className="form-control" id="name" name="name" style={{ fontSize: '12px'}} onChange={handleChange} />
                                </div>
                                <div className='mb-1 row'>
                                <div className="col-6">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control1" id="password" name="password" style={{ fontSize: '12px'}} onChange={handleChange} />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="passwordRepeat" className="form-label">Re-password</label>
                                    <input type="password" className="form-control1" id="passwordRepeat" name="passwordRepeat" style={{ fontSize: '12px'}} onChange={handleChange} />
                                </div>
                                </div>
                                <div className="mb-1 row">
                                <div className="col-6">
                                    <label htmlFor="roleSelect" className="form-label">Select Role</label>
                                    <select
                                    className="form-control1"
                                    id="roleSelect"
                                    name="role"
                                    onChange={handleChange}
                                    style={{ fontSize: '10px'}}
                                    >
                                    <option value="admin" onChange={handleChange}>Admin</option>
                                    <option value="user" onChange={handleChange}>User</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input type="number" className="form-control1" id="phoneNumber" name="phoneNumber" style={{ fontSize: '12px'}} onChange={handleChange} />
                                </div>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="profilePictureUrl" className="form-label">Profile Picture Url</label>
                                    <input type="imageUrl" className="form-control" id="profilePictureUrl" name="profilePictureUrl" style={{ fontSize: '12px'}} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn1 btn">Register</button>{!!notif.length && <p className='notif'>{notif}</p>}
                                
                                <Modal show={showModal} onHide={() => setShowModal(false)}>
                                    <Modal.Header closeButton> error
                                    </Modal.Header>
                                    <Modal.Body><h4>{notifError}</h4></Modal.Body>
                                </Modal>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            
        </div>
        </Layout>
    );
}

export default RegistrationForm;
