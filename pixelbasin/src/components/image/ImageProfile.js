import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {get_image} from '../../actions/images';
import Loading from '../global/Loading';
import AltResults from '../global/AltResults';
import { Row, Col, Image, Card, ListGroup} from 'react-bootstrap';
import '../styles/GlobalStyles.scss';

/* TODO
- Restyle for propper UX
- Add image uploader image
*/

const ImageProfile = ({get_image, image:{loading,image}}) => {

  let { imageid } = useParams();
  useEffect(() => {
      get_image(imageid)
  }, [get_image, imageid])

  let imageSection = (
      <>
      {!loading && image ? (
        <>
        <Row>
                <Col >
                <Image className="img-fluid w-100" src={image.largeImageURL} thumbnail fluid rounded alt="..." ></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                <ListGroup variant="flush">
                        <ListGroup.Item><span className="fw-bold">Total Comments: </span>{image.comments}</ListGroup.Item>
                        <ListGroup.Item><span className="fw-bold">Total Downloads: </span>{image.downloads}</ListGroup.Item>
                        <ListGroup.Item><span className="fw-bold">Total Views: </span>{image.views}</ListGroup.Item>
                        <ListGroup.Item><span className="fw-bold">Total Likes: </span>{image.likes}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                <ListGroup variant="flush">
                        <ListGroup.Item><span className="fw-bold">User: </span>{image.user}</ListGroup.Item>
                        <ListGroup.Item><span className="fw-bold">User ID: </span>{image.user_id}</ListGroup.Item>
                        <ListGroup.Item><span className="fw-bold">Tags: </span>{image.tags}</ListGroup.Item>
                        <ListGroup.Item><span className="fw-bold">Image URL: </span>{image.userImageURL}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </>
      ) : (<AltResults />)}
      
      </>
  )

  let loadingCheck = (
    <>
    {loading ? <Loading /> : imageSection}
    </>
)

  return (
    <>
      {loadingCheck}
    </>
  )
}

ImageProfile.propTypes = {
    get_image: PropTypes.func,
    image: PropTypes.object,
  };

const mapStateToProps = state => ({
    image: state.images,
  });

export default connect(mapStateToProps, {get_image})(ImageProfile)
