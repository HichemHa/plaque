import { ADD_PAYS, ADD_MAT, ADD_DEP } from './../constants/actionTypes';


const initialState = {
    pays: null,
    mat: {},
    dep: null
}

const palqReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PAYS:
            return {
                ...state,
                pays: payload
            }
        case ADD_MAT:
            return {
                ...state,
                mat: payload
            }
        case ADD_DEP:
            return {
                ...state,
                dep: payload
            }


        default:
            return state;
    }


}

export default palqReducer;