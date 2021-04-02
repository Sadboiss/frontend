import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userActions, modalActions } from '../../actions';
import { Paper, Modal, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm';


const AuthentificationModal = (props) => {
    const [tabIndex, setTabIndex] = useState('1');

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 600,
        margin: '20px auto'
    }

    return (
        <Modal
            open={props.modalProps.open}
            onClose={props.close}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <>
                <TabContext value={tabIndex}>
                    <Paper elevation={10} style={paperStyle}>
                        <TabList onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Login" value="1" />
                            <Tab label="Register" value="2" />
                        </TabList>
                        <TabPanel value="1">
                            <LoginForm />
                        </TabPanel>
                        <TabPanel value="2">
                            <RegisterForm />
                        </TabPanel>
                    </Paper>
                </TabContext>
            </>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    const { loggingIn, error } = state.authentication;
    const { modalProps } = state.modal;
    return {
        loggingIn,
        error,
        modalProps
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => dispatch(modalActions.close()),
        login: (email, password) => dispatch(userActions.login(email, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthentificationModal);