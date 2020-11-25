import './App.css';
// import './Home';
import { connect } from 'react-redux';

import HomePage from '@pages/home/Home';
import ShopPage from '@pages/shopPage/shopPage';
import SigninLoginPage from '@pages/signin-login-page/signin-login-page';
import Header from '@components/header/header';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from '@fbase/firebase-utils.js';
// import { Route } from 'react-router-dom';
import { setCurrentUser } from '@redux/user/user.actions';


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


                </Switch>

            </div>
        );
    }
}
const mapStateToProps = ({ userReducer }) => (
    {
        currentUser: userReducer.currentUser
    });

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
