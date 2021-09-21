export const favoriteListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        favoriteList: [...state.favoriteList, { ...action.payload }],
      };
    case "REMOVE_FROM_LIST":
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "CLEAR_LIST":
      return {
        favoriteList: (state.favoriteList = []),
      };
    default:
      return state;
  }
};
