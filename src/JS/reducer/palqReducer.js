import { ADD_PAYS, ADD_MAT, ADD_DEP, CHANGE_COLOR_LATERAL, CHANGE_COLOR_MIDDLE,CHANGE_COLOR_TEXT  } from './../constants/actionTypes';


const initialState = {
    pays: null,
    mat: {},
    dep: null,
    colorL:null,
    colorM:null,
    colorT:null,

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
        case CHANGE_COLOR_LATERAL:
            return {
                ...state,
                colorL: payload
            }
        case CHANGE_COLOR_MIDDLE:
            return {
                ...state,
                colorM: payload
            }
        case CHANGE_COLOR_TEXT:
            return {
                ...state,
                colorT: payload
            }

        default:
            return state;
    }


}

export default palqReducer;