import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = (state) => state.shop

export const selectShopItem = createSelector(
  selectShop,
  (shop) => shop.collections
)

export const collectionSelect = memoize((collectionUrlParam) =>
  createSelector(
    selectShopItem,
    (collections) => collections[collectionUrlParam]
  )
)
export const selectCollectionPreview = createSelector(selectShopItem, (cols) =>
  Object.keys(cols).map((key) => cols[key])
)
