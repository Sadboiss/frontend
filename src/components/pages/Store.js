import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox';
import Card from '../Card';
import { connect } from 'react-redux';
import { productActions } from '../../actions';

const Filters = [
    //Size
    { name: "XS", type: "size", value: "xs" },
    { name: "S", type: "size", value: "s" },
    { name: "M", type: "size", value: "m" },
    { name: "L", type: "size", value: "l" },
    { name: "XL", type: "size", value: "xl" },
    //Gender
    { name: "Male", type: "gender", value: "male" },
    { name: "Female", type: "gender", value: "female" },
    //Price
    { name: "$", type: "price", value: "0, 20" },
    { name: "$$", type: "price", value: "20, 50" },
    { name: "$$$", type: "price", value: "50, 100" },
];

const Store = (props) => {
    let size = Filters.filter(f => { return f.type === 'size' })
    let gender = Filters.filter(f => { return f.type === 'gender' })
    let price = Filters.filter(f => { return f.type === 'price' })

    useEffect(() => {
        props.getAll();
    }, [])

    return (
        <div className="store-wrapper flex-row">
            <div className="flex-column filter-panel">
                <div className="flex-column section">
                    <h3>Size</h3>
                    {size.map((filter, index) => {
                        return <FilterCheckbox key={index} filter={filter} />
                    })}
                </div>
                <br />
                <div className="flex-column">
                    <h3>Gender</h3>
                    {gender.map((filter, index) => {
                        return <FilterCheckbox key={index} filter={filter} />
                    })}
                </div>
                <br />
                <div className="flex-column">
                    <h3>Price</h3>
                    {price.map((filter, index) => {
                        return <FilterCheckbox key={index} filter={filter} />
                    })}
                </div>
            </div>
            <div className="shop-content flex-column">
                <div className="flex-row search-bar">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="item-row flex-row">
                    {props.items ?
                        props.items.map((product, index) => {
                            return <Card product={product} key={index} />
                        })
                        :
                        <p>Nothing in store</p>
                    }
                </div>
                {/* <div className="item-row flex-row">
                    <MACard />
                    <MACard />
                    <MACard />
                    <MACard />
                </div>
                <div className="item-row flex-row">
                    <MACard />
                    <MACard />
                    <MACard />
                    <MACard />
                </div>
                <div className="item-row flex-row">
                    <MACard />
                    <MACard />
                    <MACard />
                    <MACard />
                </div>
                <div className="item-row flex-row">
                    <MACard />
                    <MACard />
                    <MACard />
                    <MACard />
                </div> */}
            </div>
        </div>
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