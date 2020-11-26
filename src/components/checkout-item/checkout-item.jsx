import './checkout-item.scss';
// // import ZButton from '@components/z-button/z-button';
// // import CartItem from '@components/cart-item/cart-item';
// import { connect } from 'react-redux';
// import { selectCartItems, selectCartTotal } from '@redux/cart/cart.selectors';
// import { createStructuredSelector } from 'reselect';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />

            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>${price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    );
};
// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems,
//     total: selectCartTotal
// });

// export default connect(mapStateToProps)(CheckoutPage);
export default CheckoutItem;
