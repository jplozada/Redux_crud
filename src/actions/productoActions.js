import {
    AGREGAR_PRODUCTO,
    AGREGR_PRODUCTO_EXITO,
    AGREGR_PRODUCTO_ERROR
} from '../types';

// Crear nuevos productos
export function crearNuevoProductoAction(){
    return () => {
        console.log('desde action');
    }
}