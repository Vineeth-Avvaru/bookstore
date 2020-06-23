import * as ActionTypes from './ActionTypes';

export const initialState = {
    currentPage: 1,
    booksPerPage: 18
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state;
    }
}