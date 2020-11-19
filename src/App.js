import './App.css';
// import './Home';
import HomePage from '@pages/home/Home';
import ShopPage from '@pages/shopPage/shopPage';
import SigninLoginPage from '@pages/signin-login-page/signin-login-page';
import Header from '@components/header/header';

import { Switch, Route } from 'react-router-dom';

// import { Route } from 'react-router-dom';



function App () {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/shop' component={ShopPage}></Route>
                <Route path='/signinlogin' component={SigninLoginPage}></Route>

            </Switch>

        </div>
    );
}

export default App;
