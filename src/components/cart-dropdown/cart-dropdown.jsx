import './cart-dropdown.scss';
import ZButton from '@components/z-button/z-button';
import CartItem from '@components/cart-item/cart-item';
import { connect } from 'react-redux';

// import { ReactComponent as ShoppngCartIcon } from '@assets/shopping-bag.svg';

const CartDropDown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {

                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <ZButton>Checkout</ZButton>

        </div>
    );
};
const mapStateToProps = ({ cartReducer: { cartItems } }) => {
    return {cartItems};
};

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

export default connect(mapStateToProps)(CartDropDown);

// export default CartDropDown;
