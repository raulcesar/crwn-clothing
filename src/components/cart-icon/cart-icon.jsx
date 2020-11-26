import './cart-icon.scss';
import { ReactComponent as ShoppngCartIcon } from '@assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '@redux/cart/cart.actions';
import { selectCartItemsCount } from '@redux/cart/cart.selectors';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppngCartIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapStateToProps = (state) => (
    {
        itemCount: selectCartItemsCount(state)
    });

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// export default CartIcon;
