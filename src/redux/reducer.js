import * as ActionTypes from './ActionTypes';

export const initialState = {
    currentPage: 1,
    booksPerPage: 18,
    searchTitle: ""
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_PAGE:
            return {...state, currentPage: action.payload}
        case ActionTypes.HANDLE_SEARCH:
            let lastChar = action.payload[action.payload.length-1];
            if(lastChar === " ") state = {...state, searchTitle: action.payload}
            else  state = {...state, searchTitle: action.payload, currentPage: 1}
            return state;
        default:
            return state;
    }
}