import React from 'react';
import { useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { search_images } from '../../actions/images';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

// Validation
const schema = Yup.object({
  searchphrase: Yup.string().min(1, 'Too Short! 1 Character Minimum').required('Required'),
});

const NavBar = ({search_images}) => {
  
  let formStyles = 'd-flex visible';
  let location = useLocation()

  if(location.pathname !== '/') {
    formStyles = 'd-flex invisible'
  } 

  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown.Divider />
        </Nav>
        <Formik
                initialValues={{searchphrase: ''}}
                validationSchema={schema}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    // When button submits form and form is in the process of submitting, submit button is disabled
                    setSubmitting(true);
                    try {
                      await(search_images(values.searchphrase))
                    } catch (error) {
                      console.error('error submitting form:', error)
                    }
                    resetForm();
                    setSubmitting(false);                  
                }}
      >
        {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting 
        }) => (
        <Form className={formStyles} onSubmit={handleSubmit}>
            <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
            name='searchphrase'
            onChange={handleChange} 
            onBlur={handleBlur} 
            value={values.searchphrase}
            className={touched.searchphrase && errors.searchphrase ? "error" : null}
            isInvalid={!!errors.searchphrase}
            required
            />
            <Button className='ms-2' variant="outline-primary" type='submit' disabled={isSubmitting}>Search</Button>
        </Form>
        )}
        </Formik>
        </Navbar.Collapse>
    </Container>
    </Navbar>
      
    </>
  )
}
NavBar.propTypes = {
  search_images: PropTypes.func,
  // images: PropTypes.object
};

const mapStateToProps = state => ({
  // images: state.images
});

export default connect(mapStateToProps,{search_images})(NavBar)

