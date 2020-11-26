import './cart-item.scss';
// import { connect } from 'react-redux';
// import { toggleCartHidden } from '@redux/cart/cart.actions';


const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name}></img>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>


        </div>
    );
};

// const mapStateToProps = ({ cartReducer }) => (
//     {
//         hidden: cartReducer.hidden
//     });

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// export default connect(null, mapDispatchToProps)(CartItem);

export default CartItem;
