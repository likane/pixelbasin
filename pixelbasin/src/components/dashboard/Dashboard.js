import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/GlobalStyles.scss'
import { Row, Col, Image} from 'react-bootstrap';
import AltResults from '../global/AltResults';
import Loading from '../global/Loading';
import {search_images} from '../../actions/images';

const Dashboard = ({search_images, images: {loading, image_list}}) => {
    useEffect(() => {
        search_images();
    },[search_images]);

    let imageList = (
        <>
        {!image_list || image_list.length == 0 ? <AltResults /> : (
            <div className="d-flex align-content-start justify-content-center flex-wrap gap-2">
                {image_list.map(image => (
                     <a className='text-decoration-none d-flex align-items-stretch' key={image.id} href={`/image/${image.id}`}><Image src={image.previewURL} thumbnail fluid rounded alt="..." ></Image></a>
                    
                ))}
          </div>
        )}
        </>
    )

    let loadingCheck = (
        <>
        {loading ? <Loading /> : imageList}
        </>
    )

    let imageGrid = (
        <>
        <Row className='mb-6'>
            <Col>
            {loadingCheck}
            </Col>
        </Row>
        
        </>
    )

    return (
        <>
            {imageGrid}
        </>
    )
}

Dashboard.propTypes = {
    search_images: PropTypes.func,
    images: PropTypes.object
  };

const mapStateToProps = state => ({
    images: state.images
  });

export default connect(mapStateToProps, {search_images})(Dashboard)