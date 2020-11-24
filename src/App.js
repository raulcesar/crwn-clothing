import './App.css';
// import './Home';
import HomePage from '@pages/home/Home';
import ShopPage from '@pages/shopPage/shopPage';
import SigninLoginPage from '@pages/signin-login-page/signin-login-page';
import Header from '@components/header/header';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from '@fbase/firebase-utils.js';
// import { Route } from 'react-router-dom';



class App extends Component {
    constructor () {
        super();
        this.unsubsribeFromAuth = null;

        this.state = {
            currentUser: null
        };
    }


    componentDidMount () {
        this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            this.setState({ currentUser: null });

            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth, {});
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
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
                <Header currentUser={this.state.currentUser} />
                {/* {this.state.currentUser.displayName} */}
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route path='/signinlogin' component={SigninLoginPage}></Route>

                </Switch>

            </div>
        );
    }
}

export default App;
