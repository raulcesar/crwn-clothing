import './header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '@assets/crown.svg';
import { auth } from '@fbase/firebase-utils.js';
import CartIcon from '@components/cart-icon/cart-icon';
import CartDropDown from '@components/cart-dropdown/cart-dropdown';


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signinlogin'>SIGN IN</Link>
            }
            <CartIcon />

        </div>
        {
            hidden ? null : <CartDropDown />
        }

    </div>
);
const mapStateToProps = ({ userReducer: { currentUser }, cartReducer: { hidden } }) => {
    return {
        currentUser,
        hidden
    };
};


export default connect(mapStateToProps)(Header);
