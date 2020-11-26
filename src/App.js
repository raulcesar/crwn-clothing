import './App.css';
// import './Home';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '@pages/home/Home';
import ShopPage from '@pages/shopPage/shopPage';
import SigninLoginPage from '@pages/signin-login-page/signin-login-page';
import CheckoutPage from '@pages/checkout-page/checkout-page';

import Header from '@components/header/header';

import { auth, createUserProfileDocument } from '@fbase/firebase-utils.js';

// import { Route } from 'react-router-dom';
import { setCurrentUser } from '@redux/user/user.actions';
import { selectCurrentUser } from '@redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends Component {
    constructor () {
        super();
        this.unsubsribeFromAuth = null;
    }


    componentDidMount () {
        const { setCurrentUser } = this.props;
        this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            setCurrentUser(null);

            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth, {});
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                    console.log(this.state);
                });
            }
        });
    }
    componentWillUnmount () {
        this.unsubsribeFromAuth();
        console.log('unmounting');
    }

    render () {
        return (
            <div>
                <Header />
                {/* {this.state.currentUser.displayName} */}
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/signinlogin'
                        render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninLoginPage />)}
                    />
                    <Route exact path='/checkout' component={CheckoutPage} />



                </Switch>

            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser });

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
