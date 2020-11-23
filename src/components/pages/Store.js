import React, { useEffect } from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { productActions } from '../../actions';
import { Loader } from 'semantic-ui-react';
import './Store.scss';

const Store = (props) => {
    useEffect(() => {
        props.getAll();
    }, [])

    return (
        <>
            <Loader active={props.loading} inline="centered" />
            <div className="wrapper">
                <div className="filters">
                    
                </div>
                <div className="products">
                    {props.items ?
                        props.items.map((product, index) => {
                            return <Card product={product} key={index} />
                        })
                        :
                        <p>Nothing in store</p>
                    }
                </div>
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    const { loading, items, error } = state.products;
    return {
        loading,
        items,
        error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => dispatch(productActions.getAll()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);