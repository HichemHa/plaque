import { ADD_PAYS, ADD_MAT, ADD_DEP } from './../constants/actionTypes';


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