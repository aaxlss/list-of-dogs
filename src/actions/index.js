export const addFavorite = payload => {
return ({
    type: 'ADD_FAVORITE',
    payload
})};

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload
})

export const addToList = payload =>( {
    type: 'ADD_TO_LIST',
    payload
})

