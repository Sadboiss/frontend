import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { productActions, categoryActions, sizeActions, modalActions } from '../../actions';
import { Image } from 'semantic-ui-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ProductsTable = (props) => {
    useEffect(() => {
        props.getSizes();
        props.getCategories();
        props.getProducts();
    }, []);

    const handleChange = async (event, value) => {
        let product = JSON.parse(event.target.value);
        product.display = value;
        props.updateDisplay(product);
    }

    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Available Products</TableCell>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Price&nbsp;($)</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.loaded ?
                            props.products.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        <Switch value={JSON.stringify(product)} checked={product.display} onChange={(event, data) => handleChange(event, data)} />
                                    </TableCell>
                                    <TableCell align='right'>{product.id}</TableCell>
                                    <TableCell align="right">{product.name}</TableCell>
                                    <TableCell align="right">{product.price} $</TableCell>
                                    <TableCell align="right"><Image src={`data:image/jpeg;base64,${product.image}`} size='tiny' /></TableCell>
                                    <TableCell align="right">{product.category.name}</TableCell>
                                    <TableCell align="center">
                                        <IconButton
                                            aria-label="edit"
                                            aria-haspopup="true"
                                            onClick={() => props.open('ADD_EDIT_PRODUCT', {selectedProduct: product})}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="delete"
                                            aria-haspopup="true"
                                            onClick={() => props.open('DELETE_PRODUCT', {selectedProduct: product})}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                            :
                            null
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const mapStateToProps = (state) => {
    const { loaded, products } = state.products;
    const { sizes } = state.sizes;
    return {
        loaded,
        products,
        sizes
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSizes: () => dispatch(sizeActions.getAll()),
        getCategories: () => dispatch(categoryActions.getAll()),
        getProducts: () => dispatch(productActions.getAll()),
        updateDisplay: (product) => dispatch(productActions.updateDisplay(product)),
        open: (modalType, modalProps) => dispatch(modalActions.open(modalType, modalProps))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);