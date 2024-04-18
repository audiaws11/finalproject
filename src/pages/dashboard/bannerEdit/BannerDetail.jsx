import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBannerById } from "../../../api/api";
import Layout from "../../../components/layout/Layout";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './banneredit.css';

const BannerDetail = () => {
    const [bannerDetail, setBannerDetail] = useState({});
    const { id } = useParams();
    console.log(`Fetching details for banner ID: ${id}`); // For debugging

    const fetchBannerId = () => {
        getBannerById(id)
            .then((response) => {
                setBannerDetail(response.data.data);
                console.log(response.data.data);
            })
            .catch((err) => {
                console.error('Failed to fetch banner details:', err);
            });
    };

    useEffect(() => {
        fetchBannerId();
    }, [id]);

    // Helper function to safely access and format date strings
    const formatDate = (dateStr) => {
        return dateStr ? new Date(dateStr).toLocaleDateString() + ' (' + new Date(dateStr).toLocaleTimeString() + ')' : '';
    };

    return (
        <div style={{ backgroundColor: '#f2ede4' }}>
            <Layout>
                {/* header offer */}
                <div className="container-fluid offer-detail">
                    <div className="container-fluid offer1-detail" data-aos="" data-aos-duration="500">
                        <div className="container offer-layout-detail" style={{ backgroundImage: `url(${bannerDetail.imageUrl})`, height: '500px' }}>
                            <div className="row" style={{ height: '100%' }}>
                                <div className="col-6 text-left offer-detail-header-section">
                                    <h1>{bannerDetail.name}</h1>
                                    <div className="breadcrumb-offer-detail">
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item href="/dashboard/banner">Banner</Breadcrumb.Item>
                                            <Breadcrumb.Item active>{bannerDetail.name}</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* body */}
                <div className="tour-offer-container">
                    <div className="tour-offer-rating row container">
                        <div className="col">
                            <h2>{bannerDetail.name}</h2>
                            <p>ID: {bannerDetail.id}</p>
                        </div>
                    </div>
                    <div className="tour-offer-description">
                        <h3>Detail</h3>
                        <p>Created: {formatDate(bannerDetail.createdAt)}</p>
                        <p>Updated: {formatDate(bannerDetail.updatedAt)}</p>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default BannerDetail;
