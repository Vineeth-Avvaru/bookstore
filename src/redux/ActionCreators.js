import * as ActionTypes from './ActionTypes';

export const changePage = (number) => ({
    type: ActionTypes.CHANGE_PAGE,
    payload: number
})

export const handleSearch = (content) => ({
    type: ActionTypes.HANDLE_SEARCH,
    payload: content
})