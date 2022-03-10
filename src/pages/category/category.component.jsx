import React from 'react'
import {connect} from 'react-redux'
import { collectionSelect } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './category.styles.scss'

const CategoryPage = ({collection}) => {
  console.log('categoryPage', collection)
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>{items.map(item => <CollectionItem key={item.id} item={item}/>)}</div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
    collection: collectionSelect(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage)
