import './collection.scss';
// import CollectionItem from '@components/collection-item/collection-item';

// import CollectionsOverview from '@components/collections-overview/collections-overview';
// import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { selectSpecificCollection } from '@redux/shop/shop.selectors';
import CollectionItem from '@components/collection-item/collection-item';
// import { createStructuredSelector } from 'reselect';



const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    // console.log(match.params.collectionId);
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

// export default CollectionPage;
const mapStateToProps = (state, ownProps) => ({
    collection: selectSpecificCollection(ownProps.match.params.collectionId)(state)
});

// createStructuredSelector({ collection: selectSpecificCollection });
export default connect(mapStateToProps)(CollectionPage);


