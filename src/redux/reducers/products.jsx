import ActionTypes from '../actionTypes/actionTypes'

const initial_state = {
  featuredProducts: [],
}

const ProductsReducers = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.GET_FEATURED_PRODUCTS:
      return {
        ...state,
        featuredProducts: action.payload,
      }
    default:
      return state
  }
}

export default ProductsReducers