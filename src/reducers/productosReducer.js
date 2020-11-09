import {
    AGREGAR_PRODUCTO,
    AGREGR_PRODUCTO_EXITO,
    AGREGR_PRODUCTO_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}