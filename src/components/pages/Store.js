import React, { Component } from 'react';
import FilterCheckbox from '../FilterCheckbox';
import MACard from '../MACard';

export default class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterValue: ""
        }
    }
    render() {
        let size = Filters.filter(f => { return f.type === 'size' })
        let gender = Filters.filter(f => { return f.type === 'gender' })
        let price = Filters.filter(f => { return f.type === 'price' })

        // const handleChange = (event) => {
        //     this.setState({
        //         [event.target.name]: event.target.value,
        //     });
        // }

        return (
            <div className="store-wrapper flex-row">
                <div className="flex-column filter-panel">
                    <div className="flex-column section">
                        <h3>Size</h3>
                        {size.map((filter, index) => {
                            return <FilterCheckbox key={index} filter={filter} />
                        })}
                    </div>
                    <br/>
                    <div className="flex-column">
                    <h3>Gender</h3>
                        {gender.map((filter, index) => {
                            return <FilterCheckbox key={index} filter={filter} />
                        })}
                    </div>
                    <br/>
                    <div className="flex-column">
                    <h3>Price</h3>
                        {price.map((filter, index) => {
                            return <FilterCheckbox key={index} filter={filter} />
                        })}
                    </div>
                </div>  
                <div className="shop-content flex-column">
                    <div className="flex-row search-bar">
                        <input type="text" placeholder="Search"/>
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
                    </div>
                    <div className="item-row flex-row">
                        <MACard />
                        <MACard />
                        <MACard />
                        <MACard />
                    </div>
                </div>
            </div>
        )
    }

}

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
]


// const Items = [
//     {name: "Item A", description: "Description",}
// ]