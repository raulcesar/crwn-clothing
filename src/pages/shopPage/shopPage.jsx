import './shopPage.scss';
import CollectionsOverview from '@components/collections-overview/collections-overview';
import CollectionPage from '@pages/collection/collection';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
    console.log(`in shop: ${match.path}`);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>

    );
};

export default ShopPage;

