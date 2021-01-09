import './collections-overview.scss';
import PreviewCollection from '@components/preview-collection/preview-collection';
import { connect } from 'react-redux';
import { selectCollections } from '@redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({ collections: selectCollections });
export default connect(mapStateToProps)(CollectionsOverview);

