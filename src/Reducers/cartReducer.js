const initialData = {
  cart: [ ],
};

function cartReducer(state = initialData, action) {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,

        cart: [...state.cart, action.payload],
      };
      case "ADDD": return{
        ...state,
        cart : ++state.cart
    }

    default: {
      return state;
    }
  }
}

export default cartReducer;
