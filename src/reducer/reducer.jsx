export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_FEVORITE":
      return {
        ...state,
        favorites: [{ ...action.payload }, ...state.favorites],
      };
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((c) => c.id !== action.payload.id),
      };
    //   case "CHANGE_CART_QTY":
    //     return {
    //       ...state,
    //       cart: state.cart.filter((c) =>
    //         c.id == action.payload.id ? (c.qty = action.payload.qty) : c.qty
    //       ),
    //     };

    default:
      break;
  }
};
