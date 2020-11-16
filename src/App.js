import './App.css';
// import './Home';
import HomePage from '@pages/home/Home';
import ShopPage from '@pages/shopPage/shopPage';
import { Switch, Route } from 'react-router-dom';

// import { Route } from 'react-router-dom';



function App () {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/shop' component={ShopPage}></Route>
            </Switch>

        </div>
    );
}

export default App;
