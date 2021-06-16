import { ADD_PAYS, ADD_MAT, ADD_DEP, CHANGE_COLOR_LATERAL, CHANGE_COLOR_MIDDLE,CHANGE_COLOR_TEXT } from './../constants/actionTypes';


export const addPays = (payload) => {
    return {
        type: ADD_PAYS, payload
    }
}
export const addMat = (payload) => {
    return {
        type: ADD_MAT, payload
    }
}
export const adddep = (payload) => {
    return {
        type: ADD_DEP, payload
    }
}
export const changeCL = (payload) => {
    return {
        type: CHANGE_COLOR_LATERAL, payload
    }
}
export const changeCM = (payload) => {
    return {
        type: CHANGE_COLOR_MIDDLE, payload
    }
}
export const changeT = (payload) => {
    return {
        type: CHANGE_COLOR_TEXT, payload
    }
}