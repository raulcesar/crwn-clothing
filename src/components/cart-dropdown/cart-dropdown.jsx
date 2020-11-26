import './cart-dropdown.scss';
import ZButton from '@components/z-button/z-button';
// import { ReactComponent as ShoppngCartIcon } from '@assets/shopping-bag.svg';

const CartDropDown = ({ id, name, price, imageUrl }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <ZButton>Checkout</ZButton>

        </div>
    );
};

export default CartDropDown;
