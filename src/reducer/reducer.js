const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        case 'ADD_TO_LIST':
            return {
                ...state,
                dogs:[...state.dogs, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(dog=> dog.url !== action.payload)
            }
        default:
            return state;


    }
}

export default reducer;