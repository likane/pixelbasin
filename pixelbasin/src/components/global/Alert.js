import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
// set variants: ['primary', 'secondary','success','danger','warning', 'info','light','dark',]

const AlertComponent = ({alerts}) => 
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert =>(
        <Alert key={alert.id} variant={alert.alertType}>
            {alert.msg}
        </Alert>
    ))


AlertComponent.propTypes = {
    alerts: PropTypes.array.isRequired
  };
  
  const mapStateToProps = state => ({
    alerts: state.alert
  });
  
  export default connect(mapStateToProps)(AlertComponent);