import React, { useState,  } from "react";
import { Grid, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { connect } from 'react-redux';
import { modalActions } from '../../../actions'; 
import ProductsTable from '../../tables/ProductsTable';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Admin = (props) => {
    const [tabIndex, setTabIndex] = useState('1');

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    return (
        <>
            <TabContext value={tabIndex}>
                <Grid>
                    <TabList onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Products" value="1" />
                        <Tab label="Stocks" value="2" />
                    </TabList>
                    <TabPanel value="1">
                        <ProductsTable />
                    </TabPanel>
                    <TabPanel value="2">

                    </TabPanel>
                </Grid>
            </TabContext>
            <IconButton aria-label="add" onClick={() => props.open('ADD_EDIT_PRODUCT')}>
                <AddCircleIcon />
            </IconButton>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        open: (modalType, modalProps) => dispatch(modalActions.open(modalType, modalProps)),
    }
};

export default connect(null, mapDispatchToProps)(Admin);