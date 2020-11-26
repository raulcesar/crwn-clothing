import './cart-icon.scss';
import { ReactComponent as ShoppngCartIcon } from '@assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '@redux/cart/cart.actions';


const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppngCartIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
};

// const mapStateToProps = ({ cartReducer }) => (
//     {
//         hidden: cartReducer.hidden
//     });

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);

// export default CartIcon;
