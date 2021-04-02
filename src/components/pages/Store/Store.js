import React, { useEffect } from 'react';
import ProductCard from '../../ProductCard';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { productActions } from '../../../actions';
import { Loader } from 'semantic-ui-react';

const Store = (props) => {
    useEffect(() => {
        props.getAll();
    }, [])

    return (
        <>
            <Loader active={props.loading} inline="centered" />
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >

                {props.products ?
                    props.products.filter(product => product.display).map((product, index) => {
                        return (
                            <Grid key={index} item xs>
                                <ProductCard product={product}/>
                            </Grid>
                        )
                    })
                    :
                    <p>Nothing in store</p>
                }
            </Grid>
        </>
    )

}

const mapStateToProps = (state) => {
    const { loading, products, error } = state.products;
    return {
        loading,
        products,
        error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => dispatch(productActions.getAll()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);