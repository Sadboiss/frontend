import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { cartActions } from '../actions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ProductCard = ({ cart, product, addToCart }) => {
    const [inStock, setInStock] = useState(0);

    const classes = useStyles();

    useEffect(() => {
        //calcInStock();
    }, [product])

    const handleAction = () => {
        if (product) {
            addToCart(cart, product);
        }
    }

    const calcInStock = () => {
        if (product)
            setInStock(product.productSizes.map(ps => ps.inStock).reduce((z, y) => z + y));
    }

    const isOfOutStock = () => {
        return inStock <= 0;
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`data:image/jpeg;base64,${product.productImages[0].imageData}`}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => handleAction()}>
                    Add to cart
                    </Button>
            </CardActions>
        </Card>
    )
}

const mapStateToProps = (state) => {
    const { cart } = state.carts
    return {
        cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (cart, product) => dispatch(cartActions.addToCart(cart, product)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);