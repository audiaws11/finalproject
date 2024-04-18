import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getActivityById } from "../../api/api";
import Layout from "../../components/layout/Layout";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './detailactivity.css';

const DetailActivity = () => {
    const [detailActivity, setDetailActivity] = useState({});
    const { id } = useParams();
    console.log(`Fetching details for activity ID: ${id}`); // For debugging

    
    const fetchDetailActivity = () => {
       getActivityById(id)
            .then((response) => {
                setDetailActivity(response.data.data);
                console.log(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchDetailActivity();
    }, [id]);

    const backgroundImageUrl = detailActivity.imageUrls && detailActivity.imageUrls.length > 1 ? detailActivity.imageUrls[1] : '';

    return (
        <div style={{ backgroundColor: '#f2ede4' }}>
            <Layout>
            {/* header  */}
            <div className="detail-header-page row " style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className="col-6">
                <h3 className="tagline-detail" >{detailActivity.title}</h3> 
                <div className="breadcrumb-detail">
                <Breadcrumb>
                    <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/activity">
                        Activity
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active >{detailActivity.title}</Breadcrumb.Item>
                </Breadcrumb>
                </div>
            </div>
            </div>
            
            {/* body */}

            <div className="tour-container">
                <div className="tour-rating row container">
                <div className="col-md-6">
                    <h2>{detailActivity.title}</h2>
                    <p><i className="bi bi-geo-alt"></i> {detailActivity.city}, {detailActivity.province}</p>
                    <p><i className="bi bi-star-fill" style={{color: 'yellow', fontSize: '10px'}}></i> <span>  {detailActivity.rating}/ 5 ({detailActivity.total_reviews} Reviews)</span></p>
                </div>
                <div className="col-md-6 text-end">
                    <p>from</p>
                    <h2>IDR {detailActivity.price}</h2>
                    <p><del>IDR {detailActivity.price_discount}</del></p>
                </div>
                </div>
            
                <div className="tour-description">
                    <h3>Description:</h3>
                    <p>{detailActivity.description}</p>
                    <h3>Faciilities:</h3>
                    <p>{detailActivity.facilities}</p>
                </div>
                <div className="tour-location">
                    <h3>Location:</h3>
                    <p>{detailActivity.address}</p>
                    <div className="location-bar">
                        <div className="location-info">
                             <p><i className="bi bi-geo-alt"></i> {detailActivity.city}, {detailActivity.province}</p>
                        </div>
                        <div
                            className="google-map"
                            dangerouslySetInnerHTML={{ __html: detailActivity.location_maps }}
                        />
                        </div>
                </div>


            
               
                </div>

            </Layout>
        </div>
    )
}

export default DetailActivity;