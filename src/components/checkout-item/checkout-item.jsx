import './checkout-item.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '@redux/cart/cart.actions';


const CheckoutItem = ({ cartItem, clearItem, remove, add }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>

            <span className='quantity'>
                <div className='arrow' onClick={() => remove(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow'onClick={() => add(cartItem)}>&#10095;</div>
            </span>

            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    remove: item => dispatch(removeItem(item)),
    add:  item => dispatch(addItem(item)),
});


export default connect(null, mapDispatchToProps)(CheckoutItem);

