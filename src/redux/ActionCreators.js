import * as ActionTypes from './ActionTypes';

export const changePage = (number) => ({
    type: ActionTypes.CHANGE_PAGE,
    payload: number
})