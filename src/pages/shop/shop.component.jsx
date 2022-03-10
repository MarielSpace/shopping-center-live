import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collection-overview.component';
import CategoryPage from '../category/category.component';

 const ShopPage  = ({match}) =>  {
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
    );
}



export default (ShopPage);
