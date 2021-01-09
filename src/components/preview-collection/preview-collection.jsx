// import { Component } from 'react';
import './preview-collection.scss';
import CollectionItem from '@components/collection-item/collection-item';



const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => {
                            // const toPass = {id, ...allPrpos};
                            return (
                                <CollectionItem key={item.id} item={item} />
                            );
                        })
                };
            </div>
        </div>
    );
};

export default PreviewCollection;
