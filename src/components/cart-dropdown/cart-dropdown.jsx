import './cart-dropdown.scss';
import ZButton from '@components/z-button/z-button';
import CartItem from '@components/cart-item/cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '@redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '@redux/cart/cart.actions';

const CartDropDown = ({ cartItems, history, dispatch }) => {

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        :
                        <span className='empty-message'>buy some stuff</span>
                }
            </div>


            <ZButton onClick={() => {
                dispatch(toggleCartHidden());
                history.push('/checkout');

            }}>Checkout</ZButton>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems });

// export default withRouter(connect(mapStateToProps)(CartDropDown));
export default connect(mapStateToProps)(withRouter(CartDropDown));
